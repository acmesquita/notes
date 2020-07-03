import React from 'react';
import { useList } from '../../context/item'
import { ItemList } from './styles';

interface ItemProps {
  id: string
}

const Item: React.FC<ItemProps> = ({ children, id }) => {
  const { removeItem } = useList();

  function remove() {
    console.log(id)
    removeItem(id)
  }
  return (
    <ItemList>
      <div onClick={remove}>x</div>
      {children}
    </ItemList>
  );
}

export default Item;