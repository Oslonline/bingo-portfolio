import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm({ closeModal }) {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("Gmail_portfolio", "template_1puw1na", form.current, {
                publicKey: "xYSscmGX_B3W6WcjC",
            })
            .then(
                () => {
                    console.log("Mail send with success !");
                },
                (error) => {
                    console.log("Mail failed to leave your computer something's wrong...", error.text);
                },
            );
        closeModal();
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <label className="select-none text-sm text-gray-700 dark:text-gray-300" htmlFor="username">
                    Full Name :
                </label>
                <input placeholder="John Doe" className="w-full rounded-lg border border-gray-500 bg-gray-50 p-2 focus:border-gray-900 focus:outline-none dark:border-transparent dark:bg-gray-700 dark:text-gray-50 dark:caret-white dark:focus:border dark:focus:border-gray-300" name="user_name" type="text" required />
            </div>
            <div className="flex flex-col gap-1">
                <label className="select-none text-sm text-gray-700 dark:text-gray-300" htmlFor="email">
                    Email :
                </label>
                <input placeholder="john.doe@mail.com" className="w-full rounded-lg border border-gray-500 bg-gray-50 p-2 focus:border-gray-900 focus:outline-none dark:border-transparent dark:bg-gray-700 dark:text-gray-50 dark:caret-white dark:focus:border dark:focus:border-gray-300" name="user_email" type="email" required />
            </div>
            <div className="flex flex-col gap-1">
                <label className="select-none text-sm text-gray-700 dark:text-gray-300" htmlFor="message" required>
                    Message :
                </label>
                <textarea placeholder="I want to talk with you about ....." name="message" className="w-full rounded-lg border border-gray-500 bg-gray-50 p-2 focus:border-gray-900 focus:outline-none dark:border-transparent dark:bg-gray-700 dark:text-gray-50 dark:caret-white dark:focus:border dark:focus:border-gray-300" rows="7"></textarea>
            </div>
            <button type="submit" value="Send" className="rounded-lg bg-gray-900 px-4 py-2  text-gray-50 hover:bg-gray-700 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-50">
                Submit
            </button>
        </form>
    );
}

export default ContactForm;
