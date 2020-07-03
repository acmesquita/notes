import React from 'react';

import { ItemProvider } from './item';

const ListProvider: React.FC = ({ children }) => {
  return (
    <ItemProvider>
      {children}
    </ItemProvider>
  );
}

export default ListProvider;