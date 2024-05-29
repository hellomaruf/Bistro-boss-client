import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

function UserHome() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="">
        <span className="text-3xl font-semibold">
          Hello, Welcome {user?.displayName ? user?.displayName : "Back"}
        </span>
      </div>
    </div>
  );
}

export default UserHome;
