import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BookOpen, DollarSign, Search, Star, User, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import type { Course } from "../backend.d";
import CourseCard from "../components/CourseCard";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { useGetAllCourses } from "../hooks/useQueries";

const STATIC_COURSES = [
  {
    title: "Complete Web Development Bootcamp",
    instructor: "Alex Thompson",
    description:
      "Master HTML, CSS, JavaScript, React, and Node.js. Build real-world projects from scratch and launch your development career with confidence.",
    category: "Development",
    rating: BigInt(48),
    price: BigInt(9999),
  },
  {
    title: "Data Science with Python",
    instructor: "Dr. Lisa Chen",
    description:
      "From pandas and NumPy to deep learning with TensorFlow — a comprehensive journey through the entire data science stack with hands-on projects.",
    category: "Data Science",
    rating: BigInt(47),
    price: BigInt(12999),
  },
  {
    title: "UI/UX Design Mastery",
    instructor: "Marcus Reeves",
    description:
      "Learn Figma, design principles, user research methodologies, and build a stunning portfolio. Everything you need to become a professional UX designer.",
    category: "Design",
    rating: BigInt(49),
    price: BigInt(8999),
  },
  {
    title: "Machine Learning Fundamentals",
    instructor: "Dr. Anika Patel",
    description:
      "Understand ML algorithms from regression to neural networks, build production-ready models, and deploy your first AI application.",
    category: "AI / ML",
    rating: BigInt(46),
    price: BigInt(14999),
  },
  {
    title: "Cloud Architecture with AWS",
    instructor: "James Wilson",
    description:
      "Master AWS services, architect scalable systems, and earn your AWS Solutions Architect certification with practical exam prep.",
    category: "Cloud",
    rating: BigInt(45),
    price: BigInt(11999),
  },
  {
    title: "Full-Stack React & Node",
    instructor: "Sofia Andersson",
    description:
      "Build complete full-stack applications using React 19, TypeScript, Node.js, and PostgreSQL. Deploy to production with CI/CD pipelines.",
    category: "Development",
    rating: BigInt(48),
    price: BigInt(10999),
  },
  {
    title: "Cybersecurity Essentials",
    instructor: "David Okafor",
    description:
      "Learn ethical hacking, penetration testing, network security, and protect systems against real-world cyber threats.",
    category: "Security",
    rating: BigInt(47),
    price: BigInt(13999),
  },
  {
    title: "iOS App Development with Swift",
    instructor: "Rachel Kim",
    description:
      "Build beautiful, performant iOS apps with Swift and SwiftUI. From zero to App Store — complete with portfolio-worthy projects.",
    category: "Mobile",
    rating: BigInt(46),
    price: BigInt(9499),
  },
];

export default function Courses() {
  const { data: backendCourses = [], isLoading } = useGetAllCourses();
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [search, setSearch] = useState("");

  const courses = backendCourses.length > 0 ? backendCourses : STATIC_COURSES;

  const filtered = courses.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase()) ||
      c.instructor.toLowerCase().includes(search.toLowerCase()),
  );

  const selectedRating = selectedCourse
    ? Number(selectedCourse.rating) / 10
    : 0;
  const selectedPrice = selectedCourse ? Number(selectedCourse.price) / 100 : 0;

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section
        className="pt-28 pb-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "oklch(0.12 0.035 222)" }}
        data-ocid="courses.page"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-cyan text-sm font-semibold uppercase tracking-wider mb-3">
              Browse Catalog
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
              All Courses
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Explore our complete library of expert-led courses and find the
              perfect path for your goals.
            </p>
            <div className="relative max-w-md mx-auto">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4"
                style={{ color: "oklch(0.73 0.1 200)" }}
              />
              <input
                type="text"
                placeholder="Search courses, topics, instructors..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-dark w-full pl-11 pr-4 py-3 text-sm"
                data-ocid="courses.search_input"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              data-ocid="courses.loading_state"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="card-glow rounded-2xl bg-navy-card h-80 animate-pulse"
                />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20" data-ocid="courses.empty_state">
              <BookOpen
                className="w-16 h-16 mx-auto mb-4 opacity-30"
                style={{ color: "oklch(0.73 0.1 200)" }}
              />
              <p className="text-muted-foreground text-lg">
                No courses found for "{search}"
              </p>
            </div>
          ) : (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              data-ocid="courses.list"
            >
              {filtered.map((course, i) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                  data-ocid={`courses.item.${i + 1}`}
                >
                  <CourseCard
                    course={course}
                    index={i}
                    onViewDetails={setSelectedCourse}
                    showEnroll
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Course Detail Modal */}
      <Dialog
        open={!!selectedCourse}
        onOpenChange={(open) => !open && setSelectedCourse(null)}
      >
        <DialogContent
          className="max-w-lg"
          style={{
            background: "oklch(0.18 0.04 222)",
            border: "1px solid oklch(0.73 0.1 200 / 0.3)",
          }}
          data-ocid="courses.detail.dialog"
        >
          {selectedCourse && (
            <>
              <DialogHeader>
                <div className="flex items-start gap-3 mb-2">
                  <Badge
                    className="text-xs"
                    style={{
                      background: "oklch(0.73 0.1 200 / 0.15)",
                      color: "oklch(0.73 0.1 200)",
                      border: "1px solid oklch(0.73 0.1 200 / 0.3)",
                    }}
                  >
                    {selectedCourse.category}
                  </Badge>
                </div>
                <DialogTitle className="font-heading text-xl text-foreground">
                  {selectedCourse.title}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground leading-relaxed">
                  {selectedCourse.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 mt-2">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">
                    {selectedCourse.instructor}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= Math.round(selectedRating)
                            ? "text-yellow-rating fill-current"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-yellow-rating">
                    {selectedRating.toFixed(1)} / 5.0
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-cyan" />
                  <span className="text-xl font-bold text-foreground">
                    ${selectedPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  className="btn-orange flex-1 py-3 text-sm font-semibold"
                  data-ocid="courses.detail.confirm_button"
                >
                  Enroll Now — ${selectedPrice.toFixed(2)}
                </button>
                <button
                  type="button"
                  className="btn-secondary px-5 py-3 text-sm"
                  onClick={() => setSelectedCourse(null)}
                  data-ocid="courses.detail.close_button"
                >
                  Close
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
