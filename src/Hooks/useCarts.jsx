import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

function useCarts() {
  const { user } = useContext(AuthContext);

  const { refetch, data: cart } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts/${user?.email}`);
      return res.data;
    },
  });

  return [cart, refetch];
}

export default useCarts;
