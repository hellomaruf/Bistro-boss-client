import { NavLink } from "react-router-dom";

function Nav() {
  const link = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-200 pr-5 font-medium"
            : "text-gray-100 pr-5 font-medium"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-200 pr-5 font-medium"
            : "text-gray-100 pr-5 font-medium"
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/menu"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-200 pr-5 font-medium"
            : "text-gray-100 pr-5 font-medium"
        }
      >
        Our Menu
      </NavLink>
      <NavLink
        to="/shop/salad"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-200 pr-5 font-medium"
            : "text-gray-100 pr-5 font-medium"
        }
      >
        Shop Now
      </NavLink>
      <NavLink
        to="/contactUs"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-200 pr-5 font-medium"
            : "text-gray-100 pr-5 font-medium"
        }
      >
        Contact Us
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-200 pr-5 font-medium"
            : "text-gray-100 pr-5 font-medium"
        }
      >
        Login
      </NavLink>
    </>
  );

  return (
    <div>
      <div className=" bg-gray-900 bg-opacity-25 backdrop-blur-md fixed z-10 w-full text-gray-100">
        <div className="navbar max-w-7xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {link}
              </ul>
            </div>
            <div className="">
              <h2 className="text-3xl uppercase font-bold">Bistro Boss</h2>
              <h4 className="tracking-[11px] text-lg">Restaurant</h4>
            </div>
          </div>

          <div className="navbar-end">
            <ul className="menu menu-horizontal px-1">{link}</ul>
            <a className="btn">Button</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
