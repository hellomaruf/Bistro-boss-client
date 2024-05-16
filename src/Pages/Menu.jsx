import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import img1 from "../assets/menu/banner3.jpg";
function Menu() {
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
    </div>
  );
}

export default Menu;
