import { FiExternalLink } from "react-icons/fi";

function Article({ article }) {
  const { title, content, imageURL, link } = article;

  return (
    <a
      href={link}
      className="w-full rounded-lg group relative hover:shadow-lg duration-75 dark:shadow-gray-800 focus:shadow-lg outline-none"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className="relative flex min-h-[200px] flex-col justify-end gap-2 rounded-lg bg-cover bg-center p-4"
        style={{ backgroundImage: `url(${imageURL})` }}
      >
        <div className="absolute inset-0 rounded-lg bg-white/60 dark:bg-black/60" />
        <div className="relative z-10 flex flex-col gap-2 h-full">
          <h3 className="text-lg font-bold dark:text-gray-200 text-gray-800 flex items-start justify-between gap-2">
            {title}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <FiExternalLink className="inline-block align-text-bottom dark:text-gray-200" />
            </span>
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {content}
          </p>
        </div>
      </div>
      {/* <span className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gray-900 dark:group-hover:border-gray-400 pointer-events-none transition-colors" /> */}
    </a>
  );
}

export default Article;
