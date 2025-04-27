import Project from "../components/Project";
import projectsData from "../projects.json";

const Projects = () => {
  return (
    <section className="relative py-16 bg-white dark:bg-gray-950 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="flex flex-col items-center gap-2">
            <h3 className="w-max select-none md:text-xl lg:text-2xl rounded-md bg-gray-100 px-3 py-1 text-gray-800 dark:bg-gray-900 border-gray-200 dark:border-gray-700 border dark:text-gray-50">
              Projects
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              An overview of my projects
            </p>
          </div>
        </div>
        <div className="relative space-y-8">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-200 rounded-full dark:bg-gray-700 hidden md:block" />
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`relative md:w-1/2 ${index % 2 === 0 ? "md:ml-0 md:pr-8" : "md:ml-auto md:pl-8"}`}
            >
              <Project project={project} isEven={index % 2 === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
