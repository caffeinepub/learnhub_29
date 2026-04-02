import { Link } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { SiGithub, SiLinkedin, SiX, SiYoutube } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );

  return (
    <footer
      className="border-t border-border"
      style={{ background: "oklch(0.12 0.035 222)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.68 0.18 42), oklch(0.73 0.1 200))",
                }}
              >
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading text-xl font-bold text-foreground">
                LearnHub
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              Empowering learners worldwide with world-class online education
              and expert-led courses.
            </p>
            {/* Newsletter */}
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-dark flex-1 px-3.5 py-2 text-sm rounded-r-none"
                data-ocid="footer.email.input"
              />
              <button
                type="button"
                className="btn-orange px-4 py-2 text-sm rounded-l-none rounded-full"
                data-ocid="footer.subscribe.button"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { to: "/", label: "Home" },
                { to: "/courses", label: "Courses" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground text-sm hover:text-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {[
                "Blog",
                "Documentation",
                "Community Forum",
                "Support Center",
                "Career Paths",
              ].map((item) => (
                <li key={item}>
                  <span className="text-muted-foreground text-sm hover:text-cyan transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3 flex-wrap">
              {[
                { Icon: SiGithub, label: "GitHub" },
                { Icon: SiX, label: "X (Twitter)" },
                { Icon: SiLinkedin, label: "LinkedIn" },
                { Icon: SiYoutube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-cyan transition-all hover:scale-110"
                  style={{ background: "oklch(0.20 0.04 222)" }}
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
            <p className="text-muted-foreground text-xs mt-5 leading-relaxed">
              Join our community of 50,000+ learners and transform your career.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-sm">
            © {year}. Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan hover:underline"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <span
                key={item}
                className="text-muted-foreground text-sm hover:text-foreground cursor-pointer transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
