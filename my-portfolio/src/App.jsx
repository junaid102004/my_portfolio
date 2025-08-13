// src/App.jsx
import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faWhatsApp } from "@fortawesome/free-solid-svg-icons";

const data = {
  name: "Junaid Khan",
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
      img: "/projects/ecom.png",
      link: "https://example.com/ecom"
    },
    {
      id: 2,
      title: "Portfolio Site (This one)",
      desc: "A responsive single page React app using TailwindCSS. Clean UI and accessible markup.",
      tech: ["React", "Tailwind"],
      img: "/projects/portfolio.png",
      link: "https://example.com/portfolio"
    },
    {
      id: 3,
      title: "Task Manager (Fullstack)",
      desc: "Realtime updates with Socket.io, JWT auth and REST APIs for tasks.",
      tech: ["React", "Express", "Socket.io"],
      img: "/projects/tasks.png",
      link: "https://example.com/tasks"
    }
  ]
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 antialiased">
      {/* Header */}
      <header className="bg-transparent ">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">{data.name}</h1>
            <p className="text-sm text-gray-400">{data.title} — {data.location}</p>
          </div>
          <nav className="space-x-4 text-sm">
            <a href="#projects" className="hover:text-red-400">Projects</a>
            <a href="#about" className="hover:text-red-400">About</a>
            <a href="#contact" className="hover:text-red-400"> <FontAwesomeIcon icon={faPhone} /></a>
            <a href={data.resume} download className="ml-2 inline-block bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm">Download Resume</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid  h-screen md:grid-cols-2 gap-8 items-start pt-[80px] p-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Hi, I'm {data.name} 👋</h2>
            <p className="mt-4 text-lg text-gray-300">{data.about}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={data.resume} download className="inline-block bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow">Download Resume</a>
              <a href="#projects" className="inline-block border border-gray-700 hover:border-gray-500 px-4 py-2 rounded-lg">See projects</a>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-gray-400">Skills</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {data.skills.map((s) => {
                  const colors = {
                    React: "bg-sky-400 text-white hover:bg-sky-500",
                    PHP: "bg-indigo-400 text-white hover:bg-indigo-500",
                    "Node.js": "bg-emerald-400 text-white hover:bg-emerald-500",
                    Laravel: "bg-rose-400 text-white hover:bg-rose-500",
                    "JavaScript (ES6+)": "bg-amber-300 text-gray-900 hover:bg-amber-400",
                    CSS: "bg-cyan-400 text-white hover:bg-cyan-500",
                    MongoDB: "bg-green-500 text-white hover:bg-green-600",
                    Git: "bg-orange-400 text-white hover:bg-orange-500",
                    TailwindCSS: "bg-teal-400 text-white hover:bg-teal-500",
                    "Redux / RTK": "bg-violet-400 text-white hover:bg-violet-500",
                    "Stripe / Payments": "bg-pink-400 text-white hover:bg-pink-500",
                  };
                  const colorClass = colors[s] || "bg-gray-600 text-white";
                  return (
                    <span
                      key={s}
                      className={`text-sm px-3 py-1 rounded-full shadow-sm transition-colors duration-200 ${colorClass}`}
                    >
                      {s}
                    </span>
                  );
                })}
              </div>

            </div>

          </div>

          {/* <div className="flex items-center justify-center">
            <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-white text-xl font-bold shadow-lg">
              Your Photo
            </div>
          </div> */}
        </section>

        {/* Projects */}
        <section id="projects" className="mt-16 max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 border-b-2 border-blue-600 pb-2">Latest Works</h3>

          <div className="relative before:absolute before:left-1/2 before:top-0 before:h-full before:w-[2px] before:bg-blue-600 before:-translate-x-1/2">
            {data.projects.map((p, index) => (
              <div key={p.id} className="flex flex-col md:flex-row items-center md:items-start mb-16 relative">
                {/* Left side - Image */}
                <div className={`w-full border border-red-500  md:w-1/2 ${index % 2 === 0 ? 'md:pr-10' : 'md:order-2 md:pl-10'}`}>
                  <img
                    src={p.img}
                    alt={p.title}
                    className="rounded-lg shadow-lg object-cover w-full max-h-60"
                    onError={(e) => { e.currentTarget.src = '/projects/placeholder.png' }}
                  />
                </div>

                {/* Connector circle on timeline */}
                <div className="hidden md:block absolute left-1/2 top-10 -translate-x-1/2 bg-blue-600 rounded-full w-5 h-5 z-10"></div>

                {/* Right side - Details */}
                <div className={`w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left ${index % 2 === 0 ? 'md:pl-10' : 'md:order-1 md:pr-10'}`}>
                  <h4 className="text-2xl font-bold text-yellow-600">{p.title}</h4>
                  <p className="mt-2 text-white">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs px-3 py-1 rounded-full border border-gray-700 bg-gray-800">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* About / Experience */}
        <section id="about" className="mt-16 bg-gray-900 rounded-2xl p-6 shadow border border-gray-800">
          <h3 className="text-2xl font-bold">About & Experience</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-300">{data.about}</p>

              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <div className="text-red-400 font-bold">2024</div>
                  <div>
                    <div className="font-semibold">Frontend Developer at Example Co.</div>
                    <div className="text-sm text-gray-400">Built new UI components, converted legacy pages to React, improved bundle size by 30%.</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-red-400 font-bold">2023</div>
                  <div>
                    <div className="font-semibold">Intern — Web Developer</div>
                    <div className="text-sm text-gray-400">Worked on REST APIs, simple auth flows and dashboards.</div>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">  Contact</h4>
              <div className="mt-3 text-sm text-gray-300">
                <p><strong>Email:</strong> <a href={`mailto:${data.email}`} className="text-red-400">{data.email}</a></p>
                <p className="mt-1"><strong>Phone:</strong> {data.phone}</p>
                <p className="mt-3"><strong>Location:</strong> {data.location}</p>

                <div className="mt-4">
                  <a href={data.resume} download className="inline-block bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg">Download CV</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="mt-16">
          <h3 className="text-2xl font-bold">Get in touch</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <form className="space-y-4 bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input className="mt-1 w-full border border-gray-700 bg-gray-800 rounded-md px-3 py-2" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input className="mt-1 w-full border border-gray-700 bg-gray-800 rounded-md px-3 py-2" placeholder="you@mail.com" />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea className="mt-1 w-full border border-gray-700 bg-gray-800 rounded-md px-3 py-2" rows={4} placeholder="Tell me about the role / project..." />
              </div>
              <div>
                <button type="button" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">Send message</button>
              </div>
            </form>

            <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow">
              <h4 className="font-semibold">Quick links</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-300">
                <li>GitHub: <a href="#" className="text-red-400">github.com/yourusername</a></li>
                <li>LinkedIn: <a href="#" className="text-red-400">linkedin.com/in/yourname</a></li>
                <li>CodeSandbox / Demo: <a href="#" className="text-red-400">codesandbox.io</a></li>
              </ul>
              <div className="mt-6 text-xs text-gray-500">
                Tip: Replace placeholders with live links and upload screenshots of your projects in /public/projects
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 py-6 text-center text-sm text-gray-500 border-t border-gray-800">
          © {new Date().getFullYear()} {data.name} — Built with React + Tailwind (Dark Mode)
        </footer>
      </main>
    </div>
  );
}
