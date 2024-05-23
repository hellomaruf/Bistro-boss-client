import { CgMenuGridR } from "react-icons/cg";
import { FaBook, FaCalendar, FaHome, FaShoppingBag, FaUsers } from "react-icons/fa";
import { GiVibratingShield } from "react-icons/gi";
import { IoBookmarksOutline } from "react-icons/io5";
import { LuHome } from "react-icons/lu";
import { MdAddToPhotos, MdEmail } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { VscPreview } from "react-icons/vsc";
import { Link, NavLink, Outlet } from "react-router-dom";
function Dashboard() {
  const isAdmin = true;
  return (
    <div className="flex">
      {/* Dashboard side bar */}
      <div className="w-64 bg-orange-400 h-screen">
        <div className="flex flex-col items-center pt-5 pb-3">
          <div className="">
            <h2 className="text-3xl uppercase text-white font-bold">
              Bistro Boss
            </h2>
            <h4 className="tracking-[11px] text-gray-100 text-lg">
              Restaurant
            </h4>
          </div>
        </div>
        <ul className="menu mb-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-white bg-orange-500" : "text-gray-900"
                  }
                  to="/dashboard/home"
                >
                  {" "}
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-white bg-orange-500" : "text-gray-900"
                  }
                  to="/dashboard/addItems"
                >
                  {" "}
                  <MdAddToPhotos/> 
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-white bg-orange-500" : "text-gray-900"
                  }
                  to="/dashboard/ManageItems"
                >
                  {" "}
                  <CgMenuGridR />
                 Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-white bg-orange-500" : "text-gray-900"
                  }
                  to="/dashboard/ManageItems"
                >
                  {" "}
                  <FaBook />
                 Manage Booking
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-white bg-orange-500" : "text-gray-900"
                  }
                  to="/dashboard/allUsers"
                >
                  {" "}
                  <FaUsers />
                 All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-white bg-orange-500" : "text-gray-900"
                  }
                  to="/dashboard/home"
                >
                  {" "}
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-white bg-orange-500" : "text-gray-900"
                  }
                  to="/dashboard/reservation"
                >
                  <FaCalendar />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-white bg-orange-500" : "text-gray-900"
                  }
                  to="/dashboard/review"
                >
                  <VscPreview />
                  Review
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-white bg-orange-500" : "text-gray-900"
                  }
                  to="/dashboard/cart"
                >
                  <GiVibratingShield />
                  My Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-white bg-orange-500" : "text-gray-900"
                  }
                  to="/dashboard/booking"
                >
                  <IoBookmarksOutline />
                  My Bookings
                </NavLink>
              </li>
            </>
          )}
        </ul>
        <hr />
        <ul className="menu">
          <li>
            <Link to="/">
              <LuHome />
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu">
              <TiThMenu />
              Menu
            </Link>
          </li>
          <li>
            <Link to="/shop/salad">
              <FaShoppingBag />
              Shop
            </Link>
          </li>
          <li>
            <Link to="/">
              <MdEmail />
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* Dashboard content */}
      <div className="flex-1 pl-8 pt-0">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
