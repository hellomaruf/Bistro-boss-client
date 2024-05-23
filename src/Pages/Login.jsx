import loginImg from "../assets/others/authentication2.png";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import usePublic, { axiosPublic } from "./../Hooks/usePublic";
import toast from "react-hot-toast";
function Login() {
  const { loginUser, googleSignIn } = useContext(AuthContext);
  const axiosPublic = usePublic();
  // const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        if (res.user) {
          toast.success("Login Successfully");
          navigate(from);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleCaptcha = (e) => {
    const value = e.target.value;
    if (validateCaptcha(value)) {
      // setDisabled(false);
    } else {
      // setDisabled(true);
    }
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        toast.success("Login Successfully");

        const userInfo = {
          name: res.user.displayName,
          email: res.user.email,
        };
        console.log(userInfo);
        axiosPublic
          .post("/users", userInfo)
          .then((res) => console.log(res.data));
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <section className="relative flex flex-wrap lg:h-screen z-10 lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Login Now!</h1>

            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>

          <form
            onSubmit={handleLogin}
            action="#"
            className="mx-auto mb-0 mt-8 max-w-md space-y-4 bg-white p-5 rounded-xl"
          >
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-lg border border-gray-400 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  name="password"
                  type="password"
                  className="w-full rounded-lg border border-gray-400 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <div className="relative">
                <LoadCanvasTemplate />
                <input
                  type="text"
                  onBlur={handleCaptcha}
                  name="captcha"
                  className="w-full rounded-lg border border-gray-400 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Type this captcha avobe"
                />
              </div>
            </div>

            <div className="">
              <p className="text-sm text-gray-500 py-3">
                No account?
                <Link
                  to="/signUp"
                  className="underline font-semibold text-orange-400"
                  href="#"
                >
                  Sign up
                </Link>
              </p>

              {/* todo disable */}
              <button
                disabled={false}
                type="submit"
                className="inline-block rounded-lg w-full disabled:bg-orange-200 bg-orange-400 px-5 py-3 text-sm font-medium text-white"
              >
                Sign in
              </button>
            </div>
            <div
              onClick={handleGoogleSignIn}
              className="btn bg-gray-500 w-full hover:bg-gray-600 text-white"
            >
              <FaGoogle /> Google
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img alt="" src={loginImg} className="absolute  h-full w-full " />
        </div>
      </section>
    </div>
  );
}

export default Login;
