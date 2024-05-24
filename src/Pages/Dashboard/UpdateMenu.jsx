import { useForm } from "react-hook-form";
import SectionHeader from "../../Components/SectionHeader";
import { useLoaderData } from "react-router-dom";

function UpdateMenu() {
  const item = useLoaderData();
  console.log(item);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <SectionHeader title={"update items"} shorts={"---Queck Update---"} />
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 ">
            <div className="rounded-lg bg-gray-100 p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form
                onSubmit={handleSubmit(onSubmit)}
                action="#"
                className="space-y-4"
              >
                <div>
                  <label className=" text-xs" htmlFor="name">
                    Recipe Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    className="w-full rounded-lg  border-gray-200  p-3 text-sm"
                    placeholder="Enter Recipe Name"
                    type="text"
                    name="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="">
                    <label className=" text-xs" htmlFor="name">
                      Category
                    </label>
                    <select
                      className="w-full rounded-lg  border-gray-200  p-3 text-sm"
                      {...register("category", { required: true })}
                    >
                      <option value="salad">Salad</option>
                      <option value="pizza">Pizza</option>
                      <option value="soup">Soup</option>
                      <option value="dessert">Desert</option>
                      <option value="drinks">Drinks</option>
                    </select>
                  </div>

                  <div>
                    <label className=" text-xs" htmlFor="phone">
                      Price
                    </label>
                    <input
                      {...register("price", { required: true })}
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Enter Item Price"
                      name="price"
                      type="tel"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs" htmlFor="message">
                    Recipe Details
                  </label>

                  <textarea
                    {...register("details", { required: true })}
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Enter Recipe Details"
                    rows="8"
                    name="details"
                  ></textarea>
                </div>
                <input
                  {...register("image", { required: true })}
                  type="file"
                  className="file-input bg-gray-200 w-full max-w-xs"
                />

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-orange-400 px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Update Item
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UpdateMenu;
