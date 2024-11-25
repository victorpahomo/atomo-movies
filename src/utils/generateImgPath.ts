import noBackdropImg from "@/assets/img/noBackdropImg.webp";
import noPosterImg from "@/assets/img/noPosterImg.webp";
import { IMAGE_URL } from "@/utils/constants";

interface GenerateImgPathProps {
  path?: string | null;
  size?: string;
  isBackdrop?: boolean;
}

export function generateImgPath({
  path,
  size = "w342",
  isBackdrop = false,
}: GenerateImgPathProps) {
  return path
    ? `${IMAGE_URL}${size}${path}`
    : isBackdrop
    ? noBackdropImg
    : noPosterImg;
}
