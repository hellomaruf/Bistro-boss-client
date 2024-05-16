import img from "../assets/home/chef-service.jpg";
function About() {
  return (
    <div className="max-w-7xl mx-auto my-20 mt-32">
      <div className=" relative">
        <img src={img} alt="" />
        <div className=" bg-white absolute  top-14 rounded-lg text-center m-10 p-16">
          <h1 className="text-4xl font-medium pb-4">Bistro Boss</h1>
          <p>
            At [Bistro Boss], we believe in the power of food to bring
            people together. Our menu is a celebration of local ingredients,
            expertly crafted into dishes that tantalize the taste buds and
            ignite the senses. From mouthwatering appetizers to decadent
            desserts, each plate is a masterpiece, prepared with care and
            creativity by our talented chefs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
