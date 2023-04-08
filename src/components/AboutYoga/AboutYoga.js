import { Divider } from "antd";
import React from "react";
import "./AboutYoga.css";
export default function AboutYoga() {
  return (
    <div className="py-8 my-5 about-yoga" id = "about">
      <div className="container mx-auto">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
            <div className="px-4">
              <Divider orientation="left">
                <h1
                  className=" heading"
                  style={{ color: "rgb(55, 50, 86)" }}
                  data-aos="fade-down"
                >
                  Giới thiệu
                </h1>
              </Divider>
              <p
                className="my-1 text-justify"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <i className="ml-0 text-xs text-green-700 fas fa-dot-circle"></i>
                <b>July Yoga</b> cung cấp các dịch vụ PT 1:1, kèm theo nhóm tại
                trung tâm, tại nhà.
              </p>
              <p
                className="my-1 text-justify"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <i className="ml-0 text-xs text-green-700 fas fa-dot-circle"></i>
                Huấn luyện viên của trung tâm đã qua đào tạo 500h tại CTCP TẬP
                ĐOÀN NHỮNG TRÁI TIM VÀNG.
              </p>
              <p
                className="my-1 text-justify"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <i className="ml-0 text-xs text-green-700 fas fa-dot-circle"></i>
                Đến 2020, <b>July Yoga</b> liên kết với Trung Tâm Yoga & Thiền
                ZenLife để đào tạo huấn luyện viên 200h Hatha yoga.
              </p>
              <p
                className="my-1 text-justify"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <i className="ml-0 text-xs text-green-700 fas fa-dot-circle"></i>
                Nguyện vọng của trung tâm hiện nay là thành lập trường đào tạo
                HLV để góp phần phát triển Yoga và Thiền tại khu vực miền Trung
                Việt Nam.
              </p>
            </div>
            <div className="grid grid-cols-5 md:mx-10">
              <div className="col-span-3 my-2">
                <img
                  className="mx-auto rounded-lg "
                  src="/images/train3.jpeg"
                  width={350}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay="100"
                />
              </div>
              <div className="col-span-2">
                <div className="pt-5 pl-3">
                  <img
                    className="rounded-lg "
                    width={250}
                    src="/images/train1.png"
                    alt=""
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  />
                </div>
                <div className="pt-3 pl-3">
                  <img
                    className="rounded-lg "
                    width={250}
                    src="/images/tap2.png"
                    alt=""
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
