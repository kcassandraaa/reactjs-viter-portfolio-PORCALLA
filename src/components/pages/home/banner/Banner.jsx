import React from "react";

const Banner = () => {
  return (
    <>
      <section className="bg-pink-100/50 py-32 ">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-[1.5fr_2fr] gap-24 md:gap-5 items-center justify-between md:text-start text-center">
            <div>
              <h1 className="font-bold text-gray-800 text-5xl mb-1">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-fuchsia-700 to-rose-500 text-transparent bg-clip-text">
                  Kyla Porcalla
                </span>
              </h1>
              <h2 className="text-2xl text-gray-800 mb-4 font-semibold">
                BS Computer Science Student
              </h2>
              <p className="text-justify text-gray-700 mb-6">
                I am passionate in technology, programming, and continuous
                learning. I enjoy exploring new concepts, working on hands-on
                projects, and deepening my understanding of how systems and
                software work.
              </p>

              <div className="flex gap-3 font-semibold text-white/90 justify-center md:justify-start">
                <a
                  href="#projects"
                  className="py-2 px-6 bg-fuchsia-800/90 hover:bg-fuchsia-800 rounded-full"
                >
                  See Projects
                </a>
                <a
                  href="#contact"
                  className="py-2 px-6 bg-rose-400 hover:bg-rose-500 rounded-full "
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div class="flex justify-center">
              <span class="relative flex size-80">
                <span class="absolute -left-4 -top-4 animate-pulse -z-50 size-[22rem]  rounded-full bg-rose-600/70 "></span>
                <img
                  src="./images/Porcalla.webp"
                  alt=""
                  className="size-80 object-cover object-center rounded-full"
                />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
