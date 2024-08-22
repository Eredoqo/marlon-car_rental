import React from "react";
import { Col, Modal, ModalBody } from "reactstrap";
import BookingForm from "./BookingForm";
import "../../styles/modal.css";

const RentModal = ({ carName, price, modal, toggle }) => {
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalBody>
        <Col lg="12" className="mt-5">
          <div className="booking-info mt-5">
            <BookingForm />
          </div>
        </Col>
      </ModalBody>
    </Modal>
  );
};

export default RentModal;
