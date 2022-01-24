import React from "react";
import "./YogaCarousel.css";
export default function YogaCarousel() {
  return (
    <div className="yoga-carousel">
      <div className="carousel mt-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="col-span-1">
              <div className="flex items-center justify-between my-3">
                <span
                  className="font-bold text-2xl"
                  style={{ color: "#033f22" }}
                >
                  July Yoga
                </span>
                <span className="divider"></span>
              </div>
              <div className="">
                <h1 className="text-4xl font-bold w-96">
                  {/* Trong Yoga, 99% là thực hành và 1% là lý thuyết */}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
