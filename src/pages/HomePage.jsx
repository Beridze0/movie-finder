import React from "react";
import panda from "../assets/panda.jpg";
import { BiStar } from "react-icons/bi";

const txt = `Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book`;

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

      <div className="flex overflow-x-auto">
        <div className="flex h-[150px] w-[270px] gap-2 border">
          <img src={panda} className="w-[190px] object-fill" />
          <div>
            <h1 className="text-md font-semibold">The Incredibles</h1>
            <p className="text-xs">
              {txt.split(" ").slice(0, 34).join(" ") + "..."}
            </p>
            <div className="flex items-center gap-0.5">
              <BiStar />
              <BiStar />
              <BiStar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
