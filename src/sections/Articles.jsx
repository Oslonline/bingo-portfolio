import React, { useState, useEffect } from "react";
import Article from "../components/Article";
import articlesData from "../articles.json";

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(9);

  // Update articlesPerPage based on screen size
  useEffect(() => {
    const updateArticlesPerPage = () => {
      if (window.innerWidth < 768) {
        setArticlesPerPage(3);
      } else {
        setArticlesPerPage(6);
      }
    };
    updateArticlesPerPage();
    window.addEventListener("resize", updateArticlesPerPage);
    return () => window.removeEventListener("resize", updateArticlesPerPage);
  }, []);

  const totalPages = Math.ceil(articlesData.length / articlesPerPage);
  const startIdx = (currentPage - 1) * articlesPerPage;
  const currentArticles = articlesData.slice(
    startIdx,
    startIdx + articlesPerPage
  );

  return (
    <section className="flex items-center justify-center bg-gray-50 py-16 dark:bg-gray-900 md:py-20">
      <div className="flex w-5/6 flex-col items-center gap-6 md:w-5/6">
        <div className="flex flex-col items-center gap-2">
          <h3 className="w-max select-none md:text-xl lg:text-2xl rounded-md bg-white px-3 py-1 text-gray-800 dark:bg-gray-800 border-gray-300 dark:border-gray-600 border dark:text-gray-50">
            Articles
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-300">
            Explore my blog articles and discover the essence of my expertise.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
          {currentArticles.map((article, index) => (
            <Article key={startIdx + index} article={article} />
          ))}
        </div>
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-6 flex items-center gap-4">
            <button
              className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-50 disabled:opacity-50"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="text-gray-700 dark:text-gray-200">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-50 disabled:opacity-50"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Articles;
