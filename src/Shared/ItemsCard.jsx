import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

function ItemsCard({ items }) {
  const { user } = useContext(AuthContext);
  const { name, image, recipe, price } = items;
  const sliceRecipe = recipe.slice(0, 70);
  const navigate = useNavigate();
  const location = useLocation()
  const handleAddToCart = (items) => {
    console.log(items);
    if (user?.email) {
      // send data to database
    } else {
      Swal.fire({
        title: "You are not Logged In ",
        text: "Please login to add to cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // redirect to login page
          navigate("/login", {state:{from : location}});
        }
      });
    }
  };
  return (
    <div>
      <a href="#" className="group relative block overflow-hidden h-full">
        <img
          src={image}
          alt=""
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />
        <h2 className="text-white bg-orange-400 py-2 px-4 absolute top-4 rounded-r-full font-medium">
          ${price}
        </h2>

        <div className="relative border h-full border-gray-100 bg-white p-6">
          <h3 className="mt-4 text-lg font-medium text-gray-900">{name}</h3>

          <p className="mt-1.5 text-sm text-gray-700">{sliceRecipe}....</p>

          <button
            onClick={() => handleAddToCart(items)}
            className="block w-full mt-4 rounded bg-orange-400 text-white p-4 text-sm font-medium transition hover:scale-105"
          >
            Add to Cart
          </button>
        </div>
      </a>
    </div>
  );
}

export default ItemsCard;
