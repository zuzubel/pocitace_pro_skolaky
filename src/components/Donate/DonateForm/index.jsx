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
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
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
    )
      .then(() => setSubmitted(true))
      .catch(() => setErrorMessage('Něco se pokazilo. Zkuste to znovu.'));
      setTimeout(props.closeModal, 5000);
  };

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button
          className="donateForm__close"
          onClick={props.closeModal}
        ></button>
        <form className="donateForm">
          <label className="donateForm__label">
            Jméno:{' '}
            <input
              className="donateForm__input"
              placeholder="Zde zadejte své jméno"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
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
          <label className="donateForm__label">
            Zpráva:{' '}
            <textarea
              className="donateForm__input--textarea"
              type="text"
              placeholder="Napište svou nabídku..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            />
          </label>
          <p className="donateForm__submitted">
            {errorMessage}
            {submitted
              ? 'Úspěšně odesláno. Zájemce o počítač se s Vámi spojí.'
              : null}
          </p>
          <button
            value={submitted}
            className="donateForm__send"
            onClick={sendEmail}
          >
            {submitted ? 'Odesláno' : 'Odeslat'}
          </button>
        </form>
      </Modal>
    </div>
  );
};
