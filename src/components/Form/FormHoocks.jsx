import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { Button, Input, FormWrapper } from './Form.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/ContactsSlice';

export const FormHooks= () => {
  const dispatch = useDispatch();

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
      dispatch(addContact(contact));
    }

    setName('');
    setNumber('');
  };

  return (
   <form onSubmit={handleFormSubmit}>
<FormWrapper>
            <label htmlFor="name">Name
          <Input
  type="text"
      name="name"
      value={name}
      onChange={handleInputChange}
  pattern= "^[A-Za-z\u0080-\uFFFF ']+$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required />
                    </label>
                     <label htmlFor="number">Number
                <Input
                  type="tel"
                  name="number"
                  value={number}
                  onChange={handleInputChange}
  pattern="^(\+?[0-9.\(\)\-\s]*)$"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/></label>
        <Button type="submit">Add Contact</Button>
          </FormWrapper>
          </form>
      )
}