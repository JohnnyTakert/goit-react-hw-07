import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactsOps';

export default function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectFilteredContacts);
  const onDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <ul className={css.contactList}>
        {visibleContacts.map(contact => (
          <Contact key={contact.id} item={contact} onDelete={onDelete} />
        ))}
      </ul>
    </>
  );
}
