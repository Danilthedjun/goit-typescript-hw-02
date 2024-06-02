import css from "./ImageCard.module.css";
import { ImageCardProps } from "../../types";

export default function ImageCard({ image, onImageClick }: ImageCardProps) {
  return (
    <div>
      <img
        className={css.img}
        src={image.urls.small}
        alt={image.description}
        onClick={() => onImageClick(image.urls.regular)}
      />
    </div>
  );
}
