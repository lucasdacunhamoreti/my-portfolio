import React, { useState } from 'react'
import { Container, NavBar } from './styles';
import { FaBars } from 'react-icons/fa';
import SideBar from '../SideBar';

export default function Header() {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);

  return (
    <Container id="home">
      <FaBars onClick={ showSideBar } id="sideBar"/>
      { sideBar && <SideBar active={ setSideBar } /> }
      <NavBar>
        <a href="#home"><h5>Home</h5></a>
        <a href="#about"><h5>Sobre</h5></a>
        <a href="#projects"><h5>Projetos</h5></a>
        <a href="#container-contact"><h5>Contato</h5></a>
      </NavBar>
    </Container>
  )
}
