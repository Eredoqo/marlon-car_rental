import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, FormGroup, Input, Form } from "reactstrap";
import BlogCard from "./BlogCard";
import blogData from "../utils/data/blogData";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((blog) => blog.title === slug);

  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, { name, email, comment }]);
    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <Helmet title={blog.title}>
      <section>
        <Container>
          <Row>
            <Col lg="8" md="8">
              <BlogCard blog={blog} />
              <div className="comment__form mt-5">
                <h5 className="mb-4">Leave a Reply</h5>
                <Form onSubmit={handleCommentSubmit}>
                  <FormGroup className="d-flex gap-3">
                    <Input
                      type="text"
                      placeholder="Full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <textarea
                      rows="5"
                      className="w-100 py-2 px-3"
                      placeholder="Comment..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                  </FormGroup>
                  <button className="btn comment__btn mt-3" type="submit">
                    Post a Comment
                  </button>
                </Form>
              </div>
              <div className="comments mt-5">
                {comments.map((comment, index) => (
                  <div key={index}>
                    <h5>{comment.name}</h5>
                    <p>{comment.comment}</p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BlogDetails;
