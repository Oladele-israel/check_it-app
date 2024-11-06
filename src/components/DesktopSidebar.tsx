import { useState } from "react";
import {
  Menu,
  User,
  X,
  LayoutDashboard,
  Box,
  Bell,
  PlusSquare,
  AlertOctagon,
  Clipboard,
  LogOut,
} from "lucide-react";

const sideData = [
  {
    title: "Products",
    icon: <Box />,
    content: [
      {
        desc: "Create Product",
        icon: <PlusSquare />,
      },
      {
        desc: "Expired Product",
        icon: <AlertOctagon />,
      },
      {
        desc: "All Entry",
        icon: <Clipboard />,
      },
    ],
  },
  {
    title: "Notification",
    icon: <Bell />,
    content: [],
  },
];

const DesktopSidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Sidebar toggle state
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeLink, setActiveLink] = useState(null);

  const toggleSubmenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="hidden lg:flex h-screen flex-col text-white transition-all duration-300">
      {/* Desktop Sidebar - Menu */}
      <div
        className={`flex flex-col items-center p-4 h-full ${
          isMenuOpen ? "w-60" : "w-20"
        } bg-gray-800 transition-all duration-300 ease-in-out`}
      >
        <div className="mb-8">logo</div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mb-8">
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
        {/* User Section */}

        {/* Sidebar Links */}
        <div className="flex flex-col space-y-6 w-full">
          <div
            className={`flex items-center ${
              isMenuOpen ? "justify-start" : "justify-center"
            } gap-4 cursor-pointer`}
          >
            <LayoutDashboard className="text-blue-500" />
            {isMenuOpen && <span className="text-lg">Dashboard</span>}
          </div>

          {sideData.map((item, index) => (
            <div key={index} className="w-full">
              {/* Main Sidebar Link */}
              <div
                className={`flex items-center ${
                  isMenuOpen ? "justify-start" : "justify-center"
                } gap-4 p-2 rounded-md cursor-pointer transition-all duration-200 ${
                  activeLink === item.title ? "bg-gray-700" : ""
                } hover:bg-gray-800`}
                onClick={() => {
                  toggleSubmenu(index);
                  handleActiveLink(item.title);
                }}
              >
                {item.icon}
                {isMenuOpen && <span>{item.title}</span>}
              </div>

              {/* Submenu Items */}
              <div
                className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index && isMenuOpen ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="ml-6 space-y-2 mt-2">
                  {item.content.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer hover:text-white transition-all"
                    >
                      {subItem.icon}
                      {isMenuOpen && <span>{subItem.desc}</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logout Button */}
        <div className="mt-auto w-full">
          <div
            className={`flex items-center ${
              isMenuOpen ? "justify-start" : "justify-center"
            } gap-4 p-2 text-red-500 cursor-pointer hover:bg-gray-700 rounded-md`}
          >
            <LogOut />
            {isMenuOpen && <span>Logout</span>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopSidebar;
