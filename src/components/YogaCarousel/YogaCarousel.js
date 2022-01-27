import { Divider } from "antd";
import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./YogaCarousel.css";
export default function YogaCarousel() {
  return (
    <div className="yoga-carousel">
      <div className="carousel mt-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="col-span-1 px-5 flex justify-center flex-col lg:col-span-2 mb-5 lg:mb-0">
              <div className="flex items-center justify-between mb-5">
                <Divider orientation="left">
                  <span
                    className="font-bold text-5xl tracking-wide"
                    // style={{ color: "rgba(0, 108, 54, 1)" }}
                    style={{ color: "rgb(55 50 86)" }}
                  >
                    {/* July Yoga */}
                    JULY YOGA
                  </span>
                </Divider>
              </div>
              <div className="">
                <p className=" text-justify">
                  JULY YOGA do Trần Thị Đức Hạnh thành lập vào ngày 10/09/2018.
                  Chuyên đào tạo về Hatha yoga, yoga phục hồi trị liệu, yoga
                  nâng cao Vinyasa, Ashtanga, Yin yoga và thiền.
                </p>
              </div>
              <div className="mt-5 flex items-center justify-start">
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
            <div className="col-span-1 px-5 flex items-center flex-col lg:col-span-3">
              <div className="grid grid-cols-1 place-items-center">
                <img
                  className=" col-start-1 row-start-1"
                  src="https://d2652gz3oy7d9s.cloudfront.net/Layout/pattern.png"
                  alt=""
                  style={{
                    height: "550px",
                    width: "550px",
                  }}
                />
                <img
                  className=" col-start-1 row-start-1 rounded-full"
                  // src="https://d2652gz3oy7d9s.cloudfront.net/Tap/tap1.png"
                  src="https://d2652gz3oy7d9s.cloudfront.net/Avatar/ava.png"
                  alt=""
                  style={{
                    objectFit: "cover",
                    objectPosition: "0 30%",
                    height: "300px",
                    width: "300px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
