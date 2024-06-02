export interface Image {
  id: string;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
}

export interface ImageGalleryProps {
  images: Image[];
  onImageClick: (imageUrl: string) => void;
}

export interface ImageCardProps {
  image: Image;
  onImageClick: (url: string) => void;
}

export interface ImageModalProps {
  imageUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

export interface FetchImagesResponse {
  results: Image[];
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
}
