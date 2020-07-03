import React from 'react';

import { useList } from '../../context/item'
import { Container } from './styles';
import Item from '../Item'

const List: React.FC = () => {
  const { list } = useList()

  return (
    <div>
      <Container>
        {list.length == 0 && <p>Nunhuma nota registrada.</p>}
        {list.map(item => <Item key={item.id} id={item.id}>{item.text}</Item>)}
      </Container>
    </div>
  );
}

export default List;