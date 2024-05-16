import About from "../Components/About";
import Features from "../Components/Features";
import Hero from "../Components/Hero";
import OrderOnline from "../Components/OrderOnline";
import PopularMenu from "../Components/PopularMenu";
import Testimonial from "../Components/Testimonial";
// import SectionHeader from "../Components/SectionHeader";

function Home() {
  return (
    <div>
      <Hero />
      <OrderOnline/>
      <About />
      <PopularMenu />
      <Features />
      <Testimonial/>
    </div>
  );
}

export default Home;
