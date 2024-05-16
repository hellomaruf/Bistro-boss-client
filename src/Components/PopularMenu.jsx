import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import MenuCard from "../Shared/MenuCard";

function PopularMenu() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const menu = data.filter((menu) => menu.category === "popular");
        setMenu(menu);
      });
  }, []);
  console.log(menu);
  return (
    <div className=" my-16">
      <SectionHeader shorts={"Check it out"} title={"FROM OUR MENU"} />
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8">
        {menu.map((item, index) => (
          <MenuCard key={index} menu={item} />
        ))}
      </div>
    </div>
  );
}

export default PopularMenu;
