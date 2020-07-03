import styled from 'styled-components';

export const Container = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  flex: 1;

  p {
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }
`;

export const Item = styled.li`

  background-color: yellow;
  border-radius: 5px;
  padding: 10px 20px;
  max-width: 200px;
  width: 200px;
  min-height: 100px;
  margin: 10px;
  color: #434343;

  word-wrap: break-word;
`;