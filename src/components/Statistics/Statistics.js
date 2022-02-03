import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "./Statistics.css";
export default function Statistics() {
  return (
    <section className="stats" data-aos="zoom-out">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-1 my-2 text-center">
            <i className="far fa-smile text-green-600 block my-2 text-4xl"></i>
            <CountUp end={300} redraw={true} duration={2}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} className="text-2xl font-bold"></span>
                </VisibilitySensor>
              )}
            </CountUp>
            <span className="text-3xl font-semibold">+</span>
            <h4 className="text-xl font-semibold">Học viên</h4>
          </div>
          <div className="col-span-1 my-2 text-center">
            <i className="far fa-clock text-green-600 block my-2 text-4xl"></i>
            <CountUp end={7} redraw={true} duration={2}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} className="text-2xl font-bold"></span>
                </VisibilitySensor>
              )}
            </CountUp>
            <span className="text-3xl font-semibold">+</span>
            <h4 className="text-xl font-semibold">Năm kinh nghiệm</h4>
          </div>
          <div className="col-span-1 my-2 text-center">
            <i className="far fa-hourglass text-green-600 block my-2 text-4xl"></i>
            <CountUp end={7000} redraw={true} duration={2}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} className="text-2xl font-bold"></span>
                </VisibilitySensor>
              )}
            </CountUp>
            <span className="text-3xl font-semibold">+</span>
            <h4 className="text-xl font-semibold">Giờ giảng dạy</h4>
          </div>
          {/* <div className="col-span-1 my-2 text-center">
            <i className="far fa-smile text-green-600 block my-2 text-4xl"></i>
            <CountUp end={100} redraw={true} duration={2}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} className="text-2xl font-bold"></span>
                </VisibilitySensor>
              )}
            </CountUp>
            <span className="text-3xl font-semibold">+</span>
            <h4 className="text-xl font-semibold">Học viên</h4>
          </div> */}
        </div>
      </div>
    </section>
  );
}
