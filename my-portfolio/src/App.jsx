// src/App.jsx
import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaPhone } from "react-icons/fa6";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faWhatsApp } from "@fortawesome/free-solid-svg-icons";
import { FaWhatsapp } from "react-icons/fa";
import imgAdpostman from "./uploads/Group 7829.png";
import imgAurum from "./uploads/aurum-image.jpeg";
import imgSagrada from "./uploads/SagradaImage.jpeg"
import imgmern from "./uploads/mernapp.png"
import Contact from './components/Contact';
import bgImage from "./uploads/photo-1623479322729-28b25c16b011.avif";
import MatterBackground from './components/ui/MatterBackground.jsx';
import Testimonials from './components/Testimonials.jsx';
import logoImg from "./uploads/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

// import Matter from 'matter-js';
const data = {
  name: "Junaid Khan",
  logo: logoImg,
  title: "Frontend / Fullstack Web Developer",
  location: "India",
  email: "junaid@example.com",
  phone: "+91 99999 99999",
  resume: "/resume.pdf",
  about:
    "I build responsive web apps with React, TailwindCSS and Node.js. I love turning ideas into real products — clean UI, performant code and practical architecture.",
  skills: [
    "React", "JavaScript (ES6+)", "TailwindCSS", "Node.js", "MongoDB", "Git", "Redux / RTK", "Stripe / Payments"
  ],
  projects: [
    {
      id: 1,
      title: "AdPostman",
      desc: "A listing platform created in MERN stack with over 50 pages of Figma designs. I developed the frontend and partially the backend using Next.js, Node.js, and Express, assisting in implementing advanced search, filtering, and user authentication.",
      tech: ["Next.js", "React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      tools: ["VS Code", "Git", "Figma", "Postman", "Cloudinary"],
      img: imgAdpostman, // replace with your imported image file
      link: "https://adpostman.adiyogitechnology.com/",
      textColor: "text-purple-500",
      spanColor: "bg-red-300",
      spanTitle: "MERN Listing Platform",
      lineColor: "#9c27b0",
      textColor: "#3A4E5F"
    },
    {
      id: 2,
      title: "Aurum Reality Nivesh",
      desc: "A UI-intensive real estate platform built with Next.js and React, focused on showcasing premium property listings. I assisted in frontend development, creating responsive layouts, interactive components, and dynamic property filters.",
      tech: ["Next.js", "React", "TailwindCSS", "JavaScript"],
      tools: ["VS Code", "Git", "Figma", "Vercel"],
      img: imgAurum, // replace with your imported image file
      link: "https://medallionaurum.realtynivesh.com/",
      textColor: "text-yellow-500",
      spanColor: "bg-yellow-500",
      spanTitle: "Real Estate Platform",
      lineColor: "#ff9800",
      textColor: "#3A4E5F"
    },
    {
      id: 3,
      title: "Sagrada Madre",
      desc: "An e-commerce website built in Laravel. I assisted senior developers by working on backend payment integration and supporting frontend enhancements, ensuring smooth checkout and user experience.",
      tech: ["Laravel", "PHP", "MySQL", "JavaScript", "TailwindCSS"],
      tools: ["VS Code", "Git", "MySQL", "Postman"],
      img: imgSagrada, // replace with your imported image file
      link: "https://www.sagradamadre.net/",
      textColor: "text-green-500",
      spanColor: "bg-rose-400",
      spanTitle: "E-commerce Website",
      lineColor: "#4caf50",
      textColor: "#3A4E5F"
    },
    {
      id: 4,
      title: "E-Commerce Practice Website",
      desc: "A MERN stack e-commerce app with Redux Toolkit, Stripe payments, and a responsive UI for personal learning purposes.",
      tech: ["React", "Redux Toolkit", "RTK Query", "Node.js", "Express.js", "MongoDB", "Stripe"],
      tools: ["VS Code", "Git", "Postman", "Cloudinary"], // extra tools used
      img: imgmern,
      link: "https://example.com/ecommerce",
      textColor: "text-fuchsia-600", // heading text color
      spanColor: "bg-fuchsia-600",   // hover span background
      spanTitle: "MERN Ecommerce App",
      lineColor: "#4caf50",
      textColor: "#3A4E5F"          // timeline line color
    },
  ]


};
const socialLinks = {
  linkedin: "https://www.linkedin.com/in/junaid-khan-a3b538286/",
  github: "https://github.com/junaid102004",
  youtube: "https://youtube.com", // Replace with your actual channel link
  instagram: "https://instagram.com", // Replace with your actual handle
  twitter: "https://twitter.com", // Replace with your actual handle
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 antialiased">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-80 bg-transparent">
        <div className="max-w-full   md:px-[70px]  flex items-center justify-between">
          <div className='w-[50%] flex justify-start  md:ml-0  sm:w-auto'>
            <img src={data?.logo} className='w-[120px] h-[120px] object-contain' alt="" />
            {/* <p className="text-sm hidden md:block text-gray-400">{data.title} — {data.location}</p> */}
          </div>
          <nav className="sm:space-x-4 space-x-2 flex items-center justify-end pr-3 text-sm w-[50%] sm:w-auto">
            <a href="#projects" className="hover:text-red-400 text-[18px]">Projects</a>

            {/* WhatsApp link */}
            <a
              href="https://wa.me/917877227800" // "91" is country code for India
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={30} />
            </a>

            {/* Phone call link */}
            <a
              href="tel:+917877722780"
              className="hover:text-red-400"
            >
              <FaPhone size={25} />
            </a>
          </nav>

        </div>
      </header>


      <main className="w-full mx-auto ">
        {/* Hero */}



        <section
          className="relative  grid h-screen md:grid-cols-2 gap-8 items-center p-4 bg-cover bg-center"
        >
          {/* Background Particles */}
          <div className="absolute inset-0 z-50">
            <MatterBackground />
          </div>

          {/* Hero Content */}
          <div className="relative md:col-span-2 pr-5 sm:pr-0 z-70 md:px-[80px]">
            <h2 className="sm:text-5xl text-[30px] xs:text-[35px] md:text-7xl sm:mt-[60px] md:mt-[100px] font-extrabold leading-tight tracking-tight bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400 bg-clip-text text-transparent drop-shadow-lg">
              Hi, I'm {data.name} 👋
            </h2>
            <p className="mt-4 sm:text-lg md:text-[24px] text-[14px] text-gray-300 max-w-xl pr-3">{data.about}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white sm:px-5 sm:py-3   px-2 py-2  rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="inline-block border border-gray-500 hover:border-gray-300 sm:px-5 sm:py-3   px-2 py-2 rounded-lg transition-colors"
              >
                See Projects
              </a>
            </div>
          </div>


          <div className="absolute right-2 top-[40%] sm:right-10 sm:top-[60%] flex flex-col gap-3 z-1000">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaGithub size={30} />
            </a>
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaYoutube size={30} />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <BsTwitterX size={30} />
            </a>
          </div>



        </section>



        {/* Projects */}
        <section id="projects" className="mt-[120px] md:mt-16 max-w-6xl mx-auto px-4">
          <div className="rounded-lg w-full flex items-center justify-center">
            <h3
              className="text-2xl font-extrabold text-center mb-12 pb-2 text-white px-6 py-3 rounded-lg shadow-lg inline-block"
              style={{
                background: "linear-gradient(90deg, rgb(189, 52, 254), rgb(255, 0, 128))"
              }}
            >
              Latest Works
            </h3>
          </div>

          {/* Gradient Heading */}

          <div className="relative md:before:absolute md:before:left-1/2 md:before:top-0 md:before:h-full md:before:w-[3px] md:before:bg-gradient-to-b md:before:from-pink-500 md:before:via-purple-500 sm:before:to-blue-500 sm:before:-translate-x-1/2">
            {data.projects.map((p, index) => {
              const gradients = [
                "from-pink-500 via-red-500 to-yellow-500",
                "from-purple-500 via-blue-500 to-teal-500",
                "from-green-500 via-lime-500 to-yellow-500",
                "from-indigo-500 via-purple-500 to-pink-500",
                "from-orange-500 via-pink-500 to-red-500"
              ];
              const gradient = gradients[index % gradients.length];

              return (
                <div
                  key={p.id}
                  className={`flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start ${p.id === 1 ? "mt-[90px]" : "mt-[150px]"}  mb-16 relative`}
                >
                  {/* Left side - Image */}
                  {/* <div class="h-[1px] left-1/4 right-1/2 bg-[#b89142] absolute top-1/2 hidden sm:block"></div> */}
                  <div className={`w-full  flex-col md:flex-row items-center flex justify-center md:w-1/2 ${index % 2 === 0 ? "md:pr-10" : "md:order-2 md:pl-[100px]"}`}>
                    <div className="relative group hover:scale-105 rounded-lg transition-transform duration-300 w-[300px] md:w-[450px]">
                      {/* Gradient shadow layer */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 blur-lg opacity-70"></div>

                      {/* Span */}
                      {/* Span */}

                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`absolute z-20 hidden md:flex opacity-0 group-hover:opacity-100 transition-all duration-300 ${p.spanColor} left-1/2 -translate-x-1/2 top-[-60px] px-2 py-1 text-sm sm:text-base rounded w-max items-center gap-1 after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 hidden sm:flex cursor-pointer`}
                      >
                        {p?.spanTitle}
                      </a>

                      {/* Image */}
                      <img
                        src={p.img}
                        alt={p.title}
                        className="relative z-10 object-cover w-full max-h-60 rounded-lg"
                        onError={(e) => {
                          e.currentTarget.src = "/projects/placeholder.png";
                        }}
                      />

                    </div>
                    <div className={` z-300 flex md:hidden  mt-10 ${p.spanColor}  text-[${p.textColor}] px-2 py-1 text-sm sm:text-base rounded w-max items-center gap-1 cursor-pointer`}>

                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"

                      >
                        {p?.spanTitle}
                      </a>
                      <GoLinkExternal />
                    </div>
                  </div>

                  {/* Connector circle */}
                  <div className="hidden md:block absolute left-1/2 top-30 -translate-x-1/2 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-full w-5 h-5 z-10 border-2 border-gray-900"></div>

                  {/* Right side - Details */}
                  <div
                    className={`w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left ${index % 2 === 0 ? "md:pl-10" : "md:order-1 md:pr-10"}`}
                  >
                    <h4 className={`text-2xl font-bold ${p.textColor}`}>
                      {p.title}
                    </h4>
                    <p className="mt-2 text-gray-300">{p.desc}</p>

                    {/* Tech */}
                    <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-gray-600 text-gray-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Tools */}
                    <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                      {p.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs px-3 py-1 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-gray-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>



        <Testimonials />
        {/* About / Experience */}
        <Contact />


        {/* Contact Form */}


        {/* Footer */}
        <footer className="mt-16 py-6 border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
            {/* Footer Text */}
            <p className="text-sm text-gray-400 tracking-wide text-center sm:text-left">
              © {new Date().getFullYear()} {data.name}. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 text-gray-400">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition-colors"
              >
                <FaGithub size={22} />
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors"
              >
                <FaYoutube size={22} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors"
              >
                <BsTwitterX size={22} />
              </a>
            </div>
          </div>
        </footer>


      </main>
    </div>
  );
}
