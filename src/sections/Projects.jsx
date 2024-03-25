import React from "react";
import Project from "../components/Project";
import projectsData from "../projects.json";

const Projects = () => {
    return (
        <section className="flex items-center justify-center bg-white py-16 dark:bg-gray-950 md:py-20">
            <div className="flex w-5/6 flex-col items-center gap-6">
                <div className="flex flex-col items-center gap-2 ">
                    <h3 className="w-max select-none rounded-full bg-gray-200 px-3 py-1 text-gray-800 dark:bg-gray-700 dark:text-gray-50">Projects</h3>
                    <p className="text-gray-600 dark:text-gray-300">An overview of my projects</p>
                </div>
                <div className="flex w-full flex-col gap-3">
                    {projectsData.map((project, index) => (
                        <Project key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
