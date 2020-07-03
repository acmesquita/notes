import styled from 'styled-components';

export const ItemList = styled.li`

  background-color: yellow;
  border-radius: 5px;
  padding: 10px 20px;
  max-width: 200px;
  width: 200px;
  min-height: 100px;
  height: auto;
  margin: 10px;
  color: #434343;

  word-wrap: break-word;

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
  }

  textarea {
    background-color: transparent;
    width: 100%;
    resize: none;
    height: auto;
    border: none;
    overflow: hidden;
    font-size: 16px;
    font-family: sans-serif;
    box-shadow: border-box;
  }
`;