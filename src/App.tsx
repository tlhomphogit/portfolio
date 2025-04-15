import Navbar from './components/Navbar'
import SocialBar from './components/SocialBar'
import Hero from './components/Hero'
import './App.css'
import Technologies from './components/Technologies'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
    return (
        <>
        <Navbar />
        <SocialBar/>
         <div id="home" className="mx-auto pt-20 px-6">
        <Hero />
        </div>
        <Technologies/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer />
        </>
    )
}

export default App
