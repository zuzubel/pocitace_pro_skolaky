import React, { useState } from 'react';
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
  const [name, setName] = useState('');
  const [emailRecipient, setEmailRecipient] = useState('');
  const [message, setMessage] = useState('');
  const [emailSender, setEmailSender] = useState('');

  const closeModal = () => {
    setIsOpen(false);
  };

  const sendEmail = () => {
    fetch('https://us-central1-your-app-name.cloudfunctions.net/submit', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        emailRecipient: props.selectedContact,
        name: name,
        message: message,
        emailSender: emailSender,
      }),
    });
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
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label>
            Kontakt:
            <input
              type="text"
              placeholder="telefon, e-mail"
              value={emailSender}
              onChange={(event) => setEmailSender(event.target.value)}
            />
          </label>
          <textarea
            type="text"
            placeholder="Napište svou nabídku..."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <button onClick={sendEmail}>Odeslat</button>
        </form>
      </Modal>
    </div>
  );
};
