import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const acRepairServices = [
  { title: "AC Repair & Service", image: "/images/ac-repair.jpg" },
  { title: "Washing Machine Repair", image: "/images/washing-machine.jpg" },
  { title: "Water Purifier Repair & Service", image: "/images/water-purifier.jpg" },
  { title: "Refrigerator Repair", image: "/images/refrigerator.jpg" },
  { title: "Television Repair", image: "/images/tv-repair.jpg" },
];

const MostServices = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    arrows: false, 
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
          },
        },
      ]
  };

  return (
    <section className="section container">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">AC & Appliance Repair</h2>
        <button className="text-purple-600 font-medium hover:underline">
          See all
        </button>
      </div>

      <div className="relative">
        {/* Custom Left Arrow */}
        <button
          className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg z-10"
          onClick={() => sliderRef?.slickPrev()}
        >
          <FaChevronLeft />
        </button>

        <Slider ref={setSliderRef} {...settings} className="overflow-hidden">
          {acRepairServices.map((service, index) => (
            <div key={index} className="p-2">
              <div className="bg-white shadow-lg rounded-lg p-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="mt-2 text-lg font-semibold">{service.title}</h3>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Right Arrow - Positioned Outside the Last Card */}
        <button
          className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg z-10"
          onClick={() => sliderRef?.slickNext()}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default MostServices;
