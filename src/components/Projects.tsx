
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Face Scanner using AI/ML",
      description: "Developed an AI-powered face recognition system using Python and Machine Learning, implementing facial detection and recognition algorithms for real-time identification.",
      technologies: ["Python", "Machine Learning", "Computer Vision", "Real-time Processing"],
      icon: "🤖",
      github: "https://github.com/Sammisam8888/face-scanner",
    },
    {
      title: "Attendance App",
      description: "Worked on the frontend development of a Flutter-based mobile app, collaborating with backend developers to ensure seamless data flow and API integration.",
      technologies: ["Flutter", "API Integration", "Mobile Development", "Frontend"],
      icon: "📱",
      github: "https://github.com/Sammisam8888/Attendance-App",
    },
    {
      title: "Library Management System",
      description: "Designed and developed a comprehensive library management system, implementing features like book issuance, returns, and fine calculations with a robust backend for data integrity.",
      technologies: ["Backend Development", "Database Design", "System Architecture", "Data Integrity"],
      icon: "📚",
      github: "https://github.com/Sammisam8888/library-management-system",
    },
    {
      title: "AI-Generated Image Detection System",
      description: "Built a deep learning model to classify real vs AI-generated images using PyTorch, with a focus on adversarial robustness; developed during the ML Hackathon at IIT Bhubaneswar (Pravaah 2025).",
      technologies: ["PyTorch", "Deep Learning", "Computer Vision", "Adversarial ML"],
      icon: "🖼️",
      github: "https://github.com/Sammisam8888/ml-hackathon-iitbbs2025",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Featured <span className="text-blue-400">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-3xl mr-3">{project.icon}</span>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors duration-200"
                >
                  <Github size={20} className="text-white" />
                </a>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
