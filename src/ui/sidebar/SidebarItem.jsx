import React from "react";

export default function SidebarItem({ item }) {
  const Icon = item.icon;

  return (
    <div className="flex items-center gap-1.5 rounded-xl bg-gray-200 py-2 pr-10 pl-2 text-[0.8rem]">
      <Icon size={21} />
      <p>{item.title}</p>
    </div>
  );
}
