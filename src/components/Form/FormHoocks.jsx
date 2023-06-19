import React, { useState } from 'react';
import { nanoid } from "nanoid";
import { FormWrapper, Button, Input } from "./Form.styled";
import { AddContact } from "redux/ContactsSlice";
import { useSelector, useDispatch } from "react-redux";
import { Notify } from 'notiflix';

export const FormHoocks = () => {
 const dispatch = useDispatch()

  const contacts = useSelector(state => state.contacts.value);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    if (name === 'name') {
      setName(value);
    }

    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    const contact = { id: nanoid(), name, number };

    const alreadyExists = contacts.findIndex(item => {
      const name = item.name.toLowerCase();
      const newName = contact.name.toLowerCase();
      return name === newName;
    });

   if (alreadyExists >= 0) {
      Notify.failure(`${contact.name} is already added to contact list`);
      return;
    } else {
      dispatch(AddContact(contacts));
     }

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <FormWrapper>
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="Enter name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleInputChange}
          required
        />

        <Input
          type="tel"
          name="number"
          value={number}
          placeholder="Enter phone number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleInputChange}
          required
        />
      </FormWrapper>
      <Button type="submit">Add contact</Button>
    </form>
  );
}