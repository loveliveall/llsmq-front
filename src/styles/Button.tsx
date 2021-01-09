import styled from 'styled-components';

export const Button = styled.button`
  color: white;
  background-color: #019fe8;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 4px 8px 4px 8px;
  
  &:hover:enabled {
    cursor: pointer;
    opacity: 0.5;
  }

  &:disabled {
    color: grey;
    background-color: #013147;
  }
`;