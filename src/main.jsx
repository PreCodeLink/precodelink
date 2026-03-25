import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./PreCodeLink/pages/Home"
import Projects from "./PreCodeLink/pages/Projects"
import Services from "./PreCodeLink/pages/Services"
import About from "./PreCodeLink/pages/About"
import Contact from "./PreCodeLink/pages/Contact"
import NotFound from "./PreCodeLink/pages/NotFound"
import ScrollToTop from "./PreCodeLink/components/Top"

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)