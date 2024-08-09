import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const BlogCard = ({ blog }) => {
  return (
    <Card>
      <CardImg top width="100%" src={blog.imgUrl} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">{blog.title}</CardTitle>
        <CardText>{blog.description}</CardText>
        <CardText>
          <small className="text-muted">
            <i className="ri-user-line"></i> {blog.author}
            <i className="ri-calendar-line"></i> {blog.date}
            <i className="ri-time-line"></i> {blog.time}
          </small>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
