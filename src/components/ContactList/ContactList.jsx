import { ListPersons, BoxPersons } from './ContactList.styled';
import React from 'react';
import Filter from 'components/Filter/Filter';
import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';

const ContactList = ({ contacts }) => {
  const filter = useSelector(state => state.filter);

  const findeByName = () => {
    return contacts.filter(
      elem =>
        elem.name.slice(0, filter.length).toLowerCase() === filter.toLowerCase()
    );
  };

  const nameContacts = findeByName();

  return (
    <BoxPersons>
      <Filter />
      <ListPersons>
        {nameContacts.map(el => (
          <Contact key={el.id} elem={el} />
        ))}
      </ListPersons>
    </BoxPersons>
  );
};

export default ContactList;
