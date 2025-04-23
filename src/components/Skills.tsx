import { motion } from "framer-motion"

const Skills = () => {
  const skills = [
      { name: "JavaScript", icon: "https://img.icons8.com/ios7/512/FFFFFF/javascript.png" },
      { name: "Express", icon: "https://img.icons8.com/ios7/512/FFFFFF/javascript.png" },
      { name: "React", icon: "https://img.icons8.com/ios_filled/512/FFFFFF/react-native.png" },
      { name: "Tailwind CSS", icon: "https://img.icons8.com/m_rounded/512/FFFFFF/tailwind_css.png" },
      { name: "Node.js", icon: "https://img.icons8.com/win10/600/FFFFFF/node-js.png" },
      { name: "MongoDB", icon: "https://companieslogo.com/img/orig/MDB.D-9b200438.png?t=1720244492" },
      { name: "Git", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Git-icon-white.svg/1200px-Git-icon-white.svg.png" },
      { name: "GitHub", icon: "https://www.svgrepo.com/show/452211/github.svg" },
    ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="p-6 dark:bg-[#212121] border dark:border-[#2c2c2c] rounded-md shadow-sm"
    >
      <div className="flex justify-between items-center mb-8">
        <p className="text-[#a1a1a1] font-medium">● Skills</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 text-sm px-3 py-4 dark:bg-[#2c2c2c] rounded-md text-center dark:hover:bg-[#3a3a3a] transition-colors duration-300 bg-[#f4f4f5]"
          >
            <img src={skill.icon} alt={skill.name} className="w-8 h-8 object-contain dark:invert-0 invert" />
            <div>{skill.name}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
