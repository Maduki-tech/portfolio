import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <div className="justify-center flex flex-col w-screen text-center h-screen ">
                <h1 className="text-5xl">
                    Hello, I'm{" "}
                    <span className="text-[#5FDCFE]">David Schlueter</span>
                </h1>
                <h1 className="text-5xl">Im a Frontend Developer</h1>

            <div>
                <button className="mt-20 border-[#5FDCFE] border-2 py-2 px-4 rounded-xl text-slate-200">
                    Get to know me
                </button>
            </div>
        </div>
    );
};

export default Home;
