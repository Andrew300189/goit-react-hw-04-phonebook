import React, { useState } from 'react';
import './ContactForm.module.css';

function ContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      alert('Name and number cannot be empty');
      return;
    }

    onAddContact(name, number);

    setName('');
    setNumber('');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          className="form-input"
        />
        <label htmlFor="number" className="form-label">
          Number
        </label>
        <input
          type="tel"
          id="number"
          name="number"
          value={number}
          onChange={handleNumberChange}
          className="form-input"
        />
        <button type="submit" className="form-button">
          Add contact
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
