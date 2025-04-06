import Navbar from "./components/Navbar"
import Content from "./components/Content"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

const App = () => {
  useEffect(() => {
    Aos.init({
      once: "true",
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic"
    })
  }, []);

  return (
    <>
      <Navbar />
      <Content />
    </>
  )
}

export default App