import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Home from "./components/Home"
import { Route, Routes } from "react-router-dom"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="grid grid-cols-[3fr_4fr_3fr] p-4">
        <div></div>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <div></div>
      </div>
    </ThemeProvider>
  )
}

export default App
