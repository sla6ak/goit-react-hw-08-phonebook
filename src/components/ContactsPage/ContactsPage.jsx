import React from 'react';
import Title from 'components/Title/Title';
import { Section } from './ContactsPage.style';
import { Form } from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';

function ContactsPage(props) {
  const listContacts = [
    { id: '4564', name: 'Vasya Pupkin', number: '098564372' },
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  return (
    <Section>
      <Title text={'Phonebook'} />
      <Form />
      <Title text={'Contacts:'} />
      <ContactList contacts={listContacts} />
    </Section>
  );
}

export default ContactsPage;
