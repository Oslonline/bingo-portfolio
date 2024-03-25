import { Github, Medium, Linkedin, X, Thm, Htb } from "../components/icons";

function Footer() {
    return (
        <footer className="flex flex-col px-4 items-center gap-6 bg-white py-20 dark:bg-gray-950">
            <h3 className="w-max select-none rounded-full bg-gray-200 px-3 py-1 text-gray-800 dark:bg-gray-700 dark:text-gray-50">Contact</h3>
            <div className="flex flex-col gap-3">
                <p className="text-sm text-center text-gray-600 dark:text-gray-300">Feel free to reach out to me if you need help, have a query, or simply want to connect.</p>
                <div className="flex gap-3 justify-center">
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
            <div className="flex flex-col gap-3">
                <p className="text-sm text-center text-gray-600 dark:text-gray-300">You can also check my HackTheBox & TryHackMe profiles.</p>
                <div className="flex gap-3 justify-center">
                    <a href="https://tryhackme.com/p/BingOps" target="_blank">
                        <Thm />
                    </a>
                    <a href="https://app.hackthebox.com/users/189144" target="_blank">
                        <Htb />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
