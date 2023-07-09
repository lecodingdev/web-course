import { Route, Routes } from "react-router-dom"
import FooterComponent from "./components/FooterComponent"
import NavbarComponent from "./components/NavbarComponent"
import ClassPage from "./pages/ClassPage"
import FaqPage from "./pages/FaqPage"
import HomePage from "./pages/HomePage"
import TCPage from "./pages/TCPage"
import TestimonialPage from "./pages/TestimonialPage"

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/class" Component={ClassPage}/>
        <Route path="/testimonial" Component={TestimonialPage}/>
        <Route path="/faq" Component={FaqPage}/>
        <Route path="/tc" Component={TCPage}/>
      </Routes>

      <FooterComponent/>
    </div>
  )
}

export default App
