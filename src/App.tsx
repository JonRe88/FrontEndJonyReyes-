import Navbar from './components/Navbar';
import Hero from './components/Hero'
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StackingCards from './components/StackingCards';
import Projects2 from './components/Projects2';
import Logos from './components/Logos';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar /> 
          <main>
     <section id="home">
      <Hero />
     </section>
       <section id="about">
      <About />
       </section>
       <section id="stackingcards">
        <StackingCards />
       </section>

         <Skills />
         <section id="projects">
 <Projects /> 
 <Projects2/>
         </section>
         <Logos/>
       <section id="contact">
        <Contact />
       </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
