import React from 'react'
import { Container, Description } from './styles'
import imgProfile from '../../images/imgProfile.png';
import { content } from '../../services/Content';
import { GrGithub, GrLinkedinOption } from 'react-icons/gr';

export default function About() {
  return (
    <Container id="about">
      <div id="container-logos">
        <a href={ content.linkLinkedin }><GrLinkedinOption id="logoLinkedin" /></a>
        <a href={ content.linkGithub }><GrGithub id="logoGithub"/></a>
      </div>
      <img src={ imgProfile } alt="imgProfile"/>
      <Description>
        <h2>{ content.salutation }</h2>
        <h4>{ content.ocupation }</h4>
        <p>{ content.textAboutMe }</p>
      </Description>
    </Container>
  )
}
