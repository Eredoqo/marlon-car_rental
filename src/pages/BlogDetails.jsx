import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, FormGroup, Input, Form } from "reactstrap";
import BlogCard from "./BlogCard";
import blogData from "../utils/data/blogData";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((blog) => blog.title === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  return (
    <Helmet title={blog.title}>
      <section>
        <Container>
          <Row>
            <Col lg="8" md="8">
              <BlogCard blog={blog} />
              <div className="comment__form mt-5">
                <h5 className="mb-4">Leave a Reply</h5>
                <Form>
                  <FormGroup className="d-flex gap-3">
                    <Input type="text" placeholder="Full name" />
                    <Input type="email" placeholder="Email" />
                  </FormGroup>
                  <FormGroup>
                    <textarea
                      rows="5"
                      className="w-100 py-2 px-3"
                      placeholder="Comment..."
                    ></textarea>
                  </FormGroup>
                  <button className="btn comment__btn mt-3">
                    Post a Comment
                  </button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BlogDetails;
