import PropTypes from 'prop-types';
import { Button, Item} from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/ContactsSlice';

export const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch();

  return (
    <>
       <li>
        <span>{name}</span>:<Item>{number}</Item>

        <Button type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
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
};