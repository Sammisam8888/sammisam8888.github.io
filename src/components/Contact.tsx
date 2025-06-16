
import { Github, Linkedin, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          Get In <span className="text-blue-400">Touch</span>
        </h2>
        
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <p className="text-xl text-gray-300 mb-8">
            Let's connect and discuss opportunities in backend development, AI/ML, or cloud infrastructure!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <a
              href="mailto:samuelpriyatamxd@gmail.com"
              className="flex flex-col items-center p-6 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors duration-200"
            >
              <Mail size={32} className="text-blue-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300 text-sm">samuelpriyatamxd@gmail.com</p>
            </a>
            
            <a
              href="https://linkedin.com/in/sammisam8888"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors duration-200"
            >
              <Linkedin size={32} className="text-blue-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-gray-300 text-sm">sammisam8888</p>
            </a>
            
            <a
              href="https://github.com/sammisam8888"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors duration-200"
            >
              <Github size={32} className="text-blue-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
              <p className="text-gray-300 text-sm">sammisam8888</p>
            </a>
          </div>
          
          <div className="text-gray-400">
            <p className="mb-2">📱 +91 9337903728</p>
            <p>📍 Bhubaneswar, India</p>
          </div>
        </div>
        
        <div className="mt-12 text-gray-500 text-center">
          <p>&copy; 2024 Samuel Priyatam Dash. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </section>
  );
};
