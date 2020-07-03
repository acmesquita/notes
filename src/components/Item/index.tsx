import React, { useState } from 'react';
import { useList } from '../../context/item'
import { ItemList } from './styles';

interface ItemProps {
  id: string
  value: string
}

const Item: React.FC<ItemProps> = ({ id, value }) => {
  const [newText, setNewText] = useState(value)
  const { removeItem, editItem } = useList();

  function remove() {
    removeItem(id)
  }

  function changeText() {
    editItem(id, newText)
  }

  /**
   * Coloquei o any pra fujir da validação do TS
   * @param el (textarea)
   */
  function autosize(el: any) {
    setTimeout(function () {
      el.style.cssText = '-moz-box-sizing:content-box';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
      el.parent.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
  }

  return (
    <ItemList>
      <div onClick={remove}>x</div>
      <textarea
        value={newText}
        onChange={e => setNewText(e.target.value)}
        onBlur={changeText}
        onKeyUp={e => autosize(e.target)}
      />
    </ItemList>
  );
}

export default Item;