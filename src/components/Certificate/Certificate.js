import Slider from "react-slick";
import React from "react";
import "./Certificate.css";
export default function Certificate() {
  const arrCer = [];
  for (let i = 1; i < 9; i++) {
    arrCer.push(
      `/images/cer${i}.png`
    );
  }
  const settings = {
    nextArrow: <></>,
    prevArrow: <></>,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    centerPadding: "10px",
  };
  const renderCer = () => {
    return arrCer.map((item, index) => {
      return (
        <div key={index} className="">
          <img
            width={450}
            className="block mx-auto rounded-lg"
            src={item}
            alt="certificate"
          />
        </div>
      );
    });
  };
  return (
    <section className="certificate">
      <div className="container mx-auto">
        <h1 className="text-center heading" data-aos="fade-down">
          Trình độ - Chứng chỉ
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div
            className="certificate-left place-items-center"
            data-aos="zoom-in"
          >
            <Slider {...settings} className="col-span-1">
              {renderCer()}
            </Slider>
          </div>
          <ul className="certificate-right" data-aos="fade-up">
            <li className="mt-5 mb-1 text-justify">
              <i className="ml-0 text-xs text-green-700 fas fa-dot-circle"></i>
              Chứng nhận 200H Hatha Yoga US Yoga Alliance
            </li>
            <li className="my-1 text-justify">
              <i className="ml-0 text-xs text-green-700 fas fa-dot-circle"></i>
              Chứng nhận 300H Ashtanga Vinyasa US Yoga Alliance
            </li>
            <li className="my-1 text-justify">
              <i className="ml-0 text-xs text-green-700 fas fa-dot-circle"></i>
              Chứng nhận 200H về Giáo viên yoga trị liệu (Học viện yoga trị liệu
              Việt Ấn)
            </li>
            <li className="my-1 text-justify">
              <i className="ml-0 text-xs text-green-700 fas fa-dot-circle"></i>
              Workshop 27h Iyengar Yoga (Rogelio A. Nunez, Intermediate Jr. II
              Iyengar Certified)
            </li>
            <li className="my-1 text-justify">
              <i className="ml-0 text-xs text-green-700 fas fa-dot-circle"></i>
              Kỹ năng đứng lớp (Kim Nguyễn Shriyoga)
            </li>{" "}
            <li className="my-1 text-justify">
              <i className="ml-0 text-xs text-green-700 fas fa-dot-circle"></i>
              Hướng dẫn viên thiền 50h (Nguyễn Văn Hiển, Zenlife yoga)
            </li>
            <li className="my-1 text-justify">
              <i className="ml-0 text-xs text-green-700 fas fa-dot-circle"></i>
              Chứng nhận khóa học Khoa học Luân xa năng lượng tự chữa lành
              (Master Sridevi Lê Thị Tố Hải, chuyên gia về Yoga, Thiền – Năng
              lượng, Phó chủ tịch liên đoàn Yoga VN phụ trách mảng Phục Hồi Tự
              Nhiên)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
