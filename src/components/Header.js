import React from 'react'

import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled'
import { Button } from './styles/Button.styled'
import { Flex } from './styles/Flex.styled'
import Container from './styles/Container.styled'

// images
import logo from '../images/logo.svg'
import illustrationMockups from '../images/illustration-mockups.svg'

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={logo} />
          <Button bg='steelblue' color='white'>
            Try it For Free
          </Button>
        </Nav>
        <Flex>
          <div>
            <h1> Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg='#ff0099'>Get Started For Free</Button>
          </div>
          <Image src={illustrationMockups} />
        </Flex>
      </Container>
    </StyledHeader>
  )
}

export default Header
