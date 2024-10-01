import React from "react";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";
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
        "template_ufihunv",
        e.target,
        "uh2R_kbxSvUJcSKXh"
      )
      .then(
        (result) => {
          console.log(result.text);
          toggle(); // Ensure toggle is called here
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
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
          />
        </FormGroup>
        <FormGroup className="flex-fill ms-2 mb-3">
          <Input type="text" name="lastName" placeholder="Last Name" required />
        </FormGroup>
      </div>

      <div className="d-flex flex-wrap">
        <FormGroup className="flex-fill me-2 mb-3">
          <Input type="email" name="email" placeholder="Email" required />
        </FormGroup>
        <FormGroup className="flex-fill ms-2 mb-3">
          <Input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            required
          />
        </FormGroup>
      </div>

      <div className="d-flex flex-wrap">
        <FormGroup className="flex-fill me-2 mb-3">
          <Input
            type="text"
            name="fromAddress"
            placeholder="From Address"
            required
          />
        </FormGroup>
        <FormGroup className="flex-fill ms-2 mb-3">
          <Input
            type="text"
            name="toAddress"
            placeholder="To Address"
            required
          />
        </FormGroup>
      </div>

      <div className="d-flex flex-wrap">
        <FormGroup className="flex-fill me-2 mb-3">
          <Label for="startDate">Start Date</Label>
          <Input
            type="date"
            name="journeyDate"
            placeholder="End Date"
            required
          />
        </FormGroup>
        <FormGroup className="flex-fill me-2 mb-3">
          <Label for="startDate">End Date</Label>
          <Input
            type="date"
            name="journeyDate"
            placeholder="Start Date"
            required
          />
        </FormGroup>
      </div>

      <div className="d-flex flex-wrap">
        <FormGroup className="flex-fill me-2 m-0">
          <Label for="people">Number of People</Label>
          <Input type="select" name="people" required>
            <option value="1 person">1 Person</option>
            <option value="2 persons">2 Persons</option>
            <option value="3 persons">3 Persons</option>
            <option value="4 persons">4 Persons</option>
            <option value="5+ persons">5+ Persons</option>
          </Input>
        </FormGroup>
        <FormGroup className="flex-fill ms-2 mb-3">
          <Label for="journeyTime">Time to Pick Up</Label>
          <Input
            type="time"
            name="journeyTime"
            placeholder="Journey Time"
            required
          />
        </FormGroup>
      </div>

      <FormGroup className="mb-3">
        <Input
          type="textarea"
          rows="4"
          name="message"
          placeholder="Write your message"
          className="textarea"
          required
        />
      </FormGroup>

      <div className="text-reserve">
        <Button type="submit" className="btn btn-primary">
          Reserve Now
        </Button>
        <a href="https://wa.me/+355683048493">
          <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
        </a>
      </div>
    </Form>
  );
};

export default BookingForm;
