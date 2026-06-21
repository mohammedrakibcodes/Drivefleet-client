"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Star, Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "Ellen Murphy",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    review:
      "DriveFleet made my trip completely stress-free. The booking process was smooth, the vehicle was spotless, and the customer service exceeded my expectations.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Business Traveler",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    review:
      "Professional service from start to finish. The car arrived on time, looked brand new, and the entire rental experience felt premium.",
  },
  {
    id: 3,
    name: "David Wilson",
    role: "Travel Blogger",
    image: "https://i.pravatar.cc/150?img=15",
    rating: 5,
    review:
      "I've rented cars from many companies, but DriveFleet stands out with transparent pricing and exceptional vehicle quality.",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Entrepreneur",
    image: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    review:
      "Fast booking, excellent support, and luxurious cars. Everything worked exactly as promised. Highly recommended.",
  },
];

const CustomerReviews = () => {
  return (
    <section className="bg-white py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-blue-200 bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 dark:text-white">
            What Our Customers Say
          </h2>

          <p className="mt-5 text-slate-600 dark:text-slate-400">
            Thousands of happy customers trust DriveFleet for safe, affordable
            and premium car rentals across the country.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          loop
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:border-blue-500 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="absolute right-6 top-6 text-blue-100 transition duration-300 group-hover:rotate-12 dark:text-slate-800">
                  <Quote size={70} strokeWidth={1.3} />
                </div>

                <div className="mb-6 flex items-center gap-1">
                  {Array.from({
                    length: review.rating,
                  }).map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      fill="#FACC15"
                      color="#FACC15"
                    />
                  ))}
                </div>

                <p className="mb-8 leading-8 text-slate-600 dark:text-slate-400">
                  "{review.review}"
                </p>

                <div className="flex items-center gap-4">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full border-4 border-blue-100 object-cover dark:border-slate-700"
                  />

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {review.name}
                    </h3>

                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {review.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerReviews;
