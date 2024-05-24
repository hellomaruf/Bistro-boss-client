function AddItems() {
  return (
    <div>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 ">
            <div className="rounded-lg bg-gray-100 p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4">
                <div>
                  <label className=" text-xs" htmlFor="name">
                    Recipe Name
                  </label>
                  <input
                    className="w-full rounded-lg  border-gray-200  p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs" htmlFor="email">
                      Category
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Enter Recipe Category"
                      type=""
                      name="category"
                    />
                  </div>

                  <div>
                    <label className=" text-xs" htmlFor="phone">
                      Price
                    </label>
                    <input
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
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Enter Recipe Details"
                    rows="8"
                    name="details"
                  ></textarea>
                </div>

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
