import { Button } from "@/components/Button";
import { UploadIcon } from "lucide-react";
import { useRef } from "react";

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleChooseFile() {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
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
      />
    </div>
  );
}
