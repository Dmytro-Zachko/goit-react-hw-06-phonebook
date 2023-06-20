import React from "react";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Section } from "components/Section/Section";
import { FormHoocks } from "components/Form/FormHoocks";
import { useSelector } from "react-redux";


export const AppH = () => {
const contacts = useSelector(state => state.contacts.value);
    
    // useEffect(() => {
    //   window.localStorage.setItem('contacts', JSON.stringify(contacts))  
    // }, [contacts])
    
   
    
    // const addContact = contact => {
    // setContacts(
    //    [contact, ...contacts]
    // );
    // };
    

    
  //   const FilterContact = () => {
  //   const filterNormalize = filter.toLowerCase().trim()

  //   return contacts.filter(contact => contact.name.toLowerCase().includes(filterNormalize))
  //   }
    
  //   const deleteContact = contactId => {
  // setContacts(prevstate => ( prevstate.filter(contact => contact.id !== contactId)))
  //   }
    
    return (
        <>
        <Section title="Phonebook"> <FormHoocks 
        />
        </Section>
        <Section title="Contacts">
          <Filter
        />
        <ContactList
        />
      </Section>
        </>
        )
}