export function Skill() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCard
            title="Web Development"
            description="Proficient in developing web applications using technologies such as React.js, Express.js, Node.js, MongoDB, MySQL, and Docker."
          />
          <SkillCard
            title="Clean Coding"
            description="A deep appreciation for writing clean and maintainable code, prioritizing code readability, modularity, and scalability."
          />
          <SkillCard
            title="Teamwork and Communication"
            description="Experienced in working collaboratively as part of a team, with effective communication and adaptability in a professional setting."
          />
          <SkillCard
            title="Continuous Learning"
            description="Enthusiastic learner, actively staying up-to-date with the latest advancements and trends in software development."
          />
          <SkillCard
            title="Problem Solving"
            description="Strong problem-solving skills, with the ability to analyze complex problems and provide innovative and efficient solutions."
          />
          <SkillCard
            title="Frontend Development"
            description="Skilled in frontend development using HTML, CSS, JavaScript, and popular frameworks like React.js and Vue.js."
          />
        </div>
      </div>
    </div>
  );
}

type SkillCardProps = {
  title: string;
  description: string;
};

function SkillCard({ title, description }: SkillCardProps) {
  return (
    <div className=" rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
  );
}
