import React from 'react'
import Header from '../../components/Header'
import About from '../../components/About';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Technologies from '../../components/Technologies';

import { Container } from './styles';

export default function MainPage() {
  return (

      <Container>
          <Header />
          <About />
          <Technologies />
          <Projects />
          <Contact />
          <Footer />
        </Container>

  )
}
