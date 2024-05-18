function ItemsCard({ items }) {
    const { name, image, recipe,price } = items;
    const sliceRecipe = recipe.slice(0,70)
  return (
    <div>
      <a href="#" className="group relative block overflow-hidden h-full">
      

        <img
          src={image}
          alt=""
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />
        <h2 className="text-white bg-orange-400 py-2 px-4 absolute top-4 rounded-r-full font-medium">${ price}</h2>

        <div className="relative border h-full border-gray-100 bg-white p-6">
          <h3 className="mt-4 text-lg font-medium text-gray-900">{name}</h3>

          <p className="mt-1.5 text-sm text-gray-700">{sliceRecipe}....</p>

          <form className="mt-4">
            <button className="block w-full rounded bg-orange-400 text-white p-4 text-sm font-medium transition hover:scale-105">
              Add to Cart
            </button>
          </form>
        </div>
      </a>
    </div>
  );
}

export default ItemsCard;
