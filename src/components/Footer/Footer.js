import React, { useEffect } from "react";
import "./Footer.css";
import {
  PhoneOutlined,
  HomeOutlined,
  MailOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
export default function Footer() {
  const [mapWidth, setMapWidth] = React.useState(350);
  const [mapHeight, setMapHeight] = React.useState(180);
  window.onload = () => {
    if (window.innerWidth < 375) {
      setMapWidth(250);
    } else if (window.innerWidth < 540) {
      setMapWidth(280);
    } else if (window.innerWidth < 768) {
      setMapWidth(300);
    } else if (window.innerWidth < 821) {
      setMapWidth(550);
      setMapHeight(250);
    } else if (window.innerWidth < 1025) {
      setMapWidth(200);
      setMapHeight(180);
    } else {
      setMapWidth(350);
      setMapHeight(250);
    }
  };
  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth < 375) {
        setMapWidth(250);
      } else if (window.innerWidth < 540) {
        setMapWidth(280);
      } else if (window.innerWidth < 768) {
        setMapWidth(300);
      } else if (window.innerWidth < 821) {
        setMapWidth(550);
        setMapHeight(250);
      } else if (window.innerWidth < 1025) {
        setMapWidth(200);
        setMapHeight(180);
      } else {
        setMapWidth(350);
        setMapHeight(250);
      }
    };
  }, [window.innerWidth]);
  return (
    <footer className="footer">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-6">
          <div className="col-span-1 flex flex-col md:px-10 md:col-span-2 lg:px-4 lg:col-span-1">
            <img
              src="https://d2652gz3oy7d9s.cloudfront.net/Logo/julywhite.png"
              width={180}
              className=" self-center mb-5"
              alt=""
            />
            <p className="text-white px-8 lg:px-7 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, error ipsum, dolor possimus totam repudiandae adipisci
              magnam laborum eum laboriosam voluptatem deleniti aperiam,
            </p>
          </div>
          <div className="col-span-1 mt-6 px-7 lg:px-1 lg:mt-9">
            <h3 className="text-3xl font-bold text-white text-center h-12 lg:h-14 lg:mt-4">
              Sản phẩm
            </h3>
            <div className="flex flex-col lg:px-14 items-center justify-center">
              <NavLink to="/apartment" className="footer-nav-link">
                Căn hộ cho thuê
              </NavLink>
              <NavLink to="/yoga" className="footer-nav-link">
                Yoga
              </NavLink>
            </div>
          </div>
          <div className="col-span-1 mt-6 md:px-7 lg:px-1 lg:mt-9">
            <h3 className="text-3xl font-bold text-white text-center h-12 lg:h-14 lg:mt-4">
              Liên hệ
            </h3>
            <div className="flex items-center justify-center">
              <div className="social lg:mx-16">
                <div className=" my-1.5 flex">
                  <HomeOutlined className="text-white" />
                  <p className="text-white">53 Lê Thanh Nghị, Đà Nẵng</p>
                </div>
                <div className=" my-1.5">
                  <a href="tel:02363773377" className="flex ">
                    <PhoneOutlined className="text-white mt-0.5" />
                    <a className="text-white footer-nav-link">0236 3773 377</a>
                  </a>
                </div>
                <div className=" my-1.5">
                  <a href="mailto:julygroups53@gmail.com" className="flex ">
                    <MailOutlined className="text-white mt-0.5" />
                    <a className="text-white footer-nav-link">
                      julygroups53@gmail.com
                    </a>
                  </a>
                </div>
                <div className=" my-1.5 flex">
                  <ClockCircleOutlined className="text-white mt-0.5" />
                  <p className="text-white">7:00 - 20:00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:mt-4 lg:px-4 lg:mt-9 flex items-center justify-center md:col-span-2 lg:col-span-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.4464363169122!2d108.21556285016807!3d16.042306844366102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c1da813283%3A0x99c1b65dfacc9083!2zNTMgxJAuIEzDqiBUaGFuaCBOZ2jhu4ssIEhvw6AgQ8aw4budbmcgQuG6r2MsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZyA1NTAwMDAsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1642917168170!5m2!1sen!2s"
              width={mapWidth}
              height={mapHeight}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
