// src/components/contactPicker/ContactPicker.js
import React from "react";

export const ContactPicker = ({ contacts = [], onChange, value, name }) => {
  return (
    <select name={name} value={value} onChange={onChange} required>
      <option value="">No Contact Selected</option>
      {contacts.map((c) => (
        <option key={c.name} value={c.name}>
          {c.name}
        </option>
      ))}
    </select>
  );
};
