import styled from 'styled-components';

export const Form = styled.form`
  width: 400px;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;

  padding: 6px;
  &:hover {
    background-color: skyblue;
  }
`;

export const Label = styled.label`
  font-weight: 500;
`;

export const Wrapper = styled.div`
  width: 500px;
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid grey;
  border-radius: 5px;
  align-items: center;
`;
