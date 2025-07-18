import React from 'react'
import CardProject from '../../../partials/CardProject';

const Projects = () => {
  return (
    <>
      <section id="projects" className="pt-28 pb-36">
        <div className="container mx-auto px-4 md:px-10">
          <div>
            <h2 className="font-bold text-gray-800 text-5xl text-center mb-16">
              MY PROJECTS
            </h2>

            <div className="flex flex-wrap justify-center gap-10 mb-20 ">
              <CardProject src={"./images/myapp.png"} />
              <CardProject src={"./images/bookhaven.png"} />
              <CardProject src={"./images/bubblebliss.png"} />
              <CardProject src={"./images/geneinsight.png"} />
            </div>

            <a href="https://github.com/kcassandraaa" target="_blank" className="bg-rose-400/80 py-3  px-5 rounded-full hover:bg-rose-400  hover:text-white transition text-gray-700 flex animate-bounce w-fit place-self-center">View More...</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects
