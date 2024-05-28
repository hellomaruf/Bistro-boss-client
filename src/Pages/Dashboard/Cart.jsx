import { Link } from "react-router-dom";
import SectionHeader from "../../Components/SectionHeader";
import useCarts from "../../Hooks/useCarts";
import { RiDeleteBinLine } from "react-icons/ri";

function Cart() {
  const [cart] = useCarts();

  const totalPrice = cart?.reduce((total, item) => total + item.price, 0);
  return (
    <div className="scrollbar  scrollbar-thumb-sky-700 scrollbar-track-sky-300 h-screen overflow-y-scroll">
      <SectionHeader shorts={"---My Cart---"} title={"WANNA ADD MORE?"} />
      <div className="mx-14 bg-orange-50 p-4 ">
        <div className="flex justify-between items-center pb-4">
          <h2 className="text-2xl font-medium">Total Order : {cart?.length}</h2>
          <h2 className="text-2xl font-medium">Total Price : {totalPrice}</h2>
          <Link
            to="/dashboard/payment"
            className="btn bg-orange-400 hover:bg-orange-500 text-white"
          >
            Pay
          </Link>
        </div>
        {/* table */}
        <div className="">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-orange-400 rounded-xl">
                <tr>
                  <th className="text-base text-white">Item Image</th>
                  <th className="text-base text-white">Item Name</th>
                  <th className="text-base text-white">Price</th>
                  <th className="text-base text-white">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart?.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item?.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item?.name}</td>
                    <td>{item?.price}</td>
                    <th>
                      <button className="btn bg-red-500 text-white hover:bg-red-600">
                        <RiDeleteBinLine />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
