import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import img1 from "../assets/menu/banner3.jpg";
import des from "../assets/menu/dessert-bg.jpeg";
import pizzabg from "../assets/menu/pizza-bg.jpg";
import SectionHeader from "../Components/SectionHeader";
import useMenu from "./../Hooks/useMenu";
import MenuCard from "../Shared/MenuCard";
import { Link } from "react-router-dom";
function Menu() {
  const [menu] = useMenu();
  const offers = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  // const soup = menu.filter((item) => item.category === "soup");
  // const drinks = menu.filter((item) => item.category === "drinks");
  // const salad = menu.filter((item) => item.category === "salad");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        height={"200px"}
        maintitle={"our menu"}
        subtitle={"Would You like to try a Dish"}
        img={img1}
      />
      <div className="my-20">
        <SectionHeader shorts={"---Dont miss---"} title={"todays offers"} />
        <div className="grid grid-cols-2 gap-8 max-w-7xl mx-auto my-12">
          {offers.map((item, index) => (
            <MenuCard key={index} menu={item} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link
            to={`/shop/offered`}
            className="group relative inline-block overflow-hidden border  border-gray-900 rounded-md px-8 py-3 focus:outline-none focus:ring"
            href="#"
          >
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gray-900 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

            <span className="relative text-sm font-medium text-gray-900 transition-colors group-hover:text-white">
              ORDER YOUR FAVOURITE FOOD
            </span>
          </Link>
        </div>
      </div>
      <Cover
        height={"150px"}
        maintitle={"Desserts"}
        subtitle={
          "Desserts, the sweet finales to meals, have been cherished and savored by cultures worldwide for centuries. These delectable treats come in a myriad of forms, flavors, and textures, offering something to delight every palate."
        }
        img={des}
      />
      <div className="my-20">
        <div className="grid grid-cols-2 gap-8 max-w-7xl mx-auto my-12">
          {dessert.map((item, index) => (
            <MenuCard key={index} menu={item} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link
            to={`/shop/dessert`}
            className="group relative inline-block overflow-hidden border  border-gray-900 rounded-md px-8 py-3 focus:outline-none focus:ring"
            href="#"
          >
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gray-900 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

            <span className="relative text-sm font-medium text-gray-900 transition-colors group-hover:text-white">
              ORDER YOUR FAVOURITE FOOD
            </span>
          </Link>
        </div>
      </div>
      <Cover
        height={"150px"}
        maintitle={"Pizzas"}
        subtitle={
          "Desserts, the sweet finales to meals, have been cherished and savored by cultures worldwide for centuries. These delectable treats come in a myriad of forms, flavors, and textures, offering something to delight every palate."
        }
        img={pizzabg}
      />
      <div className="my-20">
        <div className="grid grid-cols-2 gap-8 max-w-7xl mx-auto my-12">
          {pizza.map((item, index) => (
            <MenuCard key={index} menu={item} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link
            to={`/shop/pizza`}
            className="group relative inline-block overflow-hidden border  border-gray-900 rounded-md px-8 py-3 focus:outline-none focus:ring"
            href="#"
          >
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gray-900 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

            <span className="relative text-sm font-medium text-gray-900 transition-colors group-hover:text-white">
              ORDER YOUR FAVOURITE FOOD
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
