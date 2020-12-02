import React, { useState } from 'react';
import './style.css';
import Modal from 'react-modal';
import TextareaAutosize from 'react-textarea-autosize';

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
  const [submitting, setSubmitting] = useState(false);

  const onClose = () => {
    props.closeModal();
    setSubmitted(false);
    setName('');
    setEmailSender('');
    setMessage('');
    setErrorMessage('');
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitting(true);
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
      .then(() => {
        setSubmitted(true);
      })
      .catch(() => setErrorMessage('Něco se pokazilo. Zkuste to znovu.'))
      .finally(() => setSubmitting(false));
  };

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className="donateForm__close" onClick={onClose}></button>
        <form onSubmit={sendEmail} className="donateForm">
          <label className="donateForm__label">
            Jméno:{' '}
            <input
              className="donateForm__input"
              placeholder="Zadejte své jméno"
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
            <TextareaAutosize
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
          {submitted ? (
            <button onClick={onClose} className="donateForm__send">
              Zavřít
            </button>
          ) : (
            <button
              disabled={submitting}
              type="submit"
              value={submitted}
              className="donateForm__send"
            >
              {submitting ? 'Odesílám' : 'Odeslat'}
            </button>
          )}
        </form>
      </Modal>
    </div>
  );
};
