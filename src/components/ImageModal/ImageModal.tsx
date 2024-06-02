import ReactModal from "react-modal";
import { ImageModalProps } from "../../types";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    background: "none",
    padding: "0",
    maxWidth: "1080px",
    maxHeight: "720px",
    overflow: "hidden",
  },
};

ReactModal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({
  imageUrl,
  isOpen,
  onClose,
}) => {
  const handleCloseModal = () => {
    onClose();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLImageElement>) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <img
        src={imageUrl}
        alt="Modal Content"
        onKeyDown={handleKeyDown}
        onClick={handleClickOutside}
      />
    </ReactModal>
  );
};

export default ImageModal;
