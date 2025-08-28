import React from "react";
import Categories from "../ui/Categories";
import MovieCard from "../ui/MovieCard";
import ContinueWatchingItem from "../ui/ContinueWatchingItem";

const placeholder = {
  title: "The Incredibles",
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book`,
  rating: 2,
};

const { title, description, rating } = placeholder;

export default function HomePage() {
  return (
    <div className="w-full">
      <Categories />
      {/* Movies */}
      <MovieCard />

      {/* Continue Watching */}
      <h1>Continue Watching</h1>

      <ContinueWatchingItem
        title={title}
        description={description}
        rating={rating}
      />
    </div>
  );
}
