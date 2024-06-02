import { fetchImages } from "../../articles-api";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { Image } from "../../types";

export default function App() {
  const [images, setPhotos] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [showNoImagesToast, setShowNoImagesToast] = useState<boolean>(false);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
    setShowNoImagesToast(false);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleImageClick = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getPhotos() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data: Image[] = await fetchImages(query, page);
        setPhotos(prevPhotos => {
          return [...prevPhotos, ...data];
        });
        if (data.length === 0 && !showNoImagesToast) {
          toast.error("No images found, try changing your request!");
          setShowNoImagesToast(true);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getPhotos();
  }, [page, query, showNoImagesToast]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Toaster />
      {isError && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        imageUrl={selectedImageUrl || ""}
        isOpen={modalIsOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
