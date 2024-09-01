'use client';

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation check
        if (!name || !email || !message) {
            setError("All fields are required.");
            return;
        }

        setError(""); // Clear any previous error

        await fetch("api/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, message }),
        });

        // Reset form fields
        setName("");
        setEmail("");
        setMessage("");

        // Show confirmation message
        setIsSubmitted(true);
        
        setTimeout(() => {
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
            {/* input */}
            <div className="relative flex items-center">
                <Input
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <User className="absolute right-6" size={20} />
            </div>
            {/* email */}
            <div className="relative flex items-center">
                <Input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <MailIcon className="absolute right-6" size={20} />
            </div>
            {/* text area */}
            <div className="relative flex items-center">
                <Textarea
                    id="message"
                    placeholder="Type your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <MessageSquare className="absolute top-4 right-6" size={20} />
            </div>
            <Button
                type="submit"
                className="flex items-center gap-x-1 max-w-[200px]"
            >
                Let's Communicate
                <ArrowRightIcon size={20} />
            </Button>
            {isSubmitted && <p className="text-green-500 font-bold">Successfully Sent!</p>}
            {error && <p className="text-red-500 font-bold">{error}</p>}
        </form>
    );
};

export default Form;