import { GithubIcon, TwitterIcon } from "lucide-react";
import { motion } from "framer-motion"
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      // Replace this URL with your email API endpoint (e.g., EmailJS, Formspree, Resend, etc.)
      const res = await fetch("https://formspree.io/f/xldnnbdz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (!res.ok) throw new Error("Failed to send message");
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="p-6 dark:bg-[#212121] border border-t-2 dark:border-[#484848] dark:border-t-[#636363] rounded-md shadow-sm"
      >
        <div className="flex justify-between items-center mb-8">
          <p className="text-[#a1a1a1] font-medium">● Contact</p>
          <p className="text-green-500 bg-green-500/20 px-2 rounded-sm">• Online</p>
        </div>
  
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-[#a1a1a1] mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={(e) => handleChange(e)}
              placeholder="Your name"
              className="w-full px-4 py-2 rounded-md dark:bg-[#2c2c2c] placeholder-[#888] border dark:border-[#3a3a3a] focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
  
          <div>
            <label className="block text-sm text-[#a1a1a1] mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={(e) => handleChange(e)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-md dark:bg-[#2c2c2c] placeholder-[#888] border dark:border-[#3a3a3a] focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
  
          <div>
            <label className="block text-sm text-[#a1a1a1] mb-1">Message</label>
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={(e) => handleChange(e)}
              placeholder="Your message"
              className="w-full px-4 py-2 rounded-md dark:bg-[#2c2c2c] placeholder-[#888] border dark:border-[#3a3a3a] focus:outline-none focus:ring-1 focus:ring-green-500 resize-none"
            />
          </div>
  
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition duration-300"
            disabled={loading}
          >
            Send Message
          </button>

          {success && (
            <p className="text-green-500">Message sent successfully!</p>
          )}

          {error && (
            <p className="text-red-500">Something went wrong</p>
          )}
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
  