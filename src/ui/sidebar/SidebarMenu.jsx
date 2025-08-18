import React from "react";
import SidebarItem from "./SidebarItem";

export default function SidebarMenu({ title, items }) {
  return (
    <div>
      <h1 className="mb-2 text-xl font-semibold">{title}</h1>
      <div className="flex flex-col gap-2">
        {items.map((item, i) => (
          <SidebarItem item={item} key={i} />
        ))}
      </div>
    </div>
  );
}
