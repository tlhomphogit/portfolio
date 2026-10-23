import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight, Send, MessageSquare } from "lucide-react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [showDirectForm, setShowDirectForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSubmitting(false);
          alert("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          setIsSubmitting(false);
          alert("Failed to send message: " + error.text);
        }
      );
  };

  return (
    <section className="cta-section" id="contact">
      <div className="cta-panel">
        <p className="section-topper">Have something in mind?</p>
        <h2>
          Let&apos;s build something <span className="shine">worth using.</span>
        </h2>
        <p>Open to discussing freelance software development opportunities.</p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a className="main-action" href="mailto:tlhomphosuper@gmail.com">
            <span>Send an email</span>
            <ArrowRight size={15} />
          </a>

          <button
            type="button"
            className="text-action cursor-pointer"
            onClick={() => setShowDirectForm(!showDirectForm)}
            aria-expanded={showDirectForm}
          >
            <MessageSquare size={15} />
            <span>{showDirectForm ? "Hide message form" : "Or message via form"}</span>
          </button>
        </div>

        {/* Unobtrusive Direct Form */}
        {showDirectForm && (
          <div className="form-card mt-6">
            <form ref={form} onSubmit={sendEmail} className="space-y-3">
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="form-input"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="form-input"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="sr-only">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  className="form-input resize-y"
                  required
                ></textarea>
              </div>

              <div className="text-right pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="pill-button cursor-pointer disabled:opacity-50"
                >
                  <Send size={13} />
                  <span>{isSubmitting ? "Sending..." : "Submit message"}</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
