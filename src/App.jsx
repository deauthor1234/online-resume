import Navbar from "./components/Navbar"
import Content from "./components/Content"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

const App = () => {
  useEffect(() => {
    Aos.init({
      once: false,
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
      mirror: true
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