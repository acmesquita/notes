import React, { useState } from 'react';

import { useList } from '../../context/item';
import { Container } from './styles';

const Text: React.FC = () => {
  const [text, setText] = useState('')
  const { addItem } = useList()

  function handleAdding(): void {
    if (text.trim()) {
      addItem({ text: text.trim() })
      setText('')
    }
  }

  return (
    <Container>
      <textarea
        placeholder="Digite sua nota..."
        autoFocus
        cols={50}
        rows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyUp={(e) => { if (e.keyCode === 13) { handleAdding() } }}
      />
    </Container>
  );
}

export default Text;