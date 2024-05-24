import { FaEdit } from "react-icons/fa";
import SectionHeader from "../../../Components/SectionHeader";
import useAllMenu from "../../../Hooks/useAllMenu";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

function ManageItems() {
  let count = 1;
  const axiosSecure = useAxiosSecure();
  const [items, refetch] = useAllMenu();
  const handleMenuDelete = (item) => {
    console.log(item);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item?._id}`);
        console.log(res.data);
        if (res.data.deletedCount === 1) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };
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
                    <Link
                      to={`/dashboard/updateItem/${item?._id}`}
                      className="btn btn-ghost bg-orange-400 text-white rounded-full hover:bg-orange-500"
                    >
                      <FaEdit className="text-xl" />
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handleMenuDelete(item)}
                      className="btn rounded-full "
                    >
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
