import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function Project({ project, isEven }) {
  const { title, content, imageURL, stacks, link } = project;

  return (
    <div
      className={`flex w-full rounded-xl bg-white shadow-md dark:bg-gray-800 flex-col`}
    >
      <img
        className={`max-h-36 md:max-h-48 xl:max-h-56 2xl:max-h-60 w-full object-cover object-center rounded-t-xl`}
        loading="lazy"
        srcSet={`${imageURL} 2x`}
        src={imageURL}
        alt="Project image (depending on the project subject)"
      />
      <div
        className={`rounded-xl bg-gray-50 p-4 dark:bg-gray-800 md:flex ${isEven ? "md:rounded-l-xl" : "md:rounded-r-xl"}`}
      >
        <div
          className={`flex flex-col justify-center gap-3 ${isEven ? "md:items-end md:text-end" : "md:items-start md:text-start"}`}
        >
          <h1 className="text-font-900 text-2xl font-semibold dark:text-gray-50">
            {title}
          </h1>
          <p className="text-sm text-gray-600 line-clamp-3 dark:text-gray-300">
            {content}
          </p>
          <div
            className={`flex flex-wrap gap-1 max-w-11/12 ${isEven ? "justify-end" : "justify-start"}`}
          >
            {stacks.map((stack, index) => (
              <span
                key={index}
                className="select-none rounded-full bg-gray-200 xl:px-4 px-2 py-0.5 xl:py-1 text-xs xl:text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-200"
              >
                {stack}
              </span>
            ))}
          </div>
          <a
            className="text-3xl hover:text-gray-800 text-gray-500 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-150"
            href={link}
            target="_blank"
            aria-label="Check my project link"
          >
            {link.includes("github.com") ? <FaGithub /> : <FiExternalLink />}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
