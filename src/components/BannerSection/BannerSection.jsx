"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import serv1 from "../../assets/serv1.png";
import serv2 from "../../assets/serv2.png";
import serv3 from "../../assets/serv3.png";
import serv4 from "../../assets/serv4.png";
import serv5 from "../../assets/serv5.png";


export default function BannerSection() {
  // Custom Arrow Components
  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10"
      onClick={onClick}
    >
      <FaArrowLeft className="text-gray-700 text-lg" />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10"
      onClick={onClick}
    >
      <FaArrowRight className="text-gray-700 text-lg" />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
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
    ],
    prevArrow: <PrevArrow />, 
    nextArrow: <NextArrow />,
  };

  return (
    <div className="section container mx-auto banner-sec">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Text & Services */}
        <div>
          <h1 className="text-4xl font-bold mb-8">
           Services just a tap away
          </h1>

          <p className="mb-10  animate-fade-in transform transition duration-1000">Then receive offers include price  from <br /> <b>our  service providers</b> </p>

          {/* Service Categories Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 categories-list animate-fade-in">
            <h2 className="text-lg font-semibold mb-4">What are you looking for?</h2>
            <div className="grid  grid-cols-2 gap-4">
              {[{ icon: "❄️", text: "Appliance Repair" },
                { icon: "🔧", text: "Plumbing Services" },
                { icon: "🎨", text: "Painting & Renovation" },
                { icon: "🏠", text: "Home Services" },
                { icon: "📦", text: "Packers & Movers" },
                { icon: "🐜", text: "Pest Control" },
                { icon: "🛠️", text: "Carpentry Services" },
                { icon: "🔒", text: "Home Automation & Security" }].map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-3 bg-gray-100 rounded-lg transform transition duration-300 hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
                  >
                    <span>{service.icon}</span>
                    <p className="text-sm">{service.text}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Right Side - Image Slider */}
        <div className="relative mt-12">
          <Slider {...settings} className="rounded-lg">
            <div>
              <img
                src={serv1}
                alt="Service 1"
                className="rounded-3xl w-full max-w-md h-400 mx-auto"
              />
            </div>
            <div>
              <img
                src={serv2}
                alt="Service 2"
                className="rounded-3xl w-full max-w-md h-100 mx-auto"
              />
            </div>
            <div>
              <img
                src={serv3}
                alt="Service 2"
                className="rounded-3xl w-full max-w-md h-100 mx-auto"
              />
            </div>
            <div>
              <img
                src={serv4}
                alt="Service 2"
                className="rounded-3xl w-full max-w-md h-100 mx-auto"
              />
            </div>
            <div>
              <img
                src={serv5}
                alt="Service 2"
                className="rounded-3xl w-full max-w-md h-100 mx-auto"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
