import React from 'react';
import './style.css';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#app');

export const DonateForm = (props) => {
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={props.closeModal}>Zavřít</button>
        <form>
          <label>
            Jméno:
            <input type="text" />
          </label>
          <label>
            Kontakt:
            <input type="text" placeholder="telefon, e-mail" />
          </label>
          <textarea type="text" placeholder="Napište svou nabídku..." />
          <button>Odeslat</button>
        </form>
      </Modal>
    </div>
  );
};
