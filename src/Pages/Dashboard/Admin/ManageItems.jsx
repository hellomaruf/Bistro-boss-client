import { FaEdit } from "react-icons/fa";
import SectionHeader from "../../../Components/SectionHeader";
import useAllMenu from "../../../Hooks/useAllMenu";
import { RiDeleteBin6Line } from "react-icons/ri";

function ManageItems() {
  let count = 1;
  const [items] = useAllMenu();
  console.log(items);
  return (
    <div>
      <div className="">
        <SectionHeader title={"manage all items"} shorts={"---Hurry up---"} />
      </div>
      <div className="">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items?.map((item, index) => (
                <tr key={index}>
                  <th>{count++}</th>
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
                    <button className="btn btn-ghost bg-orange-400 text-white rounded-full hover:bg-orange-500">
                      <FaEdit className="text-xl" />
                    </button>
                  </th>
                  <th>
                    <button className="btn rounded-full ">
                      <RiDeleteBin6Line className="text-xl text-red-500" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageItems;
