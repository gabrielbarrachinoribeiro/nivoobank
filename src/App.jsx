import Header from './components/Header/Header'
import Hero from './Sections/Hero/Hero'
import Benefits from './Sections/Benefits/Benefits'
import Experience from './Sections/Experience/Experience'
import About from './Sections/About/About'
import Testimonials from './Sections/Testimonials/Testimonials'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Benefits/>
        <Experience/>
        <About/>
        <Testimonials/>
        <CTA/>
      </main>
      <Footer/>
    </>
  )
}

export default App
