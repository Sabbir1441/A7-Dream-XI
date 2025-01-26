import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter"


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="relative">
        <Newsletter></Newsletter>
        <Footer></Footer>
      </div>    </>
  )
}

export default App
