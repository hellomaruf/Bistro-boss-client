import SectionHeader from "../Components/SectionHeader"
import useMenu from "../Hooks/useMenu"
import MenuCard from "./MenuCard"

function MenuCategory() {
    const [menu] = useMenu()
  return (
    <div>
      <SectionHeader/>
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8">
        {menu.map((item, index) => (
          <MenuCard key={index} menu={item} />
        ))}
      </div>
    </div>
  )
}

export default MenuCategory
