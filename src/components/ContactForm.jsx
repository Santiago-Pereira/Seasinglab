import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Row } from "react-bootstrap";

function ContactForm() {
  const form = useRef();

  const alertMsj = () => {
    toast.success('✅ Mensaje enviado con éxito !', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      progress: undefined,
      theme: "dark",
    });
  }

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
          alertMsj()
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container fluid className="contact min-vh-100 py-5 d-flex align-items-center justify-content-center">
    <Row>
    <h2 className="text-center my-4 contact">CONTACTO</h2>
    <h4 className="text-center pb-4 opb-md-0 ">Completá con tus datos y un asesor te contactará a la brevedad.</h4>

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
          placeholder="Decinos tu teléfono"
        />
        <label htmlFor="consulta">Dejanos tu consulta</label>
        <textarea
          id="consulta"
          name="consulta"
          rows="4"
          cols="33"
          placeholder="Contanos tu inquietud"
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
      <ToastContainer />
    </div>
    </Row>
    </Container>

  );
};

export default ContactForm;
