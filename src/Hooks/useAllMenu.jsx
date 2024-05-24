import { useQuery } from "@tanstack/react-query";
import usePublic from "./usePublic";

function useAllMenu() {
  const axiosPublic = usePublic();
  const {
    data: items,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: "items",
    queryFn: async () => {
      const { data } = await axiosPublic.get("/menu");
      return data;
    },
  });
  return [items, refetch, isLoading];
}

export default useAllMenu;
