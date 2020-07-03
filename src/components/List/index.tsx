import React from 'react';

import { useList } from '../../context/item'
import { Container, Item } from './styles';

const List: React.FC = () => {
  const { list } = useList()

  return (
    <div>
      <Container>
        {list.length == 0 && <p>Nunhuma nota registrada.</p>}
        {list.map(item => <Item>{item.text}</Item>)}
      </Container>
    </div>
  );
}

export default List;