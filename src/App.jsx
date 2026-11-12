import StarField from './components/StarField'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Planets from './components/Planets'
import Countdown from './components/Countdown'
import Nebulae from './components/Nebulae'
import Timeline from './components/Timeline'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <StarField />
      <Navbar />
      <main>
        <Hero />
        <Planets />
        <Countdown />
        <Nebulae />
        <Timeline />
      </main>
      <Footer />
    </div>
  )
}
