import Navbar from "./components/Navbar"
import Content from "./components/Content"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

const App = () => {
  useEffect(() => {
    Aos.init({
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
      once: true
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