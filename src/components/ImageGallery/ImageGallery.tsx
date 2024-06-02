import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageGalleryProps } from "../../types";

export default function ImageGallery({
  images,
  onImageClick,
}: ImageGalleryProps) {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <li className={css.galleryItem} key={image.id}>
          <ImageCard image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}
