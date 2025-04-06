import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm({ closeModal, updateSuccessMessage }) {
    const form = useRef();
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateAndSendEmail = () => {
        const formData = new FormData(form.current);
        const userName = formData.get("user_name");
        const userEmail = formData.get("user_email");
        const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const message = formData.get("message");

        if (!userName || !userEmail || !message) {
            setErrorMessage("Please fill in all fields.");
            return;
        }

        if (message.length < 20) {
            setErrorMessage("Message must be at least 20 characters long.");
            return;
        }

        if (!emailPattern.test(userEmail)) {
            setErrorMessage("Please enter a valid email address.");
            return;
        }

        setErrorMessage("");
        setIsSubmitting(true);

        emailjs
            .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log("Mail sent with success !");
                    updateSuccessMessage("Message sent with success !");
                    setTimeout(() => {
                        setIsSubmitting(false);
                        closeModal();
                    }, 1000);
                },
                (error) => {
                    console.log("Mail failed to leave your computer. Something's wrong...", error.text);
                    setErrorMessage("Failed to send email. Please try again later.");
                    setIsSubmitting(false);
                },
            );
    };

    return (
        <form ref={form} onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
            {errorMessage && <div className="w-fit rounded-lg bg-red-200 px-2 py-1 text-red-950">{errorMessage}</div>}
            <div className="flex flex-col gap-1">
                <label className="select-none text-sm text-gray-700 dark:text-gray-300" htmlFor="username">
                    Full Name :
                </label>
                <input placeholder="John Doe" className="w-full rounded-lg border border-gray-500 bg-gray-50 p-2 focus:border-gray-900 focus:outline-hidden dark:border-transparent dark:bg-gray-700 dark:text-gray-50 dark:caret-white dark:focus:border dark:focus:border-gray-300" name="user_name" type="text" required />
            </div>
            <div className="flex flex-col gap-1">
                <label className="select-none text-sm text-gray-700 dark:text-gray-300" htmlFor="email">
                    Email :
                </label>
                <input placeholder="john.doe@mail.com" className="w-full rounded-lg border border-gray-500 bg-gray-50 p-2 focus:border-gray-900 focus:outline-hidden dark:border-transparent dark:bg-gray-700 dark:text-gray-50 dark:caret-white dark:focus:border dark:focus:border-gray-300" name="user_email" type="email" required />
            </div>
            <div className="flex flex-col gap-1">
                <label className="select-none text-sm text-gray-700 dark:text-gray-300" htmlFor="message" required>
                    Message :
                </label>
                <textarea placeholder="I want to talk with you about ....." name="message" className="w-full rounded-lg border border-gray-500 bg-gray-50 p-2 focus:border-gray-900 focus:outline-hidden dark:border-transparent dark:bg-gray-700 dark:text-gray-50 dark:caret-white dark:focus:border dark:focus:border-gray-300" rows="7"></textarea>
            </div>
            <button aria-label="Contact form validating button" type="button" onClick={validateAndSendEmail} className="flex items-center justify-center gap-3 rounded-lg bg-gray-900 px-4 py-2 text-gray-50 hover:bg-gray-700 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-50">
                {isSubmitting ? (
                    <>
                        <svg className="animate-spin" width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                className="fill-gray-50 dark:fill-gray-950 dark:hover:fill-gray-50"
                                d="M12 21C10.5316 20.9987 9.08574 20.6382 7.78865 19.9498C6.49156 19.2614 5.38261 18.2661 4.55853 17.0507C3.73446 15.8353 3.22029 14.4368 3.06088 12.977C2.90147 11.5172 3.10167 10.0407 3.644 8.67604C4.18634 7.31142 5.05434 6.10024 6.17229 5.14813C7.29024 4.19603 8.62417 3.53194 10.0577 3.21378C11.4913 2.89563 12.9809 2.93307 14.3967 3.32286C15.8124 3.71264 17.1113 4.44292 18.18 5.45C18.3205 5.59062 18.3993 5.78125 18.3993 5.98C18.3993 6.17875 18.3205 6.36937 18.18 6.51C18.1111 6.58075 18.0286 6.63699 17.9376 6.67539C17.8466 6.71378 17.7488 6.73357 17.65 6.73357C17.5512 6.73357 17.4534 6.71378 17.3624 6.67539C17.2714 6.63699 17.189 6.58075 17.12 6.51C15.8591 5.33065 14.2303 4.62177 12.508 4.5027C10.7856 4.38362 9.07478 4.86163 7.66357 5.85624C6.25237 6.85085 5.22695 8.30132 4.75995 9.96345C4.29296 11.6256 4.41292 13.3979 5.09962 14.9819C5.78633 16.5659 6.99785 17.865 8.53021 18.6604C10.0626 19.4558 11.8222 19.6989 13.5128 19.3488C15.2034 18.9987 16.7218 18.0768 17.8123 16.7383C18.9028 15.3998 19.4988 13.7265 19.5 12C19.5 11.8011 19.579 11.6103 19.7197 11.4697C19.8603 11.329 20.0511 11.25 20.25 11.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21Z"
                            />
                        </svg>
                        Sending...
                    </>
                ) : (
                    "Send"
                )}
            </button>
        </form>
    );
}

export default ContactForm;
