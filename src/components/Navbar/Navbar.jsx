import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const locations = [
    "Connaught Place, New Delhi",
    "MG Road, Bangalore",
    "Bandra, Mumbai",
    "Park Street, Kolkata",
    "Anna Nagar, Chennai"
  ];

  return (
    <div className="fixed  w-full bg-white shadow-sm z-50">
      <div className="container ">
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold cursor-pointer">
              <Link to="/">Corvus</Link>
            </span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 text-gray-500 nav-ul">
            <li className="cursor-pointer hover:text-black">Beauty</li>
            <li className="cursor-pointer hover:text-black">Decor</li>
            <li className="cursor-pointer hover:text-black">Native</li>
          </ul>

          {/* Location & Search */}
          <div className="hidden md:flex items-center space-x-4">
            <div
              className="flex items-center border px-3 py-1 rounded-md text-gray-600 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <IoLocationOutline className="text-xl" />
              <span className="ml-1 p-1">Select a Location</span>
            </div>
            <div className="flex items-center border p-2 rounded-md text-gray-600">
              <FiSearch className="text-xl" />
              <input
                type="text"
                placeholder="Search for 'Kitchen'"
                className="ml-2 outline-none"
              />
            </div>
          </div>

          {/* Icons & Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <FiShoppingCart className="text-xl cursor-pointer" />
            <FiUser className="text-xl cursor-pointer" />
            <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <HiX /> : <HiOutlineMenu />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 z-50">
          <ul className="flex flex-col space-y-4 text-gray-700">
            <li className="cursor-pointer hover:text-black">Beauty</li>
            <li className="cursor-pointer hover:text-black">Decor</li>
            <li className="cursor-pointer hover:text-black">Native</li>
          </ul>

          <div className="mt-4 border-t pt-4">
            <div
              className="flex items-center border px-3 py-2 rounded-md text-gray-600 mb-3 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <IoLocationOutline className="text-xl" />
              <span className="ml-1">Select a Location</span>
            </div>
            <div className="flex items-center border px-3 py-2 rounded-md text-gray-600">
              <FiSearch className="text-xl" />
              <input
                type="text"
                placeholder="Search for 'Kitchen'"
                className="ml-2 outline-none w-full"
              />
            </div>
          </div>
        </div>
      )}

      {/* Location Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end md:items-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white p-6 rounded-t-lg md:rounded-lg shadow-lg w-full md:w-80"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-4">Select a Location</h2>
            <div className="flex items-center border px-3 py-2 rounded-md text-gray-600 mb-3">
              <FiSearch className="text-xl" />
              <input
                type="text"
                placeholder="Search location..."
                className="ml-2 outline-none w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <ul className="space-y-2 max-h-40 overflow-y-auto">
              {locations
                .filter((loc) => loc.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((loc, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:bg-gray-100 p-2 rounded"
                    onClick={() => setIsModalOpen(false)}
                  >
                    {loc}
                  </li>
                ))}
            </ul>
            <button
              className="mt-4 w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-900"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
