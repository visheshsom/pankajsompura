import React, { useState } from 'react';
import Modal from 'react-modal';

// Apply accessibility settings for Modal
Modal.setAppElement('#root');

const ImagePopup = ({ imageSrc, imageAlt }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      {/* Thumbnail to open the popup */}
      <img
        src={imageSrc}
        alt={imageAlt}
        onClick={openModal}
        style={{ cursor: 'pointer', width: '100%' }} // Style as needed
      />

      {/* Popup Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Popup"
        style={{
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '0',
            border: 'none',
            background: 'none',
          },
        }}
      >
        <div>
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{ width: '100%', height: 'auto', maxWidth: '600px' }}
          />
          <button
            onClick={closeModal}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              cursor: 'pointer',
            }}
          >
            &times;
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ImagePopup;
