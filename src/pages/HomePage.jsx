import React from "react";
import Categories from "../ui/Categories";
import MovieCard from "../ui/MovieCard";
import ContinueWatchingItem from "../ui/ContinueWatchingItem";

export default function HomePage() {
  return (
    <div className="w-full">
      <Categories />
      {/* Movies */}
      <MovieCard />

      {/* Continue Watching */}
      <h1>Continue Watching</h1>

      <ContinueWatchingItem />
    </div>
  );
}
