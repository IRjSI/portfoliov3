import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Home from "./components/Home"
import { Route, Routes } from "react-router-dom"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
import Visitor from "./components/Visitor"

function App() {

  // useGSAP(() => {
  //   gsap.to("#green-box", {
  //     x: 600,
  //     borderRadius: "47%",
  //     rotation: 360,
  //     duration: 2,
  //     repeat: -1,
  //     yoyo: true,
  //     ease: "back.inOut"
  //   })
  // }, [])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="px-4 py-4 font-satoshi min-h-screen relative">

        <div className="max-w-[600px] mx-auto">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Visitor />
          {/* <div className="w-4 h-4 bg-green-500 rounded absolute bottom-1" id="green-box" /> */}
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
