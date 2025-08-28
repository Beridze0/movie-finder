import React from "react";
import panda from "../assets/panda.jpg";
import { BiStar } from "react-icons/bi";

export default function ContinueWatchingItem({ title, description, rating }) {
  return (
    <div className="flex overflow-x-auto">
      <div className="flex h-[150px] w-[270px] gap-2 border">
        <img src={panda} className="w-[190px] object-fill" />
        <div>
          <h1 className="text-md font-semibold">{title}</h1>
          <p className="text-xs">
            {description.split(" ").slice(0, 34).join(" ") + "..."}
          </p>
          <div className="flex items-center gap-0.5">
            {[...Array(rating)].map((_, i) => (
              <BiStar key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
