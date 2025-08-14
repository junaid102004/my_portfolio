import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Download, Calendar, Building2, ExternalLink } from 'lucide-react';

// Sample data - replace with your actual data
const data = {
    about: "Passionate full-stack developer with 3+ years of experience creating modern web applications. I specialize in React, TypeScript, and Node.js, with a keen eye for user experience and performance optimization. I love turning complex problems into simple, beautiful, and intuitive solutions.",
    email: "junaidkhan610049@gmail.com",
    phone: "+91 (7877227800)",
    location: "Jodhpur Rajasthan, India",
    resume: "/resume.pdf"
};

const timelineItems = [
    {
        year: "2024",
        role: "Senior Frontend Developer",
        company: "TechCorp Inc.",
        description: "Led frontend architecture decisions, mentored junior developers, and improved application performance by 40%. Implemented modern React patterns and established component library standards.",
        achievements: ["40% performance improvement", "Component library creation", "Team mentorship"]
    },
    {
        year: "2023",
        role: "Frontend Developer",
        company: "StartupXYZ",
        description: "Built responsive web applications using React and TypeScript. Collaborated with design teams to implement pixel-perfect UIs and optimized bundle sizes by 30%.",
        achievements: ["30% bundle size reduction", "Pixel-perfect implementations", "Cross-team collaboration"]
    },
    {
        year: "2022",
        role: "Web Developer Intern",
        company: "Digital Agency",
        description: "Worked on client projects involving REST APIs, authentication systems, and interactive dashboards. Gained experience with modern development workflows and agile methodologies.",
        achievements: ["REST API integration", "Authentication systems", "Agile development"]
    }
];

function TimelineItem({ item, index }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), index * 200);
        return () => clearTimeout(timer);
    }, [index]);

    return (
        <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="absolute hidden md:block -left-2 sm:-left-3 top-0 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-2 sm:border-4 border-gray-900 shadow-lg transform transition-transform hover:scale-110"></div>

            <div className="ml-2 sm:ml-8 group">
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-white/20 hover:transform hover:scale-[1.02]">
                    <div className="flex items-start justify-between mb-3">
                        <div>
                            <div className="flex items-center gap-1 sm:gap-2 mb-1">
                                <Calendar className="w-4 h-4 text-purple-400" />
                                <span className="text-purple-400 font-medium text-xs sm:text-sm">{item.year}</span>
                            </div>
                            <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                                {item.role}
                            </h4>
                        </div>
                        <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    </div>

                    <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 flex items-center gap-2">
                        <span>{item.company}</span>
                    </p>

                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                        {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1 sm:gap-2">
                        {item.achievements.map((achievement, idx) => (
                            <span
                                key={idx}
                                className="text-xs bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 px-2 sm:px-3 py-1 rounded-full border border-purple-500/30"
                            >
                                {achievement}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
function ContactCard() {
    return (
        <div className='flex flex-col w-full justify-center items-center'>
            <div id='contact' className="bg-gradient-to-br w-[300px] xs:w-[350px] sm:w-full from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:border-white/30">
                
                {/* Header */}
                <div className="text-center mb-4 sm:mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-3 sm:mb-4 shadow-lg">
                        <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Let's Connect</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">Ready to collaborate on your next project</p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    
                    {/* Email */}
                    <a
                        href={`mailto:${data.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gray-800/50 border border-white/10 hover:border-purple-500/50 hover:bg-gray-800/80 transition-all duration-300 cursor-pointer"
                    >
                        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all">
                            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs text-gray-400 uppercase tracking-wide">Email</p>
                            <p className="text-sm sm:text-base text-white font-medium truncate group-hover:text-purple-300 transition-colors">
                                {data.email}
                            </p>
                        </div>
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                    </a>

                    {/* Phone */}
                    <a
                        href={`tel:7877227800`}
                        className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gray-800/50 border border-white/10 hover:border-green-500/50 hover:bg-gray-800/80 transition-all duration-300 cursor-pointer"
                    >
                        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg">
                            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs text-gray-400 uppercase tracking-wide">Phone</p>
                            <p className="text-sm sm:text-base text-white font-medium">{data.phone}</p>
                        </div>
                    </a>

                    {/* Location */}
                    <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.location)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gray-800/50 border border-white/10 hover:border-orange-500/50 hover:bg-gray-800/80 transition-all duration-300 cursor-pointer"
                    >
                        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg">
                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs text-gray-400 uppercase tracking-wide">Location</p>
                            <p className="text-sm sm:text-base text-white font-medium">{data.location}</p>
                        </div>
                    </a>
                </div>

                {/* Resume Button */}
                <a
                    href={data.resume}
                    download
                    className="group w-full inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base"
                >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
                    Download Resume
                </a>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

            <section className="relative mt-20 max-w-7xl mx-auto px-2 py-7 sm:px-6 sm:py-16">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-16">
                    <h3 className="text-3xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
                        About & Experience
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
                    <p className="mt-4 sm:mt-6 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
                        Discover my journey, skills, and the passion that drives my work
                    </p>
                </div>

                <div className="grid gap-6 sm:gap-8 lg:gap-16 lg:grid-cols-3">
                    {/* About & Timeline Section */}
                    <div className="lg:col-span-2 space-y-6 sm:space-y-8 lg:space-y-12">
                        {/* About Text */}
                        <div className='flex flex-col w-full justify-center items-center'>
                            <div className="bg-gradient-to-b w-[300px] xs:w-[350px] sm:w-full from-gray-800/40 to-gray-900/40 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 shadow-2xl">
                                <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                                        <span className="text-white text-xs sm:text-sm font-bold">👨‍💻</span>
                                    </div>
                                    About Me
                                </h4>
                                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                                    {data.about}
                                </p>
                            </div>
                        </div>
                        {/* Experience Timeline */}
                        <div className='flex flex-col w-full justify-center items-center'>
                        <div className="bg-gradient-to-br flex flex-col justify-center items-center  w-[300px] xs:w-[350px] sm:w-full from-gray-800/40 to-gray-900/40 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 shadow-2xl">
                            <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                                    <Calendar className="w-4 h-4 text-white" />
                                </div>
                                Professional Journey
                            </h4>

                            <div className="relative">
                                <div className="absolute hidden md:block left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 opacity-50"></div>
                                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                                    {timelineItems.map((item, index) => (
                                        <TimelineItem key={index} item={item} index={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Contact Card */}
                    <div className="lg:col-span-1">
                        <div className="lg:sticky lg:top-8">
                            <ContactCard />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;