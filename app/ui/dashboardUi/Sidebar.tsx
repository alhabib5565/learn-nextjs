import React from "react";
import AcmeLogo from "../Logo";
import Link from "next/link";
import SidebarItems from "../SidebarItems";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="h-40 p-4 mb-4 rounded-md flex items-end bg-blue-500">
        <Link href={"/"}>
          <AcmeLogo />
        </Link>
      </div>
      <SidebarItems />
    </div>
  );
};

export default Sidebar;
