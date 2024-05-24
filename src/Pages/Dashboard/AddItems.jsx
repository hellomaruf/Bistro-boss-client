import { useForm } from "react-hook-form";
import usePublic from "../../Hooks/usePublic";

function AddItems() {
  const axiosPublic = usePublic();
  const img_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
  const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (Alldata) => {
      console.log(Alldata);
    const img = Alldata?.image[0];
    const formData = new FormData();
    formData.append("image", img);
    const {data} = await axiosPublic.post(img_hosting_api, formData);
    const photo = data?.data?.url;
    console.log(photo);
    reset();
  };
  return (
    <div>
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
                    Add Item
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

export default AddItems;
