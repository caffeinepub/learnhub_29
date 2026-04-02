import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { CheckCircle, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { useSubmitContactMessage } from "../hooks/useQueries";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@learnhub.com",
    desc: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "100 Innovation Drive, San Francisco, CA",
    desc: "Headquarters",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (888) 532-4600",
    desc: "Mon–Fri, 9am–6pm PST",
  },
];

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const { mutateAsync, isPending } = useSubmitContactMessage();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await mutateAsync(form);
      setSubmitted(true);
      toast.success("Message sent! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Toaster position="top-right" />

      {/* Header */}
      <section
        className="pt-28 pb-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "oklch(0.12 0.035 222)" }}
        data-ocid="contact.page"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-cyan text-sm font-semibold uppercase tracking-wider mb-3">
              Get in Touch
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-5">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have questions about our courses or platform? We'd love to hear
              from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="section-title text-2xl mb-6">Let's Talk</h2>
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-glow rounded-2xl bg-navy-card p-5 flex gap-4 items-start"
                  data-ocid={`contact.info.item.${i + 1}`}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.73 0.1 200 / 0.12)" }}
                  >
                    <info.icon className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-cyan uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    <p className="text-foreground text-sm font-medium">
                      {info.value}
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      {info.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div
                  className="card-glow rounded-2xl bg-navy-card p-10 flex flex-col items-center justify-center text-center h-full"
                  data-ocid="contact.form.success_state"
                >
                  <CheckCircle
                    className="w-16 h-16 mb-4"
                    style={{ color: "oklch(0.73 0.1 200)" }}
                  />
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. Our team will respond within 24
                    hours.
                  </p>
                  <button
                    type="button"
                    className="btn-orange px-6 py-2.5 text-sm"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div
                  className="card-glow rounded-2xl bg-navy-card p-8"
                  data-ocid="contact.form.panel"
                >
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                    Send a Message
                  </h3>
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                  >
                    {/* Name */}
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground mb-1.5 block"
                      >
                        Full Name
                      </Label>
                      <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={`input-dark w-full px-4 py-3 text-sm ${
                          errors.name ? "border-destructive" : ""
                        }`}
                        data-ocid="contact.name.input"
                      />
                      {errors.name && (
                        <p
                          className="text-xs mt-1.5"
                          style={{ color: "oklch(0.704 0.191 22.216)" }}
                          data-ocid="contact.name.error_state"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground mb-1.5 block"
                      >
                        Email Address
                      </Label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={`input-dark w-full px-4 py-3 text-sm ${
                          errors.email ? "border-destructive" : ""
                        }`}
                        data-ocid="contact.email.input"
                      />
                      {errors.email && (
                        <p
                          className="text-xs mt-1.5"
                          style={{ color: "oklch(0.704 0.191 22.216)" }}
                          data-ocid="contact.email.error_state"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium text-foreground mb-1.5 block"
                      >
                        Message
                      </Label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us how we can help you..."
                        value={form.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        className={`input-dark w-full px-4 py-3 text-sm resize-none ${
                          errors.message ? "border-destructive" : ""
                        }`}
                        data-ocid="contact.message.textarea"
                      />
                      {errors.message && (
                        <p
                          className="text-xs mt-1.5"
                          style={{ color: "oklch(0.704 0.191 22.216)" }}
                          data-ocid="contact.message.error_state"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isPending}
                      className="btn-orange w-full py-3.5 text-sm font-semibold flex items-center justify-center gap-2"
                      data-ocid="contact.form.submit_button"
                    >
                      {isPending ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
