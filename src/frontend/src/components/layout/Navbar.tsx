import { Link, useLocation } from "@tanstack/react-router";
import { GraduationCap, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background:
          "linear-gradient(to bottom, oklch(0.13 0.04 222 / 0.95) 0%, oklch(0.13 0.04 222 / 0.85) 100%)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid oklch(0.28 0.05 222 / 0.5)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.68 0.18 42), oklch(0.73 0.1 200))",
              }}
            >
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading text-xl font-bold text-foreground group-hover:text-cyan transition-colors">
              LearnHub
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div
            className="hidden md:flex items-center gap-8"
            data-ocid="nav.panel"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
                className={`text-sm font-medium transition-colors hover:text-cyan ${
                  isActive(link.to) ? "text-cyan" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-ocid="nav.signin.button"
            >
              Sign In
            </button>
            <button
              type="button"
              className="btn-orange px-5 py-2 text-sm"
              data-ocid="nav.joinnow.button"
            >
              Join Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-ocid="nav.hamburger.button"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
            style={{ background: "oklch(0.13 0.04 222 / 0.98)" }}
            data-ocid="nav.mobile.panel"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
                  className={`py-2.5 text-sm font-medium transition-colors hover:text-cyan ${
                    isActive(link.to) ? "text-cyan" : "text-muted-foreground"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-border flex flex-col gap-2">
                <button
                  type="button"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground w-full text-left py-2"
                >
                  Sign In
                </button>
                <button
                  type="button"
                  className="btn-orange w-full py-2.5 text-sm text-center"
                >
                  Join Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
