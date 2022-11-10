import React from 'react'
import { Container } from './styles'

const SidebarItem = ({ Icon, Text }) => {
  return (
    <Container>
      <Icon className="icon-side-bar"/>
      { Text }
    </Container>
  )
}

export default SidebarItem