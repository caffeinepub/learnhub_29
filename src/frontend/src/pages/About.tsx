import {
  Eye,
  Globe,
  Heart,
  Lightbulb,
  ShieldCheck,
  Target,
} from "lucide-react";
import { motion } from "motion/react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const mission = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To democratize high-quality education and make it accessible to every learner worldwide — regardless of their background or location.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "A world where anyone can acquire the skills they need to build a meaningful career, by learning from the very best in each field.",
  },
  {
    icon: Heart,
    title: "Our Values",
    desc: "Excellence, inclusivity, continuous improvement, and a deep commitment to every learner's growth and success.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We constantly evolve our platform, using the latest in learning science to deliver the most effective educational experience possible.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "With learners in 150+ countries, we are proud to serve one of the world's most diverse and engaged learning communities.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Every course is vetted by our expert editorial team to ensure it meets the highest standards of accuracy, depth, and production quality.",
  },
];

const stats = [
  { value: "500+", label: "Expert Courses", desc: "Across 15 categories" },
  { value: "50K+", label: "Active Students", desc: "In 150+ countries" },
  { value: "100+", label: "Instructors", desc: "Industry professionals" },
  { value: "4.8", label: "Average Rating", desc: "From verified reviews" },
];

const team = [
  {
    name: "Alex Thompson",
    role: "Lead Web Development Instructor",
    bio: "10+ years at Google & Meta. Expert in React, Node.js, and cloud architecture.",
    image: "/assets/generated/instructor-1.dim_200x200.jpg",
    courses: 12,
  },
  {
    name: "Dr. Lisa Chen",
    role: "Data Science & AI Instructor",
    bio: "PhD in Computer Science from MIT. Former lead data scientist at Microsoft.",
    image: "/assets/generated/instructor-2.dim_200x200.jpg",
    courses: 8,
  },
  {
    name: "Marcus Reeves",
    role: "UI/UX Design Instructor",
    bio: "Principal designer at Figma. Designed products used by millions worldwide.",
    image: "/assets/generated/instructor-3.dim_200x200.jpg",
    courses: 6,
  },
  {
    name: "Dr. Anika Patel",
    role: "Machine Learning Instructor",
    bio: "ML researcher at DeepMind. Published 30+ papers in top AI conferences.",
    image: "/assets/generated/instructor-4.dim_200x200.jpg",
    courses: 9,
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section
        className="pt-28 pb-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "oklch(0.12 0.035 222)" }}
        data-ocid="about.page"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-cyan text-sm font-semibold uppercase tracking-wider mb-3">
              Our Story
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-5">
              About LearnHub
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Founded in 2020, LearnHub was built with a single belief: that
              access to great education should be a right, not a privilege. We
              partner with the world's top instructors to bring you courses that
              actually transform careers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        data-ocid="about.stats.section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glow rounded-2xl bg-navy-card p-6 text-center"
                data-ocid={`about.stats.item.${i + 1}`}
              >
                <div className="font-heading text-4xl font-bold text-orange mb-1">
                  {stat.value}
                </div>
                <div className="font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-muted-foreground text-xs">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "oklch(0.12 0.035 222)" }}
        data-ocid="about.mission.section"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-cyan text-sm font-semibold uppercase tracking-wider mb-2">
              Our Purpose
            </p>
            <h2 className="section-title text-3xl sm:text-4xl">
              Mission, Vision & Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mission.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glow rounded-2xl bg-navy-card p-6"
                data-ocid={`about.mission.item.${i + 1}`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "oklch(0.68 0.18 42 / 0.12)" }}
                >
                  <item.icon className="w-6 h-6 text-orange" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        data-ocid="about.team.section"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-cyan text-sm font-semibold uppercase tracking-wider mb-2">
              Meet the Experts
            </p>
            <h2 className="section-title text-3xl sm:text-4xl">
              Our Top Instructors
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glow rounded-2xl bg-navy-card p-6 text-center"
                data-ocid={`about.team.item.${i + 1}`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  style={{ border: "2px solid oklch(0.73 0.1 200 / 0.4)" }}
                />
                <h3 className="font-heading font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-cyan text-xs font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                  {member.bio}
                </p>
                <span
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    background: "oklch(0.68 0.18 42 / 0.12)",
                    color: "oklch(0.68 0.18 42)",
                  }}
                >
                  {member.courses} Courses
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
