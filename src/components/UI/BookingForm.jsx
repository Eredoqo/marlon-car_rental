import React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "../../styles/booking-form.css";
import emailjs from "emailjs-com";

const BookingForm = ({ toggle }) => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rijoxoc",
        "template_qrqsx7o",
        e.target,
        "uh2R_kbxSvUJcSKXh"
      )
      .then(
        (result) => {
          console.log(result.text);
          toggle();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Form onSubmit={sendEmail} className="booking-form">
      <h5 className="mb-4 fw-bold d-flex justify-content-center">
        Booking Information
      </h5>

      <div className="d-flex flex-wrap">
        <FormGroup className="flex-fill me-2 mb-3">
          <Input type="text" placeholder="First Name" required />
        </FormGroup>
        <FormGroup className="flex-fill ms-2 mb-3">
          <Input type="text" placeholder="Last Name" required />
        </FormGroup>
      </div>

      <div className="d-flex flex-wrap">
        <FormGroup className="flex-fill me-2 mb-3">
          <Input type="email" placeholder="Email" required />
        </FormGroup>
        <FormGroup className="flex-fill ms-2 mb-3">
          <Input type="tel" placeholder="Phone Number" required />
        </FormGroup>
      </div>

      <div className="d-flex flex-wrap">
        <FormGroup className="flex-fill me-2 mb-3">
          <Input type="text" placeholder="From Address" required />
        </FormGroup>
        <FormGroup className="flex-fill ms-2 mb-3">
          <Input type="text" placeholder="To Address" required />
        </FormGroup>
      </div>

      <div className="d-flex flex-wrap">
        <FormGroup className="flex-fill me-2 mb-3">
          <Input type="select" name="people" required>
            <option value="1 person">1 Person</option>
            <option value="2 persons">2 Persons</option>
            <option value="3 persons">3 Persons</option>
            <option value="4 persons">4 Persons</option>
            <option value="5+ persons">5+ Persons</option>
          </Input>
        </FormGroup>
        <FormGroup className="flex-fill ms-2 mb-3">
          <Input type="select" name="luggage" required>
            <option value="1 luggage">1 Luggage</option>
            <option value="2 luggage">2 Luggage</option>
            <option value="3 luggage">3 Luggage</option>
            <option value="4 luggage">4 Luggage</option>
            <option value="5+ luggage">5+ Luggage</option>
          </Input>
        </FormGroup>
      </div>

      <div className="d-flex flex-wrap">
        <FormGroup className="flex-fill me-2 mb-3">
          <Input type="date" placeholder="Journey Date" required />
        </FormGroup>
        <FormGroup className="flex-fill ms-2 mb-3">
          <Input type="time" placeholder="Journey Time" required />
        </FormGroup>
      </div>

      <FormGroup className="mb-3">
        <Input
          type="textarea"
          rows="4"
          placeholder="Write"
          className="textarea"
          required
        />
      </FormGroup>

      <div className="text-reserve">
        <Button type="submit" className="btn btn-primary">
          Reserve Now
        </Button>
        <a href="https://wa.me/+355 68 304 8493">
          <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
        </a>
      </div>
    </Form>
  );
};

export default BookingForm;
