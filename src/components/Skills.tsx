
export const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "Python", "C++", "C"],
      color: "bg-green-500",
    },
    {
      category: "Frontend Technologies",
      skills: ["HTML", "CSS", "ReactJS", "Bootstrap", "Tailwind"],
      color: "bg-blue-500",
    },
    {
      category: "Backend Technologies",
      skills: ["FastAPI", "Flask", "Django", "REST API Development"],
      color: "bg-purple-500",
    },
    {
      category: "Databases",
      skills: ["MySQL", "SQLite", "MongoDB", "SQL"],
      color: "bg-orange-500",
    },
    {
      category: "AI/ML & Data Science",
      skills: ["Machine Learning", "Neural Networks", "Data Science", "Data Structures", "Algorithms"],
      color: "bg-red-500",
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD Pipelines", "Git"],
      color: "bg-cyan-500",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Technical <span className="text-blue-400">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`w-3 h-3 rounded-full ${category.color} mr-3`}></div>
                <h3 className="text-lg font-semibold text-white">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm hover:bg-slate-600 transition-colors duration-200"
                  >
                    {skill}
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
