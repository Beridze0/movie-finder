import React from "react";
import panda from "../assets/panda.jpg";

export default function MovieCard() {
  return (
    <div className="flex items-center gap-5 overflow-x-scroll">
      <img src={panda} className="h-[380px] w-[540px] object-fill" />
      <img src={panda} className="h-[380px] w-[540px] object-fill" />
      <img src={panda} className="h-[380px] w-[540px] object-fill" />
    </div>
  );
}
