import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: "1rem" }}>
        {question}
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>{answer}</CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export const FaqList = ({ faqs }) => {
  return (
    <div>
      <div>
        <p>FAQs</p>
      </div>
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export const faqs = [
  {
    question: "Question 1",
    answer: "Answer 1",
  },
  {
    question: "Question 2",
    answer: "Answer 2",
  },
];
