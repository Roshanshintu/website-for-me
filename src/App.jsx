import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Industries from './components/Industries';
import InteractiveVisual from './components/InteractiveVisual';
import Navbar from './components/Navbar';
import Process from './components/Process';
import Services from './components/Services';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <Process />
        <InteractiveVisual />
        <WhyChooseUs />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
