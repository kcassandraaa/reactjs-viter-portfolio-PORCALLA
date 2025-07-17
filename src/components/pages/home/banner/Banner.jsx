import React from "react";

const Banner = () => {
  // Add a custom class for staggered bounce animation
  // We'll use inline style to set animationDelay for each button

  return (
    <>
      <section className="bg-gray-100 py-24 ">
        <div className="container mx-auto px-32">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-20 items-center justify-between md:text-start text-center">
            <div>
              <h1 className=" text-gray-800 text-7xl font-semibold">
                MEET
              </h1>
              <h2 className="text-gray-800 text-7xl font-semibold mb-1"> KYLA PORCALLA</h2>
              <h2 className="text-2xl text-gray-700 mb-7 font-semibold">
                BS Computer Science Student
              </h2>
              <p className="text-justify text-gray-600 mb-8">
                I am passionate in technology, programming, and continuous
                learning. I enjoy exploring new concepts, working on hands-on
                projects, and deepening my understanding of how systems and
                software work.
              </p>

              <div className="flex gap-3 font-semibold text-white/90 justify-center md:justify-start">
                <a
                  href="#projects"
                  className="py-2 px-6 bg-rose-300 hover:bg-rose-400 rounded-full animate-bounce"
                >
                  See Projects
                </a>
                <a
                  href="#contact"
                  className="py-2 px-6 bg-rose-300 hover:bg-rose-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <span className="relative flex items-center justify-center w-[20rem] h-[20rem] md:w-[35rem] md:h-[35rem]">
                <span className="absolute inset-0 animate-pulse rounded-full bg-rose-400 z-0"></span>
                <img
                  src="./images/Porcalla.png"
                  alt=""
                  className="object-cover z-10 w-full h-full rounded-full"
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
