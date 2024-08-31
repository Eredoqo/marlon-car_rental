import React from "react";
import { Col, Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import BookingForm from "./BookingForm";
import "../../styles/modal.css";

const RentModal = ({ toggle, modal, toggle }) => {
  return (
    <Modal isOpen={modal} toggle={toggle} className="custom-modal">
      <ModalBody>
        <Col lg="12" className="mt-5">
          <div className="booking-info mt-5">
            <BookingForm toggle={toggle} />
          </div>
        </Col>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default RentModal;
