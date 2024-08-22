import React, { useState } from "react";
import Slider from "react-slick";
import { Card, CardBody, CardText } from "reactstrap";

import "../../styles/testimonial.css";

import testimonialsData from "../../utils/data/testimonialsData";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";
import useGetReviews from "../../hooks/useGetReviews";

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
    <>
      <Slider {...settings}>
        {testimonialsData.map((testimonialData, index) => (
          <div key={index} className="testimonial py-4 px-3">
            <Card style={{ borderRadius: "15px" }}>
              <CardBody
                style={{ height: "250px", width: "100%", overflow: "auto" }}
              >
                <CardText
                  style={{
                    height: "70px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {testimonialData.testimonial}
                </CardText>
                <div className="mt-3 d-flex align-items-center gap-4">
                  <img
                    src={photos[index % photos.length]} // Cycle through the photos array
                    alt=""
                    className="rounded-2"
                    style={{ width: "130px", height: "100px" }}
                  />
                  <div>
                    <h4 className="mb-0 mt-3 title">{testimonialData.name}</h4>
                    <h5 className="desc">Customer</h5>
                    <img
                      src={testimonialData.flagUrl}
                      alt="Country Flag"
                      style={{ width: "1.5em", height: "1em" }}
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial;
