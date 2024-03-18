import React, { ReactNode } from "react";
import Sidebar from "../ui/dashboardUi/Sidebar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-72 w-full p-2 lg:min-h-screen h-full">
        <Sidebar />
      </div>
      <div className="flex-grow ">{children}</div>
    </div>
  );
};

export default layout;
