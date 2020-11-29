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
  const [message, setMessage] = useState('');
  const [emailSender, setEmailSender] = useState('');

  const closeModal = () => {
    setIsOpen(false);
  };

  const sendEmail = () => {
    fetch(
      'https://us-central1-pocitace-pro-skolaky.cloudfunctions.net/sendMail',
      {
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
      },
    );
    console.log({
      emailRecipient: props.selectedContact,
      name: name,
      message: message,
      emailSender: emailSender,
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
        <button className="donateForm__close" onClick={props.closeModal}>
          Zavřít
        </button>
        <form className="donateForm">
          <label className="donateForm__label">
            Jméno:{' '}
            <input
              className="donateForm__input"
              placeholder="Zde zadejte své jméno"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label className="donateForm__label">
            Kontakt:{' '}
            <input
              className="donateForm__input"
              type="text"
              placeholder="telefon, e-mail"
              value={emailSender}
              onChange={(event) => setEmailSender(event.target.value)}
              required
            />
          </label>
          <label className="donateForm__label">Zpráva: {' '}
          <textarea
            className="donateForm__input--textarea"
            type="text"
            placeholder="Napište svou nabídku..."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          /></label>
          <button className="donateForm__send" onClick={sendEmail}>
            Odeslat
          </button>
        </form>
      </Modal>
    </div>
  );
};
