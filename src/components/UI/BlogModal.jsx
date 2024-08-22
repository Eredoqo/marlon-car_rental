import React from "react";
import { Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import BlogCard from "./../../pages/BlogCard";

const BlogModal = ({ blog, isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <div
        style={{ fontSize: "20px", marginTop: "1rem" }}
        className="text-center"
      >
        {blog.title}
      </div>
      <ModalBody>
        <BlogCard blog={blog} />
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default BlogModal;
