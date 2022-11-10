import React from 'react'
import { Container } from './styles'
import { MdEmail } from 'react-icons/md';

export default function Contact() {
  return (
    <Container>
      <form>
        <h2><MdEmail id="logo-email"/>Contate-me</h2>
        <input className="form-control" type="text" placeholder="Nome" required />
        <input className="form-control" type="email" placeholder="Email" required />
        <textarea maxLength="500" className="form-control" cols="30" rows="8" placeholder="Mensagem" required></textarea>
        <button className="btn btn-success" type="submit">Enviar</button>
      </form>
    </Container>
  )
}
