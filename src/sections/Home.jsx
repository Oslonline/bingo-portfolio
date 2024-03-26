import MainImg from "../assets/images/main-img.jpg";
import { Github, Medium, Linkedin, X, Location, Availability } from "../components/icons";

const Home = () => {
    return (
        <section className="flex w-full flex-col items-center gap-20 py-10 md:flex-row-reverse md:py-24">
            <div className="flex items-center justify-center md:w-1/3">
                <div className="w-3/6 md:h-2/5 md:w-3/5">
                    <img id="main-img" src={MainImg} alt="" className="hidden border-8 border-transparent shadow-mlight dark:shadow-mdark md:block" />
                    <img id="main-img" src={MainImg} alt="" className="border-8 border-transparent shadow-mlightphone dark:shadow-mdarkphone md:hidden" />
                </div>
            </div>
            <div className="flex flex-col gap-12 px-10 md:w-2/3 md:pl-24">
                <div className="flex flex-col gap-5">
                    <h1 className="text-4xl font-bold dark:text-gray-50 md:text-6xl">Hi, I'm Corentin</h1>
                    <p className="text-sm text-gray-600 dark:text-gray-300 md:text-base">
                        I am a 22-year-old Junior DevOps at Radio France, currently pursuing a master's degree in Cybersecurity & Cloud Computing. <br />
                        With 7 years of experience in computer science, my passion lies in cybersecurity and pentesting.
                    </p>
                </div>
                <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-200">
                    <div className="flex gap-2">
                        <Location />
                        <p>Paris, France</p>
                    </div>
                    <div className="flex gap-2">
                        <Availability />
                        <p>
                            Currently working at <span className="font-semibold dark:text-gray-100">Radio France</span>
                        </p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <a href="https://github.com/0xBingo" target="_blank">
                        <Github />
                    </a>
                    <a href="https://www.linkedin.com/in/corentin-guyon/" target="_blank">
                        <Linkedin />
                    </a>
                    <a href="https://twitter.com/cathreat" target="_blank">
                        <X />
                    </a>
                    <a href="https://medium.com/@bingops" target="_blank">
                        <Medium />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;
