import Navbar   from './components/Navbar.jsx'
import Cursor   from './components/Cursor.jsx'
import Footer   from './components/Footer.jsx'
import Hero     from './sections/Hero.jsx'
import Marquee  from './sections/Marquee.jsx'
import About    from './sections/About.jsx'
import Toolbench from './sections/Toolbench.jsx'
import Work     from './sections/Work.jsx'
import Journey  from './sections/Journey.jsx'
import Services from './sections/Services.jsx'
import Contact  from './sections/Contact.jsx'

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Toolbench />
        <Work />
        <Journey />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
