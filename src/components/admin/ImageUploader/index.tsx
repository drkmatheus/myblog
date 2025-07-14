import { uploadImageAction } from "@/actions/upload/upload-image-action";
import { Button } from "@/components/Button";
import { MyLoader } from "@/components/MyLoader";
import { MAX_IMG_SIZE } from "@/lib/post/constants";
import { CircleAlertIcon, LoaderPinwheelIcon, UploadIcon } from "lucide-react";
import { useRef, useState, useTransition } from "react";
import { toast } from "react-toastify";

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startTransition] = useTransition();
  const [imgUrl, setImgUrl] = useState("");

  function handleChooseFile() {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  }

  function handleChange() {
    toast.dismiss();

    if (!fileInputRef.current) {
      setImgUrl("");
      return;
    }

    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0];

    if (!file) {
      setImgUrl("");
      return;
    }

    if (file.size > MAX_IMG_SIZE) {
      toast.error("Imagem muito grande. Escolha uma imagem menor que 900KB.");

      fileInput.value = "";
      setImgUrl("");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    startTransition(async () => {
      const result = await uploadImageAction(formData);

      if (result.error) {
        toast.error(result.error);
        fileInput.value = "";
        setImgUrl("");
        return;
      }

      setImgUrl(result.url);
      toast.success("Imagem anexada");
    });

    fileInput.value = "";
  }

  return (
    <div className="flex flex-col gap-4">
      <Button type="button" onClick={handleChooseFile} disabled={isUploading}>
        {!isUploading ? (
          <UploadIcon />
        ) : (
          <LoaderPinwheelIcon className="animate-spin" />
        )}
        Selecione uma imagem
      </Button>

      {!!imgUrl && (
        <div className=" flex flex-col gap-4">
          <p>
            <b>URL:</b> {imgUrl}
          </p>
          <img className="rounded-lg" src={imgUrl}></img>
        </div>
      )}
      <input
        ref={fileInputRef}
        className="hidden"
        name="file"
        type="file"
        accept="image/*"
        onChange={handleChange}
        disabled={isUploading}
      />
    </div>
  );
}
