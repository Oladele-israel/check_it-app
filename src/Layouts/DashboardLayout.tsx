import { Outlet } from "react-router-dom";
import MobileNav from "../components/MobileNav";
import DesktopSidebar from "../components/DesktopSidebar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen">
      {/* Mobile Layout - The Outlet is directly under the MobileNav for mobile screens */}
      <div className="lg:hidden h-screen overflow-hidden flex flex-col">
        <MobileNav />
        <div className="">
          <Outlet />
        </div>
      </div>

      {/* Desktop Layout - The Outlet is beside the DesktopSidebar for desktop screens */}
      <div className="hidden lg:flex h-screen overflow-hidden">
        <DesktopSidebar />
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
