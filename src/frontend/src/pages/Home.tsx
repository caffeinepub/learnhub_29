import { Link } from "@tanstack/react-router";
import {
  Award,
  BarChart3,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Globe,
  Quote,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { useGetAllCourses } from "../hooks/useQueries";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Frontend Developer at Google",
    text: "LearnHub completely transformed my career. The Web Development course gave me the skills I needed to land my dream job in just 6 months.",
    avatar: "SM",
  },
  {
    id: 2,
    name: "James Okonkwo",
    role: "Data Scientist at Spotify",
    text: "The Data Science curriculum is incredibly well-structured. I went from zero knowledge to building production ML models. Worth every penny.",
    avatar: "JO",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Product Designer at Airbnb",
    text: "The UX Design course exceeded all my expectations. Real-world projects and mentorship from industry experts made all the difference.",
    avatar: "PS",
  },
  {
    id: 4,
    name: "Carlos Rivera",
    role: "ML Engineer at Tesla",
    text: "I tried many platforms but LearnHub is in a league of its own. The content quality and community support are absolutely phenomenal.",
    avatar: "CR",
  },
];

const benefits = [
  {
    icon: BookOpen,
    title: "500+ Expert Courses",
    desc: "Comprehensive curriculum designed by industry professionals with real-world applications.",
  },
  {
    icon: Users,
    title: "50K+ Active Students",
    desc: "Join a thriving global community of learners and collaborate on real projects.",
  },
  {
    icon: Award,
    title: "Certified Programs",
    desc: "Earn recognized certificates that employers trust and value across the industry.",
  },
  {
    icon: Zap,
    title: "Learn at Your Pace",
    desc: "Flexible scheduling with lifetime access — learn whenever and wherever you want.",
  },
  {
    icon: Globe,
    title: "Global Instructors",
    desc: "Learn from 100+ top-tier instructors from the world's leading tech companies.",
  },
  {
    icon: BarChart3,
    title: "Track Progress",
    desc: "Advanced analytics to monitor your learning journey and achieve your goals faster.",
  },
];

const STATIC_COURSES = [
  {
    title: "Complete Web Development Bootcamp",
    instructor: "Alex Thompson",
    description:
      "Master HTML, CSS, JavaScript, React, and Node.js. Build real-world projects and launch your dev career.",
    category: "Development",
    rating: BigInt(48),
    price: BigInt(9999),
  },
  {
    title: "Data Science with Python",
    instructor: "Dr. Lisa Chen",
    description:
      "From pandas to deep learning — a comprehensive journey through the entire data science stack.",
    category: "Data Science",
    rating: BigInt(47),
    price: BigInt(12999),
  },
  {
    title: "UI/UX Design Mastery",
    instructor: "Marcus Reeves",
    description:
      "Learn Figma, design principles, user research, and build a stunning portfolio that gets you hired.",
    category: "Design",
    rating: BigInt(49),
    price: BigInt(8999),
  },
  {
    title: "Machine Learning Fundamentals",
    instructor: "Dr. Anika Patel",
    description:
      "Understand ML algorithms, build neural networks, and deploy your first production AI model.",
    category: "AI / ML",
    rating: BigInt(46),
    price: BigInt(14999),
  },
];

export default function Home() {
  const { data: courses = [], isLoading } = useGetAllCourses();
  const featured = courses.slice(0, 4);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevTestimonial = () =>
    setTestimonialIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  const nextTestimonial = () =>
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);

  const t = testimonials[testimonialIndex];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-24 pb-20 px-4 sm:px-6 lg:px-8"
        data-ocid="home.section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6"
                style={{
                  background: "oklch(0.73 0.1 200 / 0.12)",
                  color: "oklch(0.73 0.1 200)",
                  border: "1px solid oklch(0.73 0.1 200 / 0.3)",
                }}
              >
                <Zap className="w-3.5 h-3.5" />
                #1 Online Learning Platform
              </div>
              <h1
                className="font-heading text-5xl sm:text-6xl font-extrabold leading-tight mb-6"
                style={{ color: "oklch(0.97 0.01 220)" }}
              >
                Unlock Your <span className="gradient-text">Potential</span>{" "}
                With Expert Courses
              </h1>
              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: "oklch(0.72 0.03 222)" }}
              >
                Join 50,000+ learners and master in-demand skills with
                world-class instructors. Start your journey today and build the
                career you deserve.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/courses">
                  <button
                    type="button"
                    className="btn-orange px-7 py-3.5 text-base"
                    data-ocid="home.explore.primary_button"
                  >
                    Explore Courses
                  </button>
                </Link>
                <Link to="/about">
                  <button
                    type="button"
                    className="btn-secondary px-7 py-3.5 text-base font-semibold"
                    data-ocid="home.learnmore.secondary_button"
                  >
                    Learn More
                  </button>
                </Link>
              </div>
              <div
                className="flex gap-8 mt-10 pt-8"
                style={{ borderTop: "1px solid oklch(0.28 0.05 222)" }}
              >
                {[
                  { value: "500+", label: "Courses" },
                  { value: "50K+", label: "Students" },
                  { value: "100+", label: "Instructors" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-heading text-2xl font-bold text-orange">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, oklch(0.73 0.1 200 / 0.12) 0%, transparent 70%)",
                  }}
                />
                <img
                  src="/assets/generated/hero-illustration.dim_600x500.png"
                  alt="Learn online"
                  className="relative w-full max-w-lg rounded-3xl"
                  style={{ border: "1px solid oklch(0.73 0.1 200 / 0.25)" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        data-ocid="home.featured.section"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between mb-10"
          >
            <div>
              <p className="text-cyan text-sm font-semibold uppercase tracking-wider mb-2">
                Featured Courses
              </p>
              <h2 className="section-title text-3xl sm:text-4xl">
                Top-Rated Courses
              </h2>
            </div>
            <Link to="/courses">
              <button
                type="button"
                className="btn-secondary px-5 py-2.5 text-sm font-medium hidden sm:flex"
                data-ocid="home.viewall.button"
              >
                View All Courses
              </button>
            </Link>
          </motion.div>

          {isLoading ? (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              data-ocid="home.courses.loading_state"
            >
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="card-glow rounded-2xl bg-navy-card h-80 animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              data-ocid="home.courses.list"
            >
              {(featured.length > 0
                ? featured
                : STATIC_COURSES.slice(0, 4)
              ).map((course, i) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  data-ocid={`home.courses.item.${i + 1}`}
                >
                  <CourseCard course={course} index={i} showEnroll />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why LearnHub */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "oklch(0.12 0.035 222)" }}
        data-ocid="home.benefits.section"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-cyan text-sm font-semibold uppercase tracking-wider mb-2">
              Why Choose Us
            </p>
            <h2 className="section-title text-3xl sm:text-4xl mb-4">
              Why LearnHub?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to accelerate your learning and achieve your
              career goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glow rounded-2xl bg-navy-card p-6 flex gap-4 items-start"
                data-ocid={`home.benefits.item.${i + 1}`}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "oklch(0.73 0.1 200 / 0.12)" }}
                >
                  <benefit.icon className="w-5 h-5 text-cyan" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1.5">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        data-ocid="home.testimonials.section"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-cyan text-sm font-semibold uppercase tracking-wider mb-2">
              Testimonials
            </p>
            <h2 className="section-title text-3xl sm:text-4xl">
              What Our Students Say
            </h2>
          </motion.div>

          <div
            className="card-glow rounded-3xl bg-navy-card p-8 sm:p-10 relative"
            data-ocid="home.testimonials.panel"
          >
            <Quote
              className="w-10 h-10 mb-6 opacity-30"
              style={{ color: "oklch(0.73 0.1 200)" }}
            />
            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-foreground text-lg leading-relaxed mb-8 font-medium">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.68 0.18 42), oklch(0.73 0.1 200))",
                    color: "white",
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-muted-foreground text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>

            {/* Controls */}
            <div className="absolute bottom-8 right-8 flex gap-2">
              <button
                type="button"
                onClick={prevTestimonial}
                className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                style={{ background: "oklch(0.22 0.04 222)" }}
                data-ocid="home.testimonials.pagination_prev"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextTestimonial}
                className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                style={{ background: "oklch(0.22 0.04 222)" }}
                data-ocid="home.testimonials.pagination_next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-1.5 mt-8">
              {testimonials.map((t2) => (
                <button
                  key={t2.id}
                  type="button"
                  onClick={() => setTestimonialIndex(testimonials.indexOf(t2))}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width:
                      testimonials.indexOf(t2) === testimonialIndex
                        ? "24px"
                        : "6px",
                    background:
                      testimonials.indexOf(t2) === testimonialIndex
                        ? "oklch(0.73 0.1 200)"
                        : "oklch(0.28 0.05 222)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
