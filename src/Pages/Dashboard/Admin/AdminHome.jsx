import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AiFillFund, AiFillSnippets } from "react-icons/ai";
import { FaBabyCarriage, FaUsers } from "react-icons/fa";

function AdminHome() {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data } = useQuery({
    queryKey: "admin-stats",
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  console.log(data?.users);
  return (
    <div className="mt-5">
      {/* Admin stats */}
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="mx-6">
            <div className="pb-6">
              <span className="text-3xl font-semibold">
                Hello, Welcome {user?.displayName ? user?.displayName : "Back"}
              </span>
            </div>
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-4">
              <div className="flex flex-col rounded-lg bg-orange-100 px-4 py-8 text-center">
                <div className=" flex items-center justify-center gap-4">
                <div className="">
                  <AiFillFund className="text-4xl" />
                </div>
                <div className="">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Revenue
                </dt>

                <dd className="text-4xl font-extrabold text-gray-700 md:text-5xl">
                  {data?.revenue}
                </dd>
               </div>
                </div>
              </div>

              <div className="flex flex-col rounded-lg bg-orange-100 px-4 py-8 text-center">
              <div className="flex items-center justify-center gap-4">
                <div className="">
                  <FaUsers className="text-4xl" />
                </div>
                <div className="">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Customers
                </dt>

                <dd className="text-4xl font-extrabold text-gray-700 md:text-5xl">
                  {data?.users}
                </dd>
               </div>
                </div>
              </div>

              <div className="flex flex-col rounded-lg bg-orange-100 px-4 py-8 text-center">
              <div className="flex items-center justify-center gap-4">
                <div className="">
                <AiFillSnippets className="text-4xl" />
                </div>
                <div className="">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Products
                </dt>

                <dd className="text-4xl font-extrabold text-gray-700 md:text-5xl">
                  {data?.menuItems}
                </dd>
               </div>
                </div>
              </div>
              <div className="flex flex-col rounded-lg bg-orange-100 px-4 py-8 text-center">
              <div className="flex items-center justify-center gap-4">
                <div className="">
                <FaBabyCarriage className="text-4xl" />
                </div>
                <div className="">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Orders
                </dt>

                <dd className="text-4xl font-extrabold text-gray-700 md:text-5xl">
                  {data?.orders}
                </dd>
               </div>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminHome;
