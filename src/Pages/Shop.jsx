import useMenu from "../Hooks/useMenu";
import Cover from "../Shared/Cover";
import ItemsCard from "../Shared/ItemsCard";
import shopBg from "../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function Shop() {
  const [menu] = useMenu();

  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  const salad = menu.filter((item) => item.category === "salad");
  return (
    <div>
      <Cover
        height={"200px"}
        maintitle={"Our Shop"}
        subtitle={"Would you like to try a dish"}
        img={shopBg}
      />

      <div className="text-center max-w-7xl mx-auto my-10">
        <Tabs>
          <TabList >
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Desert</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
          <div className="grid grid-cols-3 gap-6">
              {salad.map((item, index) => (
                <ItemsCard key={index} items={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-6">
              {pizza.map((item, index) => (
                <ItemsCard key={index} items={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-3 gap-6">
              {soup.map((item, index) => (
                <ItemsCard key={index} items={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-3 gap-6">
              {dessert.map((item, index) => (
                <ItemsCard key={index} items={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-3 gap-6">
              {drinks.map((item, index) => (
                <ItemsCard key={index} items={item} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default Shop;
