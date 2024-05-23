import { useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


function Spinner() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("");

  return (
    <div className=" flex items-center justify-center  h-full">
      <button onClick={() => setLoading(!loading)}></button>
      <input value={color} onChange={(input) => setColor(input.target.value)} />

      <ClimbingBoxLoader
        color="#FB923C"
        cssOverride={{}}
        loading
        size={15}
        speedMultiplier={1}
      />
    </div>
  );
}

export default Spinner;
