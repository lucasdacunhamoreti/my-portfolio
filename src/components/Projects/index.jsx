import React from 'react'
import { Container } from './styles';
import imgAppReceitas from '../../images/app-receitas.png';
import imgTrybeWallet from '../../images/trybe-wallet.png';
import imgDashboard from '../../images/dashboard.png';
import imgMedievalStore from '../../images/test.png';

import { AiFillGithub } from 'react-icons/ai';
import { TbNotebook } from 'react-icons/tb';

export default function Projects() {
  return (
    <Container id="projects">
      <h2><TbNotebook />Projetos</h2>
      <div id="banner" className="carousel slide" data-bs-ride="carousel">
        <div id="images" className="carousel-inner">
          <div className="carousel-item active">
            <div className="content-projects">
              <h2>App de Receitas</h2>
              <img className="images-projects " src={ imgAppReceitas } alt="app-receitas"/>
              <a href="https://github.com/lucasdacunhamoreti/Projeto-App-de-Receitas" target="_blank" rel="noreferrer"><button className="btn btn-info">Link do repositório <AiFillGithub className="icon-github-projects"/></button></a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="content-projects">
              <h2>Trybe Wallet</h2>
              <img className="images-projects" src={ imgTrybeWallet } alt="test"/>
              <a href="https://github.com/lucasdacunhamoreti/Projeto-TrybeWallet" target="_blank" rel="noreferrer"><button className="btn btn-info">Link do repositório <AiFillGithub className="icon-github-projects"/></button></a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="content-projects">
              <h2>Minha Carteira</h2>
              <img className="images-projects" src={ imgDashboard } alt="test"/>
              <a href="https://github.com/lucasdacunhamoreti/my-wallet" target="_blank" rel="noreferrer"><button className="btn btn-info">Link do repositório <AiFillGithub className="icon-github-projects"/></button></a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="content-projects">
              <h2>Medieval Store API</h2>
              <img className="images-projects" src={ imgMedievalStore } alt="test"/>
              <a href="https://github.com/lucasdacunhamoreti/medieval-store-api" target="_blank" rel="noreferrer"><button className="btn btn-info">Link do repositório <AiFillGithub className="icon-github-projects"/></button></a>
            </div>
          </div>
        </div>

        <button type="button" className="carousel-control-prev" data-bs-target="#banner" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button type="button" className="carousel-control-next" data-bs-target="#banner" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </Container>
  )
}
