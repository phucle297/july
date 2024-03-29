import React, { Fragment, memo } from "react";
import Slider from "react-slick";
import "./Carousel.css";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <i
      className="carousel__button prev-arrow fas fa-chevron-left"
      onClick={onClick}
    ></i>
  );
};
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <i
      className="carousel__button next-arrow fas fa-chevron-right"
      onClick={onClick}
    ></i>
  );
};
function Carousel(props) {
  // const { arrBanner } = useSelector((state) => state.FilmReducer);
  // const dispatch = useDispatch();
  const arrImg = [];
  const ContentCarousel = () => {
    return arrImg.map((film, index) => {
      return (
        <div
          className="cursor-pointer carousel__item"
          onClick={async () => {}}
          key={index}
        >
          <div className="overlay"></div>
          <img
            src={film?.hinhAnh}
            alt="Banner Film"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://picsum.photos/1920/1080?random=${index}`;
            }}
            className="carousel__item"
          />
          <div className="carousel__play">
            <i className="fa fa-play"></i>
          </div>
        </div>
      );
    });
  };
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Fragment>
      <div className="h-96"></div>
      <Slider {...settings}>{<ContentCarousel />}</Slider>
    </Fragment>
  );
}

export default memo(Carousel);
