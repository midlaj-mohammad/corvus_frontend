import { Notifications, Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white ">
      <h2 className="text-xl font-bold admin-welcom">Hi, Welcome back 👋</h2>
      <div className="flex items-center space-x-4">
        {/* <Search className="text-gray-500 cursor-pointer" />
        <Notifications className="text-gray-500 cursor-pointer" /> */}
        <div className="relative">
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">2</span>
          <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
