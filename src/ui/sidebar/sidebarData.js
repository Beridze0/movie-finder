import {
  BiDownload,
  BiHeart,
  BiHistory,
  BiHome,
  BiLogOut,
  BiTrendingUp,
} from "react-icons/bi";
import { Outlet } from "react-router-dom";
import { BsPerson } from "react-icons/bs";

const menu = [
  {
    icon: BiHome,
    title: "Home",
  },
  {
    icon: BiTrendingUp,
    title: "Trending",
  },
  {
    icon: BsPerson,
    title: "Artists",
  },
];

const myLibrary = [
  {
    icon: BiHistory,
    title: "Recently",
  },
  {
    icon: BiHeart,
    title: "Favorite",
  },
  {
    icon: BiDownload,
    title: "Download",
  },
];

const settings = [
  {
    icon: BsPerson,
    title: "Account",
  },
  {
    icon: BiLogOut,
    title: "Log out",
  },
];

export { menu, myLibrary, settings };
