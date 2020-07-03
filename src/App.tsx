import React from 'react'
import { render } from 'react-dom'
import { GlobalStyle } from './styles/GlobalStyle'
import ListProvider from './context';
import Wrapper from './components/Wrapper';

const mainElement = document.createElement('div')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <>
      <ListProvider>
        <Wrapper />
      </ListProvider>
      <GlobalStyle />
    </>
  )
}

render(<App />, mainElement)
