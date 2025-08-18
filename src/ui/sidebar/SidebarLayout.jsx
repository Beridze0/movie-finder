import React from "react";
import Header from "../Header";
import { menu, myLibrary, settings } from "./sidebarData.js";
import SidebarMenu from "./SidebarMenu";
import { Outlet } from "react-router-dom";

export default function SidebarLayout() {
  return (
    <div className="px-3">
      <Header />

      <div className="flex">
        {/* Sidebar */}
        <div className="flex w-fit flex-col items-center gap-3">
          {/* Menu */}
          <SidebarMenu title="Menu" items={menu} />

          {/* My LIbrary */}
          <SidebarMenu title="My Library" items={myLibrary} />

          {/* Settings */}
          <SidebarMenu title="Settings" items={settings} />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
