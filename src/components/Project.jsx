import { Link } from "./icons";

function Project({ project, index }) {
    const { title, content, imageURL, stacks, link } = project;
    const isEven = index % 2 === 0;

    return (
        <div className={`flex w-full flex-col rounded-xl bg-white shadow-md dark:bg-gray-800 ${isEven ? "flex-row-reverse md:flex-row" : "flex-col md:flex-row-reverse"}`}>
            <div className={`flex min-h-full items-center justify-center rounded-t-xl bg-gray-50 p-12 dark:bg-gray-700 md:w-1/2 ${isEven ? "md:rounded-l-xl md:rounded-r-none" : "md:rounded-l-none md:rounded-r-xl"}`}>
                <img className="rounded-xl" src={imageURL} alt="" />
            </div>
            <div className={`rounded-xl bg-gray-50 p-6 dark:bg-gray-800 md:flex md:w-1/2 ${isEven ? "md:rounded-r-xl" : "md:rounded-l-xl"}`}>
                <div className={`flex flex-col justify-center gap-4 ${isEven ? "md:items-start md:text-start" : "md:items-end md:text-end"}`}>
                    <h1 className="text-font-900 text-2xl font-semibold dark:text-gray-50"> {title} </h1>
                    <p className="text-sm text-gray-600 dark:text-gray-300"> {content} </p>
                    <div className="flex flex-wrap gap-1">
                        {stacks.map((stack, index) => (
                            <span key={index} className="rounded-full bg-gray-200 px-4 py-1 text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-200">
                                {stack}
                            </span>
                        ))}
                    </div>
                    <a href={link} target="_blank">
                        <Link />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;
