import Hero from "../Components/Hero";
import SectionHeader from "../Components/SectionHeader";

function Home() {
  return (
    <div>
      <Hero />
      <SectionHeader
        time={"--From 11:00am to 10:00pm--"}
        title={"oder online"}
      />
    </div>
  );
}

export default Home;
