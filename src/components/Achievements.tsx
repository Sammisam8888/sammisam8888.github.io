
import { ExternalLink } from "lucide-react";

export const Achievements = () => {
  const achievements = [
    {
      title: "Winner - Ideathon 2024",
      organization: "E-Cell, VSSUT",
      description: "Achieved first position",
      icon: "🏆",
      color: "bg-yellow-500",
    },
    {
      title: "Winner - Maze Hunt 2024",
      organization: "Robotics, VSSUT",
      description: "Achieved first position",
      icon: "🤖",
      color: "bg-green-500",
    },
    {
      title: "Winner - Shark Tank 2.0",
      organization: "SUIIT",
      description: "First prize for a fintech startup idea",
      icon: "💡",
      color: "bg-blue-500",
      link: "https://www.linkedin.com/posts/ecellvssut_vssut-ecellvssut-activity-7246912574728912897-B7Rn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESIWUIBBJoaAbQvYBE3lSIq4Idy0SPZ8xs",
    },
    {
      title: "Finalist - Udbhavanam 2024",
      organization: "IIM Sambalpur",
      description: "Presented a business model for stock market education",
      icon: "📈",
      color: "bg-purple-500",
    },
    {
      title: "All India Rank 60",
      organization: "E-Yantra 2024 (IIT Bombay)",
      description: "Robotics Competition",
      icon: "🏅",
      color: "bg-orange-500",
    },
    {
      title: "ML Hackathon Participant",
      organization: "IIT Bhubaneswar (Pravaah 2025)",
      description: "Built a model to detect AI-generated images",
      icon: "🧠",
      color: "bg-red-500",
      link: "https://www.linkedin.com/posts/sammisam8888_certificate-iit-bbs-ml-hackathon-activity-7321148450711003139-l9Y3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESIWUIBBJoaAbQvYBE3lSIq4Idy0SPZ8xs",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Achievements & <span className="text-blue-400">Recognition</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${achievement.color} rounded-full flex items-center justify-center mr-4`}>
                    <span className="text-2xl">{achievement.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
                    <p className="text-blue-400 text-sm">{achievement.organization}</p>
                  </div>
                </div>
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="text-white" />
                  </a>
                )}
              </div>
              
              <p className="text-gray-300 text-sm">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
