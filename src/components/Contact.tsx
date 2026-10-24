import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight, Send, Mail } from "lucide-react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setStatusMessage(null);

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
          setStatusMessage("Message sent successfully! I will get back to you soon.");
          form.current?.reset();
        },
        (error) => {
          setIsSubmitting(false);
          setStatusMessage("Failed to send message: " + (error?.text || "Please reach out directly via email."));
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
        <p>
          Open to discussing freelance software development opportunities, contracts, and collaborations.
        </p>

        {/* Obvious, visible contact email badge */}
        <div>
          <a
            href="mailto:tlhomphosuper@gmail.com"
            className="contact-email-badge"
            aria-label="Direct email to tlhomphosuper@gmail.com"
          >
            <Mail size={15} />
            <span>tlhomphosuper@gmail.com</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a className="main-action" href="mailto:tlhomphosuper@gmail.com">
            <span>Send an email</span>
            <ArrowRight size={15} />
          </a>
        </div>

        {/* Clear, usable in-page contact form */}
        <div className="form-card mt-8">
          <h3 style={{ fontSize: "15px", marginBottom: "14px", fontWeight: 600 }}>
            Send a direct message
          </h3>

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
                placeholder="Your Message..."
                className="form-textarea resize-y"
                required
              ></textarea>
            </div>

            {statusMessage && (
              <p
                className="text-xs py-1"
                style={{
                  color: statusMessage.includes("successfully") ? "#3cc18d" : "#e06c75",
                }}
              >
                {statusMessage}
              </p>
            )}

            <div className="text-right pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="pill-button disabled:opacity-50"
              >
                <Send size={13} />
                <span>{isSubmitting ? "Sending..." : "Submit message"}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
