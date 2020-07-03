import React from 'react';
import Sidebar from '../Sidebar';
import Main from '../Main';

import { Container } from './styles';

const Wrapper: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Main />
    </Container>
  );
}

export default Wrapper;