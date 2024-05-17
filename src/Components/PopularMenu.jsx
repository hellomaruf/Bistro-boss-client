// import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import MenuCard from "../Shared/MenuCard";
import useMenu from "../Hooks/useMenu";

function PopularMenu() {
  const [menu] = useMenu();
  const popularMenu = menu.filter((menu) => menu.category === "popular");
  return (
    <div className=" my-16">
      <SectionHeader shorts={"Check it out"} title={"FROM OUR MENU"} />
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8">
        {popularMenu.map((item, index) => (
          <MenuCard key={index} menu={item} />
        ))}
      </div>
    </div>
  );
}

export default PopularMenu;
