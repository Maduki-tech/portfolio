import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

export const GetInTouch = (props: {}) => {
  return (
    <div className="bg-[url('../public/bgImage.jpeg')] bg-cover bg-no-repeat">
      <div className="bg-black/75 flex flex-col justify-center items-center w-screen h-screen">
        <h1 className="text-5xl text-center underline decoration-secondary underline-offset-8">
          Get in Touch
        </h1>

        <p className="text-slate-200 text-center text-xl w-1/2 pt-20">
          You can Contact me any time. If you are Looking for some Freelance
          work or just want to Chat about new Technologie. My Socials are always
          open.
        </p>

        <div className="flex text-slate-200 gap-12 pt-10 pb-20">
          <AiOutlineGithub size={100} onClick={() => alert("hello")} />
          <AiOutlineLinkedin size={100} />
          <AiOutlineTwitter size={100} />
        </div>
      </div>
    </div>
  );
};
