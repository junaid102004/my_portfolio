// src/App.jsx
import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faWhatsApp } from "@fortawesome/free-solid-svg-icons";
import img1 from "./uploads/photo-1623479322729-28b25c16b011.avif";
import Contact from './components/Contact';
import bgImage from "./uploads/photo-1623479322729-28b25c16b011.avif";
import MatterBackground from './components/ui/MatterBackground.jsx';
// import Matter from 'matter-js';
const data = {
  name: "Junaid Khan",
  logo: "JK",
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
      title: "E-commerce Store (MERN)",
      desc: "Built product listing, cart, admin panel, and Stripe payments. Deployed on Render + Vercel.",
      tech: ["React", "Node", "MongoDB", "Stripe"],
      img: img1,
      link: "https://example.com/ecom"
    },
    {
      id: 2,
      title: "Portfolio Site (This one)",
      desc: "A responsive single page React app using TailwindCSS. Clean UI and accessible markup.",
      tech: ["React", "Tailwind"],
      img: img1,
      link: "https://example.com/portfolio"
    },
    {
      id: 3,
      title: "Task Manager (Fullstack)",
      desc: "Realtime updates with Socket.io, JWT auth and REST APIs for tasks.",
      tech: ["React", "Express", "Socket.io"],
      img: img1,
      link: "https://example.com/tasks"
    }
  ]
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 antialiased">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className='w-[50%]  sm:w-auto'>
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {data?.logo}
            </h1>
            <p className="text-sm hidden md:block text-gray-400">{data.title} — {data.location}</p>
          </div>
          <nav className="sm:space-x-4 space-x-2 text-sm w-[50%] sm:w-auto">
            <a href="#projects" className="hover:text-red-400">Projects</a>
            <a href="#about" className="hover:text-red-400">About</a>
            <a href="#contact" className="hover:text-red-400">
              <FontAwesomeIcon icon={faPhone} />
            </a>
            {/* <a
              href={data.resume}
              download
              className="ml-2 inline-block bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
            >
              Download Resume
            </a> */}
          </nav>
        </div>
      </header>


      <main className="w-full mx-auto sm:px-12 sm:py-12">
        {/* Hero */}



        <section
          className="relative grid h-screen md:grid-cols-2 gap-8 items-center p-4 bg-cover bg-center"
        >
          {/* Background Particles */}
          <div className="absolute inset-0 z-0">
            <MatterBackground />
          </div>

          {/* Hero Content */}
          <div className="relative md:col-span-2 mt-10 z-10 md:px-[80px]">
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400 bg-clip-text text-transparent drop-shadow-lg">
              Hi, I'm {data.name} 👋
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-xl">{data.about}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-5 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="inline-block border border-gray-500 hover:border-gray-300 px-5 py-3 rounded-lg transition-colors"
              >
                See Projects
              </a>
            </div>
          </div>
        </section>



        {/* Projects */}
        <section id="projects" className="mt-[120px] md:mt-16 max-w-6xl mx-auto px-4">
          {/* Gradient Heading */}
          <h3 className="text-4xl font-extrabold text-center mb-12 pb-2 bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
            Latest Works
          </h3>

          <div className="relative md:before:absolute md:before:left-1/2 md:before:top-0 md:before:h-full md:before:w-[3px] md:before:bg-gradient-to-b md:before:from-pink-500 md:before:via-purple-500 sm:before:to-blue-500 sm:before:-translate-x-1/2">
            {data.projects.map((p, index) => {
              const gradients = [
                "from-pink-500 via-red-500 to-yellow-500",
                "from-purple-500 via-blue-500 to-teal-500",
                "from-green-500 via-lime-500 to-yellow-500",
                "from-indigo-500 via-purple-500 to-pink-500",
                "from-orange-500 via-pink-500 to-red-500",
              ];
              const gradient = gradients[index % gradients.length];

              return (
                <div
                  key={p.id}
                  className="flex flex-col md:flex-row items-center md:items-start mb-16 relative"
                >
                  {/* Left side - Image */}
                  <div
  className={`w-full md:w-1/2 ${
    index % 2 === 0 ? "md:pr-10" : "md:order-2 md:pl-10"
  }`}
>
  {/* Add group here so children can react to hover */}
  <div className="relative group hover:scale-105 rounded-lg transition-transform duration-300">
    {/* Gradient shadow layer */}
    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 blur-lg opacity-70"></div>

    {/* Span on top, only visible on hover */}
    <span className="absolute z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[#b89142] left-1/2 -translate-x-1/2 top-[-60px] px-2 py-1 text-sm sm:text-base rounded w-max items-center gap-1 after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 hidden sm:flex">
      Sagrada Madre
    </span>

    {/* Image on top of gradient but below span */}
    <img
      src={p.img}
      alt={p.title}
      className="relative z-10 object-cover w-full max-h-60 rounded-lg"
      onError={(e) => {
        e.currentTarget.src = "/projects/placeholder.png";
      }}
    />
  </div>
</div>




                  {/* Connector circle on timeline (desktop only) */}
                  <div className="hidden md:block absolute left-1/2 top-10 -translate-x-1/2 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-full w-5 h-5 z-10 border-2 border-gray-900"></div>

                  {/* Right side - Details */}
                  <div
                    className={`w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left ${index % 2 === 0
                      ? "md:pl-10"
                      : "md:order-1 md:pr-10"
                      }`}
                  >
                    <h4 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                      {p.title}
                    </h4>
                    <p className="mt-2 text-gray-300">{p.desc}</p>
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
                  </div>
                </div>
              );
            })}
          </div>
        </section>




        {/* About / Experience */}
        <Contact />


        {/* Contact Form */}


        {/* Footer */}
        <footer className="mt-16 py-6 text-center text-sm text-gray-500 border-t border-gray-800">
          © {new Date().getFullYear()} {data.name} — Built with React + Tailwind (Dark Mode)
        </footer>
      </main>
    </div>
  );
}
