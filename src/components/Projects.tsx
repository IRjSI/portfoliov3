import ProjectCard from "./ProjectCard"

const Projects = () => {
  return (
    <div className="p-6 dark:bg-[#212121] border dark:border-[#2c2c2c] rounded-md h-full shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <p className="text-[#a1a1a1] font-medium">● Projects</p>
          <p className="text-green-500 bg-green-500/20 px-2 rounded-lg">• live</p>
        </div>
        <ProjectCard img="src\assets\Screenshot 2025-04-19 111923.png" name="Note-Cove" description="A note taking app with markdown support." />
        <ProjectCard img="src\assets\Screenshot 2025-04-19 111354.png" name="Portfolio v2" description="A modern and sleek portfolio" />
        <ProjectCard img="src\assets\Screenshot 2025-04-19 111354.png" name="Portfolio v1" description="A modern and sleek portfolio" />
    </div>
  )
}

export default Projects
