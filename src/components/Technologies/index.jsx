import React from 'react';
import { Container, Card, ContainerStacks } from './styles';
import { RiStackshareLine } from "react-icons/ri";

export default function styles() {
  return (
    <Container>
      <h2><RiStackshareLine id="icon"/>Tecnologias</h2>
      <ContainerStacks>
        <Card>
          <h3>React JS</h3>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='react/react-original.svg' className='imgStacks'/>
        </Card>

        <Card>
          <h3>Redux</h3>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt='redux-original.svg'/>
        </Card>

        <Card>
          <h3>Bootstrap</h3>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt='bootstrap-original.svg'/>
        </Card>

        <Card>
          <h3>JavaScript</h3>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='javascript-original.svg'/>
        </Card>

        <Card>
          <h3>CSS</h3>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='css3-original.svg'/>
        </Card>

        <Card>
          <h3>Jest</h3>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt='jest-plain.svg'/>
        </Card>

        <Card>
          <h3>MySQL</h3>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt='mysql-original.svg'/>
        </Card>

        <Card>
          <h3>TypeScript</h3>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt='typescript-original.svg'/>
        </Card>

        <Card>
          <h3>Docker</h3>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt='docker-original.svg'/>
        </Card>

        <Card>
          <h3>Git</h3>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt='git-original.svg'/>
        </Card>

        <Card>
          <h3>NodeJs</h3>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt='node-original.svg'/>
        </Card>

        <Card>
          <h3>VueJs</h3>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt='vue-original.svg'/>
        </Card>


        
      </ContainerStacks>
    </Container>
  );
}
