
function MenuCard({ menu }) {
  return (
    <div className="flex gap-5">
      <img
        className="w-28 h-28 rounded-bl-full rounded-br-full rounded-tr-full"
        src={menu.image}
        alt=""
      />
      <div className="space-y-3">
        <div className=" flex justify-between">
          <h3 className="text-lg uppercase font-semibold">{menu.name}</h3>
          <p className="text-orange-400">${menu.price}</p>
        </div>
        <p className="text-gray-600">{menu.recipe}</p>
      </div>
    </div>
  );
}

export default MenuCard;
