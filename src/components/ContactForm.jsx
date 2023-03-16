import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Row, Col, Container } from "react-bootstrap";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Container fluid>
        <form ref={form} onSubmit={sendEmail}>
          <Row>
            <Col sm={12} md={4}>
              <label>Name</label>
              <input type="text" name="user_name" />
            </Col>
          </Row>
          <Row>
            <Col sm={4} md={4}>
              <label>Email</label>
              <input type="email" name="user_email" />
            </Col>
          </Row>
          <Row>
            <Col sm={4} md={4}>
              <label>Message</label>
              <textarea name="message" />
            </Col>
          </Row>
          <Row>
            <Col sm={4} md={4}>
              <input type="submit" value="Send" />
            </Col>
          </Row>
        </form>
      </Container>
    </>
  );
}

export default ContactForm;
