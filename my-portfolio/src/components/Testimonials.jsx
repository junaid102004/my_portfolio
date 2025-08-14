"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    text: `“Junaid is an exceptionally talented and committed individual. His expertise in web development is outstanding, and he consistently delivers more than expected. His dedication, attention to detail, and problem-solving skills are truly admirable. Working with him has been a pleasure, and I look forward to seeing all his great future projects!”`,
    name: "Mohammed Parvez ",
    role: "Director, GAPS Technologies Pvt. Ltd.",
  },
  {
    text: `“Junaid’s technical skills and creative vision are top-notch. He brings innovative solutions to the table and executes them flawlessly. A true professional who makes collaboration easy and enjoyable.”`,
    name: "Joe Santos",
    role: "CEO, Sagrada Madre",
  },
  {
    text: `“Junaid is not just skilled — he’s exceptional. His ability to understand complex requirements and deliver high-quality work quickly sets him apart. I highly recommend him to anyone seeking top-tier results.”`,
    name: "Nabil S",
    role: "Manager, Orient Finance",
  },
];


export default function Testimonials() {
  return (
    <section className="py-16 bg-transparent   text-white">
      {/* Heading */}
      <div className="w-full flex items-center justify-center">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10 sm:border-2 border-[#1788ae] inline-block px-4 py-2 rounded-lg text-cyan-400">
          What my clients are saying?
        </h2>
      </div>

      {/* Swiper */}
      <div className="max-w-4xl  rounded-lg mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          spaceBetween={30}
          slidesPerView={1}
          className="custom-swiper"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="relative flex mt-5 mr-3 ml-3  mb-5 items-center justify-center">
                {/* Glow Layer */}
                {/* <div className="absolute inset-0  bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 blur-2xl opacity-60"></div> */}

                {/* Card */}
                <div className="relative max-w-[800px] mx-h-[600px]  rounded-lg flex flex-col md:flex-row items-center justify-center p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab">
                  {/* Optional Image */}
                  {t.image && (
                    <img
                      className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full"
                      src={t.image}
                      alt={t.name}
                    />
                  )}

                  {/* Text Content */}
                  <div className="ml-0 md:ml-6 text-left pt-6 md:pt-16">
                    <p className="text-sm md:text-base mb-2 leading-relaxed">
                      {t.text}
                    </p>
                    <h2 className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl">
                      {t.name}
                    </h2>
                    <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                      {t.role}
                    </h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>



          ))}
        </Swiper>
      </div>
    </section>

  );
}
