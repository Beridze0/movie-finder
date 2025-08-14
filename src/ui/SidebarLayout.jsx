import React from "react";
import Header from "./Header";
import { BiHome } from "react-icons/bi";
import { Outlet } from "react-router-dom";

const menu = [
  {
    icon: <BiHome size={21} />,
    title: "Home",
  },
  {
    icon: <BiHome size={23} />,
    title: "Home",
  },
];

export default function SidebarLayout() {
  return (
    <div className="px-3">
      <Header />

      <Outlet />

      {/* Sidebar */}
      <div className="w-fit">
        <h1 className="mb-2 text-2xl font-semibold">Menu</h1>
        <div className="flex flex-col gap-2">
          {menu.map((item, i) => (
            <div
              className="flex items-center gap-1.5 rounded-xl bg-gray-200 py-2 pr-10 pl-2"
              key={i}
            >
              {item.icon}
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
