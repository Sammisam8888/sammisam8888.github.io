
import { ExternalLink } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Experience & <span className="text-blue-400">Training</span>
        </h2>
        
        <div className="space-y-8">
          {/* Internship Experience */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">Backend Developer Intern</h3>
                <p className="text-blue-400 font-medium">Codecis AI, USA</p>
              </div>
              <div className="text-gray-400 text-sm mt-2 md:mt-0">
                January - March, 2025
              </div>
            </div>
            
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Developed backend and integrated frontend for Western Capital Mortgage employee dashboard
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Implemented backend deployment pipelines for seamless collaboration in WCM project
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Implemented Flask and Docker for developing CRM (Customer Relationship Management) platform
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Deployed applications using AWS and Azure cloud services
              </li>
            </ul>
          </div>

          {/* Training & Courses */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl font-semibold text-white">IBM SkillsBuild Summer Internship</h4>
                <a
                  href="https://www.linkedin.com/posts/sammisam8888_dataanalytics-ibm-skillsbuild-activity-7236062822583975937-mcK7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESIWUIBBJoaAbQvYBE3lSIq4Idy0SPZ8xs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors duration-200"
                >
                  <ExternalLink size={16} className="text-white" />
                </a>
              </div>
              <p className="text-blue-400 text-sm mb-3">Specialization in Data Analytics</p>
              <p className="text-gray-300 text-sm">
                Gained expertise in data analysis, visualization, and business intelligence through project-based learning.
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl font-semibold text-white">Google Coursera</h4>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/O4PW1MOA7APE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors duration-200"
                >
                  <ExternalLink size={16} className="text-white" />
                </a>
              </div>
              <p className="text-blue-400 text-sm mb-3">Crash Course on Python</p>
              <p className="text-gray-300 text-sm">
                Covered Python programming, automation, OOP, and fundamental programming concepts with hands-on applications.
              </p>
            </div>
          </div>

          {/* Additional Training */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xl font-semibold text-white">ENCIDE MACE Coding Competition</h4>
              <a
                href="https://www.linkedin.com/posts/sammisam8888_certificate-of-participation-activity-7258092582675611649-Hh-5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESIWUIBBJoaAbQvYBE3lSIq4Idy0SPZ8xs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors duration-200"
              >
                <ExternalLink size={16} className="text-white" />
              </a>
            </div>
            <p className="text-gray-300 text-sm">
              Solved complex coding challenges, enhancing problem-solving, persistence, and collaboration skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
