import React from "react";
import { BiBell, BiNotification } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import Input from "./Input";

export default function AppLayout() {
  return (
    <div>
      <header className="flex items-center justify-between px-5 py-2.5">
        <Logo />
        <Input />
        {/* Notifications and Profile avatar */}
        <div className="flex items-center gap-1.5">
          <span className="pr-2 text-sm">02-Oct-2025 | 04:09 AM</span>
          <BiNotification size={23} />
          <BiBell size={23} />
          <CgProfile size={23} />
        </div>
      </header>

      <Outlet />
    </div>
  );
}
