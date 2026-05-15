import { Header } from './components/layout/Header';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { Footer } from './components/ui/Footer';

function App() {
  return (
    <div className="min-h-screen bg-canvas text-text antialiased">
      <div className="fixed inset-0 -z-10 bg-grain opacity-90" />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
