import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = ({ open, onClose }) => {
  const [form, setForm] = useState({
    teamName: '',
    leaderName: '',
    leaderEmail: '',
    members: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Send form data via mailto
    const subject = encodeURIComponent('Zgłoszenie zespołu: ' + form.teamName);
    const body = encodeURIComponent(
      `Nazwa zespołu: ${form.teamName}\n` +
      `Imię, nazwisko oraz indeks lidera: ${form.leaderName}\n` +
      `Email lidera: ${form.leaderEmail}\n` +
      `Członkowie zespołu: ${form.members}\n` +
      `Wiadomość: ${form.message}`
    );
    window.location.href = `mailto:mechaton@info.p.lodz.pl?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="registration-modal-overlay" onClick={onClose}>
      <div className="registration-modal" onClick={e => e.stopPropagation()}>
        <button className="registration-modal-close" onClick={onClose}>&times;</button>
        <h2>Zgłoszenie zespołu</h2>
        {submitted ? (
          <div className="registration-success">Dziękujemy za zgłoszenie! Skontaktujemy się wkrótce.</div>
        ) : (
          <form onSubmit={handleSubmit} className="registration-form">
            <label>Nazwa zespołu
              <input name="teamName" value={form.teamName} onChange={handleChange} required />
            </label>
            <label>Imię i nazwisko lidera
              <input name="leaderName" value={form.leaderName} onChange={handleChange} required />
            </label>
            <label>Email lidera
              <input name="leaderEmail" type="email" value={form.leaderEmail} onChange={handleChange} required />
            </label>
            <label>Członkowie zespołu (imiona, nazwiska i indeksy)
              <textarea name="members" value={form.members} onChange={handleChange} required rows={3} />
            </label>
            <label>Wiadomość (opcjonalnie)
              <textarea name="message" value={form.message} onChange={handleChange} rows={2} />
            </label>
            <button type="submit" className="registration-submit">Wyślij zgłoszenie</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
