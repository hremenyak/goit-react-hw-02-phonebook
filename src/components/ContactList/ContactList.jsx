import { Button, Wrapper, Item } from './ContactList.styled';
export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <Wrapper>
        {contacts.map(contact => (
          <Item key={contact.id}>
            <span>
              {contact.name}: {contact.number}
            </span>

            <Button type="button" onClick={() => onDeleteContact(contact.id)}>
              Delete
            </Button>
          </Item>
        ))}
      </Wrapper>
    </>
  );
};
