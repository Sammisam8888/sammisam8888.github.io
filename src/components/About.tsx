
export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          About <span className="text-blue-400">Me</span>
        </h2>
        
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Profile Summary</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                A Computer Science Engineering student with expertise in backend development, 
                data analytics, AI/ML, and cloud infrastructure. Proficient in FastAPI, ReactJS, 
                SQLAlchemy, MongoDB, AWS, and Azure, with hands-on experience in server-side 
                management and deployment pipelines.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Passionate about AI-powered solutions, data-driven decision-making, and 
                full-stack development, with hands-on experience in various real-world projects.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-2">Education</h4>
                <div className="text-gray-300">
                  <p className="font-medium">Veer Surendra Sai University of Technology (VSSUT), Burla</p>
                  <p className="text-sm text-gray-400">B.Tech in Computer Science & Engineering</p>
                  <p className="text-sm text-blue-400">CGPA: 8.38 | 2023 - Present</p>
                </div>
              </div>
              
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-2">Contact</h4>
                <div className="text-gray-300 text-sm">
                  <p>📧 samuelpriyatamxd@gmail.com</p>
                  <p>📱 +91 9337903728</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
