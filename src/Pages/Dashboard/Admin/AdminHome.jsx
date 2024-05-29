import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

function AdminHome() {
  const { user } = useContext(AuthContext);
  return (
    <div className="mt-5">
      <div className="">
        <span className="text-3xl font-semibold">
          Hello, Welcome {user?.displayName ? user?.displayName : "Back"}
        </span>
      </div>
    </div>
  );
}

export default AdminHome;
