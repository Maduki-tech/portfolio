import type { NextPage } from "next";
import { ArrowCircleDownIcon } from "@heroicons/react/outline";
import { Aboutme } from "../components/Aboutme";
import { GetInTouch } from "../components/GetInTouch";
import TypeAnimation from "react-type-animation";

const Home: NextPage = () => {
  return (
    <div>
      <div className="bg-[url('../public/kal-visuals-UqLV5o9h3ZQ-unsplash.jpg')] bg-cover bg-no-repeat bg-center">
        <div className="justify-center flex flex-col w-screen text-center h-screen items-center bg-black/75">
          <TypeAnimation
            cursor={false}
            sequence={["Hello, I'm David Schlueter"]}
            wrapper="h2"
            className="text-5xl text-slate-200"
          />
          <TypeAnimation
            cursor={false}
            sequence={[2500, "I'm a Frontend Developer"]}
            wrapper="h2"
            className="text-5xl text-slate-200"
          />


          <ArrowCircleDownIcon
            className="h-16 w-16 text-primary text-center mt-24 animate-bounce 
				hover:animate-none hover:cursor-pointer hover:scale-110"
            onClick={() => alert("Hello")}
          />
        </div>
      </div>
      <Aboutme />

      <GetInTouch />
    </div>
  );
};

export default Home;
