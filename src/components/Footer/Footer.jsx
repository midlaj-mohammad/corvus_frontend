import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import appstore from "../../assets/app_store.png";
import playstore from "../../assets/play_store.png";
import { Link } from "react-router-dom";




const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-10 px-6 md:px-16">
         <div className="container mb-12">
          <h2 className="text-2xl font-bold flex items-center space-x-2">
            <span className="bg-black text-white px-3 py-1 rounded-lg">CV</span>
            <span>Corvus</span>
          </h2>
        </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
        {/* Logo Section */}
       

        {/* Company Links */}
        <div>
          <h3 className="font-semibold text-md mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>About us</li>
            <li>Terms & conditions</li>
            <li>Privacy policy</li>
            <li>Anti-discrimination policy</li>
            <li>UC impact</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* For Customers */}
        <div>
          <h3 className="font-semibold text-md mb-3">For customers</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>UC reviews</li>
            <li>Categories near you</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold text-md mb-3">Social links</h3>
          <div className="flex space-x-3 mb-4">
            <Twitter className="text-black border rounded-full p-1 w-10 h-10" />
            <Facebook className="text-black border rounded-full p-1 w-10 h-10" />
            <Instagram className="text-black border rounded-full p-1 w-10 h-10" />
            <LinkedIn className="text-black border rounded-full p-1 w-10 h-10" />
          </div>
          <div className="flex space-x-3">
            <img src={appstore} alt="App Store" className="w-32" />
            <img src={playstore} alt="Google Play" className="w-32" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t mt-8 pt-4 text-gray-500 text-sm text-center">
        &copy; Copyright 2025 Corvus . All rights reserved. | IND
      </div>
    </footer>
  );
};

export default Footer;