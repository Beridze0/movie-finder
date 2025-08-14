import React from "react";
import Logo from "./Logo";
import Input from "./Input";
import Notifications from "./Notifications";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-2.5">
      <Logo />
      <Input />
      <Notifications />
    </header>
  );
}
