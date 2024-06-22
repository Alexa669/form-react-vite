import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, subject, message } = formData;
    if (!fullName || !email || !subject || !message) {
      setError('Todos los campos son obligatorios.');
      setSuccess('');
      return;
    }
    setError('');
    setSuccess('Mensaje enviado con éxito.');
    setFormData({ fullName: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="App">
      <div className="form-container">
        <div className="form-header">
          <h1>Formulario de Contacto</h1>
          {success && <p className="success">{success}</p>}
          {error && <p className="error">{error}</p>}
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName">Nombre Completo:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="subject">Asunto:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default App;

