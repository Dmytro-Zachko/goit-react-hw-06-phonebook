import React from "react";
import { Button, Item } from "./ContactItem.styled";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { DeleteContact } from "redux/ContactsSlice";

export const ContactItem = ({ contact}) => {
const { id, name, number } = contact;

  const dispatch = useDispatch();

  return (
    <>
      <li>
        <span>{name}</span>
        <span>{number}</span>

        <Button type="button" onClick={() => dispatch(DeleteContact(id))}>
          delete
        </Button>
      </li>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func,
};