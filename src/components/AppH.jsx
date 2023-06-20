import React from "react";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Section } from "./Section/Section";
import { FormHooks } from "./Form/FormHoocks";
import { useSelector } from "react-redux";


export const AppH = () => {
  const contacts = useSelector(state => state.contacts.value);

  return (
    <>
      <Section title="Phonebook">
        <FormHooks />
      </Section>

      <Section title="Contacts">
        <Filter />
      </Section>

        {contacts.length ? (
          <ContactList />
        ) : (
          <h2 style={{ textAlign: 'center' }}>There is no added contacts</h2>
        )}
    </>
  );
}