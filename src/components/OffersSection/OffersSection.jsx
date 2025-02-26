import React from "react";
import Slider from "react-slick";
import { Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OffersSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1,
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
  };

  const offers = [
    {
      id: 1,
      title: "Offer Alert",
      description: " discount on home services",
      bgColor: "bg-black text-white",
      buttonColor: "bg-gray-700 hover:bg-gray-600 text-white",
      buttonText: "Know More",
    },
    {
      id: 2,
      title: "Festive Sale",
      description: "Flat 25% off on Home Painting",
      bgColor: "bg-green-100 text-green-800",
      buttonColor: "bg-white text-gray-800",
      buttonText: "Explore Now",
    },
    {
      id: 3,
      title: "Lowest rates",
      description: "Upto 60% off on Home Cleaning",
      bgColor: "bg-blue-100 text-blue-800",
      buttonColor: "bg-white text-gray-800",
      buttonText: "Book Now",
      showArrow: true,
    },
    {
      id: 4,
      title: "Exclusive Deal",
      description: "Save more on electrical services",
      bgColor: "bg-yellow-100 text-yellow-800",
      buttonColor: "bg-white text-gray-800",
      buttonText: "Grab Offer",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Offers for you</h2>
      <Slider {...settings}>
        {offers.map((offer) => (
          <div key={offer.id} className="px-2">
            <div className={`p-6 rounded-2xl flex flex-col justify-between shadow-lg ${offer.bgColor}`}>
              <div>
                <p className="text-sm text-gray-600">{offer.title}</p>
                <h3 className="text-lg font-semibold mt-2">{offer.description}</h3>
              </div>
              <div className="flex justify-between items-center">
                <Button variant="contained" className={`mt-4 shadow-md ${offer.buttonColor}`}>
                  {offer.buttonText}
                </Button>
                {offer.showArrow && <ArrowForward className="text-blue-700" />}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OffersSection;
