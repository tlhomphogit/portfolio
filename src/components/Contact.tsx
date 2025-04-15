// src/components/Contact.tsx
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Send } from 'lucide-react';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(
      () => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send message: " + error.text);
      }
    );
  };

  return (
    <section id="contact" className="text-neutral-300 px-6 py-10 rounded-2xl bg-gradient-to-r from-gray-800 to-neutral-800">
      <h2 className="text-2xl font-bold mb-4 border-b border-r rounded-md px-2 py-2">Contact</h2>
      <form ref={form} onSubmit={sendEmail} className="max-w-xl text-white mx-auto space-y-4">
        <input type="text" name="name" placeholder="Your Name" className="border-1 border-white w-full p-2 rounded" required />
        <input type="email" name="email" placeholder="Your Email" className="border-1 border-white w-full p-2 rounded" required />
        <textarea name="message" rows={5} placeholder="Your Message" className="border-1 border-white w-full p-2 rounded" required></textarea>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 inline-flex gap-2 items-center"><Send size={18}/>Send</button>
      </form>
    </section>
  );
};

export default Contact;