import React from 'react';
import { Container, LinksNavigation, Copyright, ContainerMain } from './styles';
import { content, mediaSocials } from '../../services/Content';
import { IoLogoWhatsapp } from 'react-icons/io';
import { SiMinutemailer } from 'react-icons/si';
import { BsLinkedin, BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs';
// 

export default function Footer() {
  return (
    <ContainerMain>
    <Container>
      <LinksNavigation>
        {/* <div>
          <h2>REDES SOCIAIS</h2>
          { mediaSocials.map(({link, title},index) => (
            <a key={ index } href={ link } target="_blank" rel="noreferrer"><h4>{ title }</h4></a>
          )) }
        </div> */}
        <div className="container-social-network">
          <a href="https://www.linkedin.com/in/lucas-da-cunha-moreti/" target="_blank">
            <div className="div-icons">
              <BsLinkedin className="icons"/>
            </div>
          </a>

          <a href="https://www.facebook.com/LucasdaCunhaMoreti" target="_blank">
            <div className="div-icons">
              <BsFacebook className="icons"/>
            </div>
          </a>

          <a href="https://www.instagram.com/https_lukinha/" target="_blank">
            <div className="div-icons">
              <BsInstagram className="icons"/>
            </div>
          </a>

          <a href="https://github.com/lucasdacunhamoreti" target="_blank">
            <div className="div-icons">
              <BsGithub className="icons"/>
            </div>
          </a>
          
        </div>
        <div id="container-contact">
          <h2><IoLogoWhatsapp/> { content.numberWhatsapp }</h2>
          <h2><SiMinutemailer/> { content.email }</h2>
        </div>
      </LinksNavigation>
    </Container>
      <Copyright>
        <span>Copyright © 2022 Lucas da Cunha Moreti</span>
      </Copyright>
    </ContainerMain>
  )
}
