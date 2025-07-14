"use server";

import {
  IMG_SERVER_URL,
  IMG_UPLOAD_DIR,
  MAX_IMG_SIZE,
} from "@/lib/post/constants";
import { simulateLag } from "@/utils/simulate-lag";
import { mkdir, writeFile } from "fs/promises";
import { extname, resolve } from "path";

type UploadImageActionResult = {
  url: string;
  error: string;
};

export async function uploadImageAction(
  formData: FormData
): Promise<UploadImageActionResult> {
  // tomar muito cuidado com os dados que são colocados aqui
  // não fazer funções helpers e calculos aqui

  await simulateLag(3000, true);

  const result = ({ url = "", error = "" }) => {
    return { url, error };
  };

  if (!(formData instanceof FormData)) {
    return result({ error: "Dados inválidos" });
  }

  const file = formData.get("file");

  if (!(file instanceof File)) {
    return result({ error: "Arquivo inválido" });
  }

  if (file.size > MAX_IMG_SIZE) {
    return result({ error: "Arquivo com tamanho inválido" });
  }

  if (!file.type.startsWith("image/")) {
    return result({ error: "Arquivo inválido" });
  }

  const fileExtension = extname(file.name);
  const uniqueImageName = `${Date.now()}${fileExtension}`;

  const uploadFolderPath = resolve(process.cwd(), "public", IMG_UPLOAD_DIR);

  await mkdir(uploadFolderPath, { recursive: true });

  const fileArrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(fileArrayBuffer);

  const fullPath = resolve(uploadFolderPath, uniqueImageName);

  writeFile(fullPath, buffer);

  const url = `${IMG_SERVER_URL}/${uniqueImageName}`;

  console.log(url);

  return result({ url });
}
