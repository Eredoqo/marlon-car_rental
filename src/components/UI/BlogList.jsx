import React from "react";
import {
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import blogData from "../../utils/data/blogData";
import "../../styles/blog-details.css";
// import { FaqList, faqs } from "../../pages/FaqItem";

const BlogList = () => {
  return (
    <>
      {blogData.map((item) => (
        <BlogItem item={item} key={item.id} />
      ))}
      {/* <FaqList faqs={faqs} /> */}
    </>
  );
};

const BlogItem = ({ item }) => {
  const { imgUrl, title, author, date, description, time } = item;

  return (
    <Col lg="4" md="6" sm="6" className="mb-5">
      <Card style={{ borderRadius: "15px", width: "100%", height: "100%" }}>
        <CardImg
          style={{ borderRadius: "15px" }}
          top
          width="100%"
          src={imgUrl}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle style={{ color: "green" }} tag="h5">
            <div>{title}</div>
          </CardTitle>
          <CardText>
            {description.length > 100
              ? description.substr(0, 100)
              : description}
          </CardText>
          <Button color="primary" tag={Link} to={`/blogs/${title}`}>
            Read More
          </Button>

          <CardText>
            <div className="blog__time pt-3 mt-3 d-flex align-items-center justify-content-between">
              <span className="blog__author">
                <i class="ri-user-line "></i> {author}
              </span>

              <div className=" d-flex align-items-center gap-3">
                <span className=" d-flex align-items-center gap-1 section__description">
                  <i class="ri-calendar-line"></i> {date}
                </span>

                <span className=" d-flex align-items-center gap-1 section__description">
                  <i class="ri-time-line"></i> {time}
                </span>
              </div>
            </div>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BlogList;
