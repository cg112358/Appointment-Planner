import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoComplete="name"
        required    
      />

      {/* US-style phone number: 123-456-7890 */}
      <input
        type="tel"
        placeholder="Phone (555-123-4567)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        pattern="^\d{3}-\d{3}-\d{4}$"
        title="Use format 555-123-4567"
        autoComplete="tel"
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="email"
        required
      />

      <button type="submit">Add Contacts</button>
    </form>
  );
};

