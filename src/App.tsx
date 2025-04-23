import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header"
import Home from "./components/Home"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="grid grid-cols-[3fr_4fr_3fr] p-4">
        <div></div>
        <div>
          <Header />
          <Home />
        </div>
        <div></div>
      </div>
    </ThemeProvider>
  )
}

export default App
