import React from "react";
import { BiBell, BiNotification } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

export default function Notifications() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="pr-2 text-sm">02-Oct-2025 | 04:09 AM</span>
      <BiNotification className="hover:cursor-pointer" size={23} />
      <BiBell className="hover:cursor-pointer" size={23} />
      <CgProfile className="hover:cursor-pointer" size={23} />
    </div>
  );
}
