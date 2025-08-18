import React from "react";
import panda from "../assets/panda.jpg";

export default function HomePage() {
  return (
    <div className="w-full">
      <div className="flex items-center gap-7">
        <button>All</button>
        <button>Coming Soon</button>
        <button>New Release</button>
        <button>Live</button>
      </div>
      {/* Movies */}
      <div className="flex items-center gap-5 overflow-x-scroll">
        <img src={panda} className="h-[380px] w-[540px] object-fill" />
        <img src={panda} className="h-[380px] w-[540px] object-fill" />
        <img src={panda} className="h-[380px] w-[540px] object-fill" />
      </div>

      {/* Continue Watching */}
      <h1>Continue Watching</h1>
    </div>
  );
}
