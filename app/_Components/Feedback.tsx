"use client"
/* eslint-disable @next/next/no-img-element */
import ReusableTitle from "./ReusableTitle";
import testimonials from "../data/testimilions";
import { motion } from "framer-motion";

const FeedbackCard = ({
  testimonial,
  name,
  designation,
  company,
  image,
  index,
}: {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 h-full flex flex-col"
    >
      {/* Quote Icon */}
      <div className="mb-4">
        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
          <svg
            className="w-6 h-6 text-blue-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
          </svg>
        </div>
      </div>

      {/* Testimonial Text */}
      <blockquote className="flex-1">
        <p className="text-gray-300 text-lg leading-relaxed mb-6 line-clamp-5">
          {testimonial}
        </p>
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-4 pt-4 border-t border-gray-700/50">
        <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="text-white font-semibold text-lg truncate">{name}</h4>
          <p className="text-gray-400 text-sm truncate">{designation}</p>
          <p className="text-blue-400 text-sm truncate">{company}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Feedback = () => {
  // // Sample data in case testimonials is empty
  // const sampleTestimonials = [
  //   {
  //     testimonial:
  //       "Working with this developer was an absolute pleasure. Their attention to detail and problem-solving skills are exceptional. They delivered high-quality code that exceeded our expectations.",
  //     name: "Sarah Johnson",
  //     designation: "Product Manager",
  //     company: "TechCorp Inc.",
  //     image: "",
  //   },
  //   {
  //     testimonial:
  //       "The projects delivered were not only visually stunning but also highly functional and performant. Great communication throughout the entire development process.",
  //     name: "Michael Chen",
  //     designation: "CTO",
  //     company: "StartUp Ventures",
  //     image: "",
  //   },
  //   {
  //     testimonial:
  //       "Outstanding frontend development skills! They transformed our complex requirements into a seamless user experience. Will definitely work with them again.",
  //     name: "Emily Rodriguez",
  //     designation: "UX Lead",
  //     company: "Design Studio",
  //     image: "",
  //   },
  // ];

  // const testimonialsData =
  //   testimonials && testimonials.length > 0 ? testimonials : sampleTestimonials;

  return (
    <section className="py-16 px-4 md:py-24 md:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header section */}
      <ReusableTitle title="What People Say" description="Testimonials" />

      {/* Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-gray-400 text-sm bg-gray-900/30 backdrop-blur-sm rounded-lg py-2 px-4 inline-block border border-yellow-500/20">
          💡 Note: Using fake data for demonstration purposes
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={index}
            index={index}
            testimonial={testimonial.testimonial}
            name={testimonial.name}
            designation={testimonial.designation}
            company={testimonial.company}
            image={testimonial.image}
          />
        ))}
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/50">
          <div className="text-2xl md:text-3xl font-bold text-white mb-2">
            10+
          </div>
          <div className="text-gray-400 text-sm">Projects Completed</div>
        </div>
        <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/50">
          <div className="text-2xl md:text-3xl font-bold text-white mb-2">
            7+
          </div>
          <div className="text-gray-400 text-sm">Happy Clients</div>
        </div>
        <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/50">
          <div className="text-2xl md:text-3xl font-bold text-white mb-2">
            2+
          </div>
          <div className="text-gray-400 text-sm">Years Experience</div>
        </div>
        <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/50">
          <div className="text-2xl md:text-3xl font-bold text-white mb-2">
            80%
          </div>
          <div className="text-gray-400 text-sm">Client Satisfaction</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Feedback;
