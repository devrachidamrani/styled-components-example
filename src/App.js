import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global'

import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import content from './content'
import Container from './components/styles/Container.styled'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map(item => (
            <Card
              id={item.id}
              key={item.id}
              title={item.title}
              body={item.body}
              image={item.image}
            />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App
