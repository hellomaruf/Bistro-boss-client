import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../../Components/SectionHeader";
import useAxiosSecure from "./../../../Hooks/useAxiosSecure";
import { HiMiniUsers } from "react-icons/hi2";
import { RiDeleteBin4Line } from "react-icons/ri";

function AllUsers() {
  let count = 1;
  const axiosSecure = useAxiosSecure();
  const { data } = useQuery({
    queryKey: "users",
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  console.log(data);
  return (
    <div>
      <div className="">
        <SectionHeader shorts={"---How many?---"} title={"MANAGE ALL USERS"} />
      </div>
      <div className="overflow-x-auto mx-6">
      <div className=" text-2xl font-semibold mb-4">Total Users : {data?.length}</div>
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
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td><HiMiniUsers className="text-xl " /></td>
                <td><RiDeleteBin4Line className="text-xl text-red-500"/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllUsers;
