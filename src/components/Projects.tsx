import ProjectCard from "./ProjectCard"
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="p-6 dark:bg-[#212121] border border-t-2 dark:border-[#484848] dark:border-t-[#636363] rounded-md shadow-sm"
    >
      <div className="flex justify-between items-center mb-8">
        <p className="text-[#a1a1a1] font-medium">● Projects</p>
        <p className="text-green-500 bg-green-500/20 px-2 rounded-sm">• live</p>
      </div>
      <ProjectCard link="https://image-formater.vercel.app/" img="/image.png" name="Social Media Image Formator" description="A simple NextJS project for smartly converting images' format for socials" stacks={
        [
          {stack: "NextJS", logo: "https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png"},
          {stack: "TailwindCSS", logo: "https://img.icons8.com/m_rounded/512/FFFFFF/tailwind_css.png"},
          {stack: "Vercel", logo: "/vercel.svg"},
        ]
      } />
      <ProjectCard link="https://vidtube-fe.vercel.app" img="/Screenshot 2025-06-26 115310.png" name="VidTube" description="A platform for sharing not just videos but your thoughts too" stacks={
        [
          {stack: "React", logo: "https://img.icons8.com/ios_filled/512/FFFFFF/react-native.png"},
          {stack: "MongoDB", logo: "https://companieslogo.com/img/orig/MDB.D-9b200438.png?t=1720244492"},
          {stack: "Express", logo: "https://img.icons8.com/ios7/512/FFFFFF/javascript.png"},
          {stack: "Postman", logo: "/postman.svg"},
          {stack: "Render", logo: "https://us1.discourse-cdn.com/flex016/uploads/render/original/2X/1/11352202c8503f736bea5efb59684f678d7c860c.svg"},
        ]
      } />
      <ProjectCard link="https://rjsv3.vercel.app" img="/Screenshot 2025-04-23 161938.png" name="Portfolio v3" description="A modern and sleek Portfolio website" stacks={
        [
          {stack: "React", logo: "https://img.icons8.com/ios_filled/512/FFFFFF/react-native.png"},
          {stack: "TailwindCSS", logo: "https://img.icons8.com/m_rounded/512/FFFFFF/tailwind_css.png"},
          {stack: "Vercel", logo: "/vercel.svg"},
        ]
      } />
      <ProjectCard link="https://note-cove.vercel.app" img="/Screenshot 2025-04-19 111923.png" name="Note-Cove" description="A note taking app with markdown support" stacks={
        [
          {stack: "React", logo: "https://img.icons8.com/ios_filled/512/FFFFFF/react-native.png"},
          {stack: "Appwrite", logo: "https://appwrite.io/assets/logomark/logo.png"},
          {stack: "TailwindCSS", logo: "https://img.icons8.com/m_rounded/512/FFFFFF/tailwind_css.png"},
          {stack: "Vercel", logo: "/vercel.svg"},
        ]
      } />
      <ProjectCard link="https://rjsv2.vercel.app" img="/Screenshot 2025-04-19 111354.png" name="Portfolio v2" description="A modern and sleek portfolio" stacks={
        [
          {stack: "React", logo: "https://img.icons8.com/ios_filled/512/FFFFFF/react-native.png"},
          {stack: "TailwindCSS", logo: "https://img.icons8.com/m_rounded/512/FFFFFF/tailwind_css.png"},
          {stack: "Vercel", logo: "/vercel.svg"},
        ]
      } />
      <ProjectCard link="https://book-trakker.vercel.app" img="/Screenshot 2025-04-23 161807.png" name="Book Tracker" description="A book tracker web-app" stacks={
        [
          {stack: "React", logo: "https://img.icons8.com/ios_filled/512/FFFFFF/react-native.png"},
          {stack: "TailwindCSS", logo: "https://img.icons8.com/m_rounded/512/FFFFFF/tailwind_css.png"},
          {stack: "Vercel", logo: "/vercel.svg"},
        ]
      } />
      <ProjectCard link="/" img="/Screenshot 2025-01-17 161510.png" name="Movie Finder" description="A website to find about your favourite movies" stacks={
        [
          {stack: "React", logo: "https://img.icons8.com/ios_filled/512/FFFFFF/react-native.png"},
          {stack: "TailwindCSS", logo: "https://img.icons8.com/m_rounded/512/FFFFFF/tailwind_css.png"},
          {stack: "Vercel", logo: "/vercel.svg"},
        ]
      } />
      <p className="text-center">...</p>
    </motion.div>
  )
}

export default Projects
