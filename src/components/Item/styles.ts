import styled from 'styled-components';

export const ItemList = styled.li`

  background-color: yellow;
  border-radius: 5px;
  padding: 10px 20px;
  max-width: 200px;
  width: 200px;
  min-height: 100px;
  margin: 10px;
  color: #434343;

  word-wrap: break-word;

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
  }
`;