import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../../Components/SectionHeader";
import useAxiosSecure from "./../../../Hooks/useAxiosSecure";
import { HiMiniUsers } from "react-icons/hi2";
import { RiDeleteBin4Line } from "react-icons/ri";
import Swal from "sweetalert2";

function AllUsers() {
  let count = 1;
  const axiosSecure = useAxiosSecure();
  const { data, refetch } = useQuery({
    queryKey: "users",
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleUsersDelete = (id) => {
    console.log(id);
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
        await axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  const handleMakeAdmin = async (user) => {
    await axiosSecure.patch(`/users/admin/${user?._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: `${user?.name} is now Admin!`,
          text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "Cool",
        });
        refetch();
      }
    });
  };
  return (
    <div>
      <div className="">
        <SectionHeader shorts={"---How many?---"} title={"MANAGE ALL USERS"} />
      </div>
      <div className="overflow-x-auto mx-6">
        <div className=" text-2xl font-semibold mb-4">
          Total Users : {data?.length}
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-orange-400 text-white text-base">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={index}>
                <th>{count++}</th>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                <td>
                  {item?.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button onClick={() => handleMakeAdmin(item)}>
                      <HiMiniUsers className="text-xl " />
                    </button>
                  )}
                </td>
                <td>
                  <button onClick={() => handleUsersDelete(item?._id)}>
                    <RiDeleteBin4Line className="text-xl text-red-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllUsers;
