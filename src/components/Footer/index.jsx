import React from 'react';
import { Container, LinksNavigation, Copyright, ContainerMain } from './styles';
import { content, mediaSocials } from '../../services/Content';
// 

export default function Footer() {
  return (
    <ContainerMain>
    <Container>
      <LinksNavigation>
        <div>
          <h2>MENU</h2>
          <a href="#home"><h4>Home</h4></a>
          <a href="#about"><h4>Sobre</h4></a>
          <a href="#projects"><h4>Projetos</h4></a>
          <a href="#contact"><h4>Contato</h4></a>
        </div>
        <div>
          <h2>REDES SOCIAIS</h2>
          { mediaSocials.map(({link, title},index) => (
            <a key={ index } href={ link } target="_blank" rel="noreferrer"><h4>{ title }</h4></a>
          )) }
        </div>
        <div id="container-contact">
          <h2>Whatsapp: { content.numberWhatsapp }</h2>
          <h2>Email: { content.email }</h2>
        </div>
      </LinksNavigation>
    </Container>
      <Copyright>
        <span>Copyright © 2022 Lucas da Cunha Moreti</span>
      </Copyright>
    </ContainerMain>
  )
}
