import SectionHeader from "./SectionHeader";
import feature from "../assets/home/fearure.png";
import feature1 from "../assets/home/featured.jpg";
function Features() {
  return (
    <div
      style={{ backgroundImage: `url(${feature})` }}
      className="bg-cover py-10 my-10"
    >
      <div className=" max-w-6xl mx-auto ">
        <div className=" text-white">
          <SectionHeader shorts={"Check it out"} title={"FROM OUR MENU"} />
        </div>
        <div className=" flex gap-6 items-center justify-center p-10">
          <div className="">
            <img src={feature1} alt="" />
          </div>
          <div className=" space-y-3 text-white">
            <p>March 20, 2023</p>
            <h3>WHERE CAN I GET SOME?</h3>
            <p>
              But its not just about the food. Step inside, and youll discover a
              warm and inviting atmosphere that invites you to linger and savor
              every moment. Whether youre enjoying a romantic dinner for two or
              a lively gathering with friends and family, our attentive staff is
              dedicated to ensuring your dining experience is nothing short of
              extraordinary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
