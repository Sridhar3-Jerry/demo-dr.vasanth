import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import WhyChooseUs from './components/WhyChooseUs'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import TreatmentDetail from './components/TreatmentDetail'
import Contact from './components/Contact'
import AboutPage from './components/AboutPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <AboutUs />
            <Services />
            <Team />
            <Testimonials />
            <WhyChooseUs />
            <FAQ />
          </>
        } />
        <Route path="/treatment/:id" element={<TreatmentDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
