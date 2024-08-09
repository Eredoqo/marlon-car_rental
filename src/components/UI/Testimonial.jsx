import React from "react";
import Slider from "react-slick";
import { Card, CardBody, CardText } from "reactstrap";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const photos = [ava01, ava02, ava03, ava04];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {photos.map((ava, index) => (
        <div key={index} className="testimonial py-4 px-3">
          <Card style={{ borderRadius: "15px" }}>
            <CardBody>
              <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                magni explicabo molestias recusandae repudiandae, dolor,
                sapiente placeat ab, animi eum minima nulla facere aliquam aut
                vitae quo pariatur voluptate odit?
              </CardText>
              <div className="mt-3 d-flex align-items-center gap-4">
                <img
                  src={ava}
                  alt=""
                  className="rounded-2"
                  style={{ width: "130px", height: "100px" }}
                />

                <div>
                  <h4 className="mb-0 mt-3 title">Chuck Norris</h4>
                  <h5 className="desc">Customer</h5>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonial;
