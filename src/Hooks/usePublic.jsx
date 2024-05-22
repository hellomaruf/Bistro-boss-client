import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "http://localhost:5000",
});
function usePublic() {
  return axiosPublic;
}

export default usePublic;
