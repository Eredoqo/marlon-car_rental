import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const BlogCard = ({ blog }) => {
  return (
    <Card>
      <CardImg top src={blog.imgUrl} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">{blog.title}</CardTitle>
        <CardText>{blog.description}</CardText>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
