import { uploadImageAction } from "@/actions/upload/upload-image-action";
import { Button } from "@/components/Button";
import { MAX_IMG_SIZE } from "@/lib/post/constants";
import { UploadIcon } from "lucide-react";
import { useRef, useTransition } from "react";
import { toast } from "react-toastify";

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startTransition] = useTransition();

  function handleChooseFile() {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  }

  function handleChange() {
    toast.dismiss();
    if (!fileInputRef.current) return;

    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0];

    if (!file) return;

    if (file.size > MAX_IMG_SIZE) {
      toast.error("Imagem muito grande. Escolha uma imagem menor que 900KB.");

      fileInput.value = "";
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    startTransition(async () => {
      const result = await uploadImageAction(formData);

      if (result.error) {
        toast.error(result.error);
        return;
      }

      toast.success(result.url);
    });

    fileInput.value = "";
  }

  return (
    <div className="flex flex-col gap-2">
      <Button type="button" onClick={handleChooseFile}>
        <UploadIcon />
        Selecione uma imagem
      </Button>
      <input
        ref={fileInputRef}
        className="hidden"
        name="file"
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
    </div>
  );
}
