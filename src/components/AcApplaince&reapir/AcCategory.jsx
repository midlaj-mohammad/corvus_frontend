import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const acRepairServices = [
  { title: "AC Repair & Service", image: "https://th.bing.com/th/id/OIP.mQ2bQPPL09Fj2uRW0bi2jwHaE8?w=261&h=180&c=7&r=0&o=5&dpr=1.2&pid=1.7" },
  { title: "Washing Machine Repair", image: "/images/washing-machine.jpg" },
  { title: "Water Purifier Repair & Service", image: "/images/water-purifier.jpg" },
  { title: "Refrigerator Repair", image: "/images/refrigerator.jpg" },
  { title: "Television Repair", image: "/images/tv-repair.jpg" },
];

const AcCategory = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    slidesToShow: 4,
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
        <div className="flex items-center gap-2">
        <button className="text-black-600 font-medium hover:underline">
            See all
          </button>
          {/* Left Arrow */}
          <button
            className="bg-gray-800 text-white p-2 rounded-full disabled:opacity-50"
            onClick={() => sliderRef?.slickPrev()}
          >
            <FaChevronLeft />
          </button>
         
          {/* Right Arrow */}
          <button
            className="bg-gray-800 text-white p-2 rounded-full disabled:opacity-50"
            onClick={() => sliderRef?.slickNext()}
          >
            <FaChevronRight />
          </button>
        
        </div>
      </div>

      <div className="relative">
        <Slider ref={setSliderRef} {...settings} className="overflow-hidden">
          {acRepairServices.map((service, index) => (
            <div key={index} className="p-2">
              <div className="bg-white shadow-lg rounded-lg p-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="mt-2 text-sm font-semibold">{service.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AcCategory;
