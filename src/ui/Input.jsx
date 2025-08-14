import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Input() {
  return (
    <div className="flex w-[700px] items-center">
      <div className="flex w-full items-center justify-between rounded-full bg-gray-100 px-6 py-2">
        <input
          placeholder="Search here..."
          className="w-full border-none px-1 outline-0"
        />
        <FaMagnifyingGlass />
      </div>
    </div>
  );
}
