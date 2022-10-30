import { Text } from './Filter.styled';
export const Filter = ({ value, onChange }) => {
  return (
    <>
      <Text>Find contacts by name</Text>
      <input onChange={onChange} />
    </>
  );
};
