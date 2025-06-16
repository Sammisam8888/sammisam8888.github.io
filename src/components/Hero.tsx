import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <img
              src="/lovable-uploads/5500e392-882c-41e7-a1b4-9606dc111397.png"
              alt="Samuel Priyatam Dash"
              className="w-40 h-40 rounded-full border-4 border-blue-400 shadow-2xl object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Samuel Priyatam <span className="text-blue-400">Dash</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Computer Science Engineering Student
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
            Backend Developer | AI/ML Enthusiast | Cloud Infrastructure Specialist
          </p>
          <p className="text-md text-gray-500 mb-8">
            📍 Bhubaneswar, India
          </p>
        </div>

        <div className="animate-fade-in flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/sammisam8888"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-200"
          >
            <Github size={24} className="text-white" />
          </a>
          <a
            href="https://linkedin.com/in/sammisam8888"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-200"
          >
            <Linkedin size={24} className="text-white" />
          </a>
          <a
            href="mailto:samuelpriyatamxd@gmail.com"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-200"
          >
            <Mail size={24} className="text-white" />
          </a>
        </div>

        <div className="animate-fade-in">
          <a
            href="#about"
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200"
          >
            Explore My Work
            <ArrowDown size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};
