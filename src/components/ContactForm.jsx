import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Col, Row, Container } from "react-bootstrap";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h6m1gsc",
        "template_n1foraw",
        form.current,
        "Jtmr49j5_xBgs5Wob"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensaje enviado con éxito");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container>
      <div className="formulario">
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            placeholder="Decinos tu nombre"
          />

          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Decinos tu e-mail"
          />

          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            required
            placeholder="Decinos tu Teléfono"
          />
          <label htmlFor="consulta">Dejanos tu consulta</label>
          <textarea
            id="consulta"
            name="consulta"
            rows="4"
            cols="33"
            placeholder="Contanos tu inquietud"
          ></textarea>

          <button type="submit" className="jsahd">
            Enviar
          </button>
        </form>
      </div>
    </Container>
  );
}

export default ContactForm;
