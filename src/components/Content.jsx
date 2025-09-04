import Contact from "./Contact"
import Experience from "./Experience"
import Footer from "./Footer"
import Hero from "./Hero"
import Services from "./Services"
import Skills from "./Skills"
import Works from "./Works"

const Content = () => {
  return (
    <main>
        <Hero />
        <Services />
        <Works />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
    </main>
  )
}
export default Content