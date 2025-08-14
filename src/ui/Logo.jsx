import React from "react";
import { BiCameraMovie } from "react-icons/bi";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <BiCameraMovie size={45} />
      <h1 className="text-2xl font-bold uppercase hover:cursor-pointer">
        Movies
      </h1>
    </div>
  );
}
