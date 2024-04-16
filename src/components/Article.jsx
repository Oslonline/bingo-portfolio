import { Link } from "./icons";

function Article({ article }) {
    const { title, content, imageURL, link } = article;

    return (
        <div className="w-full flex-col items-center justify-around gap-8 rounded-lg bg-white p-4 shadow-md dark:bg-gray-800 md:flex md:flex-row">
            <div className="flex w-full sm:w-3/5 lg:w-1/5 items-center justify-center">
                <img className="w-full rounded-md" src={imageURL} alt="Article image (depending on the article subject)" />
            </div>
            <div className="flex w-full md:w-4/5 flex-col justify-evenly gap-4 py-5 md:py-0">
                <h1 className="w-full text-xl font-semibold text-gray-900 dark:text-gray-50">{title}</h1>
                <p className="w-full text-sm text-gray-600 dark:text-gray-300">{content}</p>
            </div>
            <div className="flex">
                <a href={link} target="_blank" aria-label="Check my article link">
                    <Link />
                </a>
            </div>
        </div>
    );
}

export default Article;
