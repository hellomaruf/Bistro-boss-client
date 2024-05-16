import About from "../Components/About";
import Hero from "../Components/Hero";
import OrderOnline from "../Components/OrderOnline";
import PopularMenu from "../Components/PopularMenu";
// import SectionHeader from "../Components/SectionHeader";

function Home() {
  return (
    <div>
      <Hero />
      <OrderOnline/>
      <About />
      <PopularMenu/>
    </div>
  );
}

export default Home;
