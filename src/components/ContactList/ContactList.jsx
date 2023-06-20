import React from "react";
import { ContactItem } from "components/ContactItem/ContactItem";
import { Contactlist } from "./ContactList.styled";
import { useSelector } from "react-redux";

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.value);
  const filter = useSelector(state => state.filter);

   const getFilteredContacts = () => {
    const normalizedFilter = filter.toString().toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

   const filteredContacts = getFilteredContacts();
  return (
    <Contactlist>
      {filteredContacts.map(contact => {
        return <ContactItem key={contact.id} contact={contact}></ContactItem>;
      })}
    </Contactlist>
  );
};