const Contact = () => {
    return (
      <div className="p-6 dark:bg-[#212121] border dark:border-[#2c2c2c] rounded-md h-full shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <p className="text-[#a1a1a1] font-medium">● Contact</p>
          <p className="text-green-500 bg-green-500/20 px-2 rounded-lg">• Online</p>
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
      </div>
    );
  };
  
  export default Contact;
  