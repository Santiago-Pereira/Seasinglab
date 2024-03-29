import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Row } from "react-bootstrap";

function ContactForm() {
  const form = useRef(null);


  const alertMsj = () => {
    toast.success("Enviado!", {
      position: "bottom-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      progress: undefined,
      theme: "dark",
      style: {
        width: '500px',
        padding:'1rem', // ancho del alert
        fontSize: '30px' ,// tamaño de la fuente
        backgroundColor:'lightgrey'
      }
    });
  };

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
          alertMsj();
        },
        (error) => {
          console.log(error.text);
        }
      );
      form.current.reset();

  };
  return (
    <Container
      id="contact"
      className="contact min-vh-100 py-5 d-flex align-items-center justify-content-center"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <Row>
        <h2 className="text-center my-4">CONTACTO</h2>
        <h4 className="text-center pb-4 pb-md-0 ">
          Completá con tus datos y un asesor te contactará a la brevedad.
        </h4>

        <div className="formulario">
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="telefono">Teléfono:</label>
            <input type="tel" id="telefono" name="telefono" required />
            <label htmlFor="consulta">Dejanos tu consulta</label>
            <textarea
              id="consulta"
              name="consulta"
              rows="4"
              cols="33"
            ></textarea>
            <button type="submit">Enviar</button>
          </form>
          <ToastContainer />
        </div>
      </Row>
    </Container>
  );
}

export default ContactForm;
