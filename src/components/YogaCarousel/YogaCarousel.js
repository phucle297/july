import { Divider } from "antd";
import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./YogaCarousel.css";
export default function YogaCarousel() {
  return (
    <section className="yoga-carousel pt-28">
      <div className="carousel">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="col-span-1 px-5 flex justify-center flex-col lg:col-span-2 mb-5 lg:mb-0">
              <div
                className="flex items-center justify-between mb-5"
                data-aos="fade-down"
                data-aos-delay="1200"
              >
                <Divider orientation="left">
                  <span id="julyyoga">July Yoga</span>
                </Divider>
              </div>
              <div data-aos="fade-down" data-aos-delay="1400">
                <p className=" text-justify">
                  JULY YOGA do Trần Thị Đức Hạnh thành lập vào ngày 10/09/2018.
                  Chuyên đào tạo về Hatha yoga, yoga phục hồi trị liệu, yoga
                  nâng cao Vinyasa, Ashtanga, Yin yoga và thiền.
                </p>
              </div>
              <div
                className="mt-5 flex items-center justify-start"
                data-aos="fade-down"
                data-aos-delay="1600"
              >
                <a
                  href="mailto:julygroups53@gmail.com"
                  className="button-primary"
                >
                  Liên hệ
                  <ArrowRightOutlined className="mr-0" />
                </a>
                <button className="media-play-icon ml-10">
                  <i className="fas fa-play media-icon"></i>
                </button>
              </div>
            </div>
            <div
              className="col-span-1 px-5 flex items-center flex-col lg:col-span-3 mb-16 md:mb-0"
              data-aos="fade-down"
              data-aos-delay="1600"
            >
              <div className="grid grid-cols-1 place-items-center">
                <img
                  className="pattern col-start-1 row-start-1"
                  src="https://d2652gz3oy7d9s.cloudfront.net/Layout/pattern.png"
                  alt=""
                />
                <img
                  className="img-yoga-carousel col-start-1 row-start-1 rounded-full lg:ml-10"
                  src="https://d2652gz3oy7d9s.cloudfront.net/Tap/tap3.jpeg"
                  // src="https://d2652gz3oy7d9s.cloudfront.net/Avatar/ava.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 280"
        className="slider__path"
      >
        <path fillOpacity={1}>
          <animate
            attributeName="d"
            dur="20000ms"
            repeatCount="indefinite"
            values="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z; M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,133.3C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;												 M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,170.7C672,149,768,75,864,80C960,85,1056,171,1152,181.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
      M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;"
          />
        </path>
      </svg>
    </section>
  );
}
