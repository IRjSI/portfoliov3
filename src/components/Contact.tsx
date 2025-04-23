import { GithubIcon, TwitterIcon } from "lucide-react";
import { motion } from "framer-motion"

const Contact = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="p-6 dark:bg-[#212121] border dark:border-[#2c2c2c] rounded-md shadow-sm"
      >
        <div className="flex justify-between items-center mb-8">
          <p className="text-[#a1a1a1] font-medium">● Contact</p>
          <p className="text-green-500 bg-green-500/20 px-2 rounded-sm">• Online</p>
        </div>
  
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-[#a1a1a1] mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 rounded-md dark:bg-[#2c2c2c] placeholder-[#888] border dark:border-[#3a3a3a] focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
  
          <div>
            <label className="block text-sm text-[#a1a1a1] mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-md dark:bg-[#2c2c2c] placeholder-[#888] border dark:border-[#3a3a3a] focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
  
          <div>
            <label className="block text-sm text-[#a1a1a1] mb-1">Message</label>
            <textarea
              rows={4}
              placeholder="Your message"
              className="w-full px-4 py-2 rounded-md dark:bg-[#2c2c2c] placeholder-[#888] border dark:border-[#3a3a3a] focus:outline-none focus:ring-1 focus:ring-green-500 resize-none"
            />
          </div>
  
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="flex flex-col justify-center items-center h-full mt-4">
            <p>Follow me:</p>
            <div className="flex gap-4 mt-4 font-light">
            <a href="https://x.com/_RjS_0" target="_blank" className="dark:bg-[#2b2b2b] border border-[#e4e4e7] dark:border-0 hover:bg-[#f4f4f5] px-2 py-2 rounded-sm font-light flex gap-2 items-center cursor-pointer dark:hover:bg-[#323232]"><TwitterIcon size={18} /></a>
            <a href="https://github.com/IRjSI" target="_blank" className="dark:bg-[#2b2b2b] border border-[#e4e4e7] dark:border-0 hover:bg-[#f4f4f5] px-2 py-2 rounded-sm font-light flex gap-2 items-center cursor-pointer dark:hover:bg-[#323232]"><GithubIcon size={18} /></a>
            </div>
        </div>
      </motion.div>
    );
  };
  
  export default Contact;
  