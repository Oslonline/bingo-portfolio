import React from "react";
import Article from "../components/Article";
import articlesData from "../articles.json";

const Articles = () => {
    return (
        <section className="flex items-center justify-center bg-gray-50 py-16 dark:bg-gray-900 md:py-20">
            <div className="flex w-5/6 flex-col items-center gap-6 md:w-5/6">
                <div className="flex flex-col items-center gap-2">
                    <h3 className="w-max select-none rounded-full bg-gray-200 px-3 py-1 text-gray-800 dark:bg-gray-700 dark:text-gray-50">Articles</h3>
                    <p className="text-center text-gray-600 dark:text-gray-300">Explore my portfolio and discover the essence of my expertise.</p>
                </div>
                <div className="flex w-full flex-col gap-5 sm:w-10/12">
                    {articlesData.map((article, index) => (
                        <Article key={index} article={article} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Articles;
