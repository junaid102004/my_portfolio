"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    text: `“Abhinav is a talented, committed individual who will leave no stone unturned in his pursuit to provide with the best. His attention to detail and in-depth experience in the of web development is indeed commendable. He has exhibited exemplary skills in the field, and I hope to see all the great projects coming up!”`,
    name: "Vishal Prajapat",
    role: "Pro IT & GSM Specialist",
  },
  {
    text: `“Working with Abhinav was an amazing experience. His communication skills and technical expertise are top-notch!”`,
    name: "John Doe",
    role: "CEO, Tech Corp",
  },
  {
    text: `“A true professional and problem solver. He delivers high-quality work on time, every time.”`,
    name: "Sarah Lee",
    role: "Product Manager",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-black text-white">
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10 border border-cyan-400 inline-block px-4 py-2 rounded-lg text-cyan-400">
        What my clients are saying?
      </h2>

      {/* Swiper */}
      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          spaceBetween={30}
          slidesPerView={1}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="relative p-6 rounded-lg bg-black text-center shadow-lg">
                {/* Gradient glow */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 blur-lg opacity-40 -z-10"></div>

                <p className="text-lg sm:text-xl leading-relaxed">{t.text}</p>
                <h4 className="mt-6 text-2xl font-semibold text-cyan-400">
                  {t.name}
                </h4>
                <p className="text-cyan-300">{t.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
