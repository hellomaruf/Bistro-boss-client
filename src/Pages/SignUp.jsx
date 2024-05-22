import { useForm } from "react-hook-form";
import loginImg from "../assets/others/authentication2.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { axiosPublic } from "../Hooks/usePublic";
function SignUp() {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((res) => {
        if (res.user) {
          alert("SignUp Successfully");
          navigate('/')
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          console.log(userInfo);
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user created successfully");
            }
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    reset({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <section className="relative flex flex-wrap lg:h-screen z-10 lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">SignUp Now!</h1>

            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            action="#"
            className="mx-auto mb-0 mt-8 max-w-md space-y-4 bg-white p-5 rounded-xl"
          >
            <div>
              <label htmlFor="email" className="sr-only">
                Name
              </label>

              <div className="relative">
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  className="w-full rounded-lg border border-gray-400 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Name"
                />
                {errors.name && (
                  <small className="text-red-500">Name field is required</small>
                )}
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
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  className="w-full rounded-lg border border-gray-400 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />
                {errors.email && (
                  <small className="text-red-500">
                    Email field is required
                  </small>
                )}
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
            {/* <div>
              <label htmlFor="email" className="sr-only">
                photo
              </label>

              <div className="relative">
                <input
                  type="text"
                  name="photo"
                  {...register("photo", { required: true })}
                  className="w-full rounded-lg border border-gray-400 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter PhotoURL"
                />
                {errors.name && (
                  <small className="text-red-500">Name field is required</small>
                )}
              </div>
            </div> */}
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  name="password"
                  {...register("password", {
                    required: true,
                    // maxLength: 10,
                    minLength: 6,
                    pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                  })}
                  type="password"
                  className="w-full rounded-lg border border-gray-400 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />
                {errors.password?.type === "required" && (
                  <small className="text-red-500">
                    Password field is required
                  </small>
                )}
                {errors.password?.type === "minLength" && (
                  <small className="text-red-500">
                    Password must be 6 charecter
                  </small>
                )}
                {errors.password?.type === "pattern" && (
                  <small className="text-red-500">
                    Password must be have uppercase lowercase and special
                    charecter
                  </small>
                )}
              </div>
            </div>

            <div className="">
              <p className="text-sm text-gray-500 py-3">
                Already have account?
                <Link
                  to="/login"
                  className="underline font-semibold text-orange-400"
                  href="#"
                >
                  Login
                </Link>
              </p>

              <button
                type="submit"
                className="inline-block rounded-lg w-full disabled:bg-orange-200 bg-orange-400 px-5 py-3 text-sm font-medium text-white"
              >
                Sign in
              </button>
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

export default SignUp;
