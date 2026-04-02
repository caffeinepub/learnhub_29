import { DollarSign, Star, User } from "lucide-react";
import type { Course } from "../backend.d";

const COURSE_IMAGES = [
  "/assets/generated/course-web-dev.dim_400x240.jpg",
  "/assets/generated/course-data-science.dim_400x240.jpg",
  "/assets/generated/course-uiux.dim_400x240.jpg",
  "/assets/generated/course-ml.dim_400x240.jpg",
];

interface CourseCardProps {
  course: Course;
  index: number;
  onViewDetails?: (course: Course) => void;
  showEnroll?: boolean;
}

export default function CourseCard({
  course,
  index,
  onViewDetails,
  showEnroll = false,
}: CourseCardProps) {
  const rating = Number(course.rating) / 10;
  const price = Number(course.price) / 100;
  const imageUrl = COURSE_IMAGES[index % COURSE_IMAGES.length];
  const truncated =
    course.description.length > 100
      ? `${course.description.slice(0, 100)}...`
      : course.description;

  return (
    <div className="card-glow rounded-2xl overflow-hidden bg-navy-card flex flex-col transition-all duration-300 hover:-translate-y-1">
      <div className="relative">
        <img
          src={imageUrl}
          alt={course.title}
          className="w-full h-44 object-cover"
        />
        <span
          className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{
            background: "oklch(0.13 0.04 222 / 0.85)",
            color: "oklch(0.73 0.1 200)",
            border: "1px solid oklch(0.73 0.1 200 / 0.4)",
          }}
        >
          {course.category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading font-semibold text-foreground text-lg mb-2 leading-snug">
          {course.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
          {truncated}
        </p>

        <div className="flex items-center gap-2 mb-4">
          <User className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">
            {course.instructor}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-3.5 h-3.5 ${
                    star <= Math.round(rating)
                      ? "text-yellow-rating fill-current"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-yellow-rating">
              {rating.toFixed(1)}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="w-3.5 h-3.5 text-cyan" />
            <span className="font-bold text-foreground">
              {price.toFixed(0)}
            </span>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          {showEnroll && (
            <button type="button" className="btn-orange flex-1 py-2.5 text-sm">
              Enroll Now
            </button>
          )}
          {onViewDetails && (
            <button
              type="button"
              className={`${
                showEnroll ? "btn-secondary flex-1" : "btn-orange flex-1"
              } py-2.5 text-sm`}
              onClick={() => onViewDetails(course)}
            >
              View Details
            </button>
          )}
          {!showEnroll && !onViewDetails && (
            <button type="button" className="btn-orange flex-1 py-2.5 text-sm">
              Enroll Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
