import Card from "./Card"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Card title="Web Developer" status="Available for work" heading="Hello there, 👋🏻" description="I'm a passionate web developer with a strong command of the MERN stack (MongoDB, Express.js, React, and Node.js). I love building robust, scalable, and intuitive web applications that solve real-world problems and offer seamless user experiences. My journey in web development has been fueled by curiosity, creativity, and a drive to constantly push the boundaries of what I can build. I thrive in environments where learning never stops and where I can collaborate with like-minded individuals to bring ambitious ideas to life. I'm always on the lookout for opportunities to grow, contribute to meaningful projects, and leave a lasting impact through code." img="https://avatars.githubusercontent.com/u/99244540?v=4" btn1="Hire me" />
    </motion.div>
  )
}

export default Home
