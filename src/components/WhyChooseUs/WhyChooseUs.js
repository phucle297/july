import { Divider } from "antd";
import React from "react";
import "./WhyChooseUs.css";
export default function WhyChooseUs() {
  return (
    <section className="trainer py-4 pb-10">
      <div className="container mx-auto">
        <div className="h-16 ml-auto md:w-1/2" data-aos="fade-up">
          <p
            className="lg:ml-8 md:ml-7 md:pt-12 lg:pt-20 heading"
            style={{
              color: "rgb(55, 50, 86)",
              wordWrap: "break-word",
              maxWidth: "375px",
            }}
          >
            Lý do nên chọn chúng tôi
          </p>
        </div>
        <div className="trainer-content grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-1">
            <img
              className="rounded-lg"
              src="https://d2652gz3oy7d9s.cloudfront.net/Tap/tap4.jpeg"
              alt=""
              data-aos="zoom-in"
            />
            <div className="card-1" data-aos="zoom-in">
              <h3>Huấn luyện viên nhiều kinh nghiệm</h3>
              <p>
                Bạn sẽ được hướng dẫn bởi huấn luyện viên có hơn 7000 giờ giảng
                dạy, có kinh nghiệm
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="card-2" data-aos="zoom-in">
              <h3>Không gian tập luyện thoải mái</h3>
              <p>
                Phòng tập trang bị đầy đủ dụng cụ hỗ trợ cho việc tập luyện
                Yoga.
              </p>
            </div>
            <div className="card-3" data-aos="zoom-in" data-aos-delay="300">
              <h3>Đa dạng lớp học</h3>
              <p>
                Trung tâm có nhiều lớp từ dạy kèm đến những khóa cộng đồng, nội
                dung đa dạng từ thiền, yoga, thở,...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
