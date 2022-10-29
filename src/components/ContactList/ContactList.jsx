export const ContactList = ({ contacts }) => {
  return (
    <>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: <span>{contact.number}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
