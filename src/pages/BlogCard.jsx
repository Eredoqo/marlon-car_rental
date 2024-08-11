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
          <div className="blog__time pt-3 mt-3 d-flex align-items-center justify-content-between">
            <span className="blog__author">
              <i class="ri-user-line "></i> {blog.author}
            </span>

            <div className=" d-flex align-items-center gap-3">
              <span className=" d-flex align-items-center gap-1 section__description">
                <i class="ri-calendar-line"></i> {blog.date}
              </span>

              <span className=" d-flex align-items-center gap-1 section__description">
                <i class="ri-time-line"></i> {blog.time}
              </span>
            </div>
          </div>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
