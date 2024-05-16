import { Parallax } from "react-parallax";

function Cover({ height, maintitle, subtitle, img }) {
  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 10 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-300}
      >
        <div className=" bg-black bg-opacity-55 text-white max-w-5xl mx-auto rounded-lg text-center m-10 mt-60 p-16">
          <h1 className="text-4xl font-medium pb-4 uppercase">{maintitle}</h1>
          <p>{subtitle}</p>
        </div>
        <div style={{ height: height }} />
      </Parallax>
      ;
    </div>
  );
}

export default Cover;
