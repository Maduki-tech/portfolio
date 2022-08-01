import { NextPage } from "next";
import Image from "next/image";
import { Tech } from "./Tech";

export const Aboutme: NextPage = (props: {}) => {
  return (
    <div className="w-screen h-screen bg-black">
      <h1 className="text-center text-5xl pt-10 text">
        About <span className="text-secondary">Me</span>
      </h1>

      <div className="pl-14 text-xl grid pt-10 grid-cols-2 items-center">
        <div>
          <p className="text-slate-200">
            Hello my Name is <span className="text-primary">David</span>
          </p>
          <p className="text-slate-200">
            I'm a{" "}
            <span className="text-secondary">Freelancer/Webdeveloper</span>{" "}
            based in Germany.
          </p>
          <p className="text-slate-200">
            I work with NextJS and TailwindCSS. At work i use SAPUI5.{" "}
          </p>
          <br />
          <p className="text-slate-200">
            I started my journey in <span>2019</span> and did an apprenticeship
            in this year and Finished it in 2022
          </p>
          <p className="text-slate-200">
            In this year I also stated my Freelancing carrer. Since then i got
            over 10+ Customers
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src={"/../public/Me.jpeg"}
            width="300"
            height="300"
            className="rounded-full "
          />
        </div>
      </div>

      <h1 className="text-3xl text-center pt-10"><span className="text-primary">Technologies</span> I Recently worked with:</h1>

			<div className="pl-14 grid grid-cols-4 gap-4 pt-10">

				<Tech framework={'NextJS'}/>
				<Tech framework={'ReactJS'}/>
				<Tech framework={'Prisma'}/>
				<Tech framework={'PostgreSQL'}/>
				<Tech framework={'NextAuth'}/>
				<Tech framework={'Rust'}/>
				<Tech framework={'GoLang'}/>
				<Tech framework={'TailwindCSS'}/>
			</div>
    </div>
  );
};
