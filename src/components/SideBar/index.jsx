import React from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaRegEnvelope,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaReact,
  FaUserAlt,
} from 'react-icons/fa'

import SidebarItem from '../SideBarItem';

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <a onClick={closeSidebar} href="#home"><SidebarItem Icon={FaHome} Text="Home"/></a>
        <a onClick={closeSidebar} href="#about"><SidebarItem Icon={FaUserAlt} Text="Sobre"/></a>
        <a onClick={closeSidebar} href="#projects"><SidebarItem Icon={FaReact} Text="Projetos"/></a>
        <a onClick={closeSidebar} href="https://www.linkedin.com/in/lucas-da-cunha-moreti/" target="_blank" rel="noreferrer"><SidebarItem Icon={FaLinkedin} Text="Linkedin" /></a>
        <a onClick={closeSidebar} href="https://github.com/lucasdacunhamoreti" target="_blank" rel="noreferrer"><SidebarItem Icon={FaGithub} Text="GitHub" /></a>
        <a onClick={closeSidebar} href="https://www.facebook.com/LucasdaCunhaMoreti" target="_blank" rel="noreferrer"><SidebarItem Icon={FaFacebook} Text="Facebook"/></a>
        <a onClick={closeSidebar} href="#contact"><SidebarItem Icon={FaRegEnvelope} Text="Contato"/></a>
      </Content>
    </Container>
  )
}

export default Sidebar