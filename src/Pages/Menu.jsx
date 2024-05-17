import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import img1 from "../assets/menu/banner3.jpg";
import des from "../assets/menu/dessert-bg.jpeg";
import pizzabg from "../assets/menu/pizza-bg.jpg";
import SectionHeader from "../Components/SectionHeader";
import useMenu from "./../Hooks/useMenu";
import MenuCard from "../Shared/MenuCard";
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
      </div>
    </div>
  );
}

export default Menu;
