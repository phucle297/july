import React from "react";
import Slider from "react-slick";
import "./Feedback.css";

export default function Feedback() {
  const arrFeedback = [
    {
      img: "https://picsum.photos/50?random=1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repudiandae, molestiae minus illo sunt molestias consequuntur eligendi esse incidunt odio!",
      name: "Nguyen Van A",
    },
    {
      img: "https://picsum.photos/50?random=2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repudiandae, molestiae minus illo sunt molestias consequuntur eligendi esse incidunt odio consequuntur eligendi esse incidunt",
      name: "Le Van B",
    },
    {
      img: "https://picsum.photos/50?random=3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repudiandae, molestiae minus illo sunt molestias consequuntur eligendi esse incidunt odio!",
      name: "Nguyen Van C",
    },
    {
      img: "https://picsum.photos/50?random=4",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repudiandae, molestiae minus illo sunt molestias",
      name: "Le Van D",
    },
  ];
  const settings = {
    nextArrow: <></>,
    prevArrow: <></>,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
  };
  const renderFeedback = () => {
    return arrFeedback.map((feedback, index) => {
      return (
        <div className="feedback-card" key={index}>
          <div className="content">{feedback.content}</div>
          <div className="flex flex-row items-center justify-center mt-6 mb-4">
            <img src={feedback.img} alt="" className="rounded-full" />
            <div className=" pl-4">
              <p className="name heading text-lg my-0">{feedback.name}</p>
              <p>Học viên</p>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <section className="feedback">
      <div className="container mx-auto">
        <div className="text-center ">
          <h3 className="heading mb-8">Phản hồi của học viên</h3>
          <div className="feedback-detail">
            <Slider {...settings}>{renderFeedback()}</Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
