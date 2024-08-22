import React, { useState } from "react";
import {
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import blogData from "../../utils/data/blogData";
import "../../styles/blog-details.css";
import BlogModal from "./BlogModal";

const BlogList = () => {
  return (
    <>
      {blogData.map((item) => (
        <BlogItem item={item} key={item.id} />
      ))}
    </>
  );
};

const BlogItem = ({ item }) => {
  const { imgUrl, title, description } = item;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Col lg="4" md="6" sm="6" className="mb-5">
      <Card style={{ borderRadius: "15px", width: "100%", height: "100%" }}>
        <CardImg
          style={{
            borderRadius: "15px",
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
          top
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
          <Button color="primary" onClick={toggle}>
            Read More
          </Button>
          <BlogModal blog={item} isOpen={modal} toggle={toggle} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default BlogList;
