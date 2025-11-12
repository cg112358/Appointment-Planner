import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

    /*
    Using hooks, check for contact name in the contacts array variable in props
  */
 useEffect(() => {
    const dup = name.trim().length > 0 && contacts?.some(
      (c) => c.name.trim().toLowerCase() === name.trim().toLowerCase()
      );
    setIsDuplicate(dup);
 }, [name, contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data if the contact name is not a duplicate
    */
    if (isDuplicate) return;
    if (!name.trim() || !phone.trim() || !email.trim()) return;

    addContact(name.trim(), phone.trim(), email.trim());

    //clear form on success
    setName("");
    setPhone("");
    setEmail("");
  };

  /*
  Using hooks, check for contact name in the contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>
          Add Contact {isDuplicate && <span style={{ color:"#b91c1c" }}>(duplicate)</span>}
        </h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList titles={contacts} />
      </section>
    </div>
  );
};
