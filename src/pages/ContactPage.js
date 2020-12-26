import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./ContactPage.css";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_uMXc9IqogkmJxBWK1YG5N");

const ContactPage = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_epr7vpr",
        "template_g410e2c",
        e.target,
        "user_uMXc9IqogkmJxBWK1YG5N"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    const form_container = document.getElementById("form_container");
    // form_container.style.display = 'none'
    form_container.remove();
    const thanks_div = document.createElement("div");
    thanks_div.innerHTML =
      "Your message has been sent. We will be in touch with you shortly.";
    thanks_div.style.alignContent = "center";
    document.body.appendChild(thanks_div);
  }

  return (
    <div>
      <div className="form-container">
        <Container>
          <Row>
            <Col>
              <h2>Contact</h2>
              <form
                className="contact-form"
                id="form_container"
                onSubmit={sendEmail}
              >
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="user_name" required />

                <label>Email</label>
                <input type="email" name="user_email" required />
                <label>Message</label>
                <textarea name="message" rows="7" required />
                <input className="submit_button" type="submit" value="SEND" />
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ContactPage;
