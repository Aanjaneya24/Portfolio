import About from '../components/home/About';
import Experience from '../components/home/Experience';
import EducationSection from '../components/home/ExperienceEducation';
import Achievements from '../components/home/Certifications';
import { AllProjects } from '../components/home/AllProjects';
import Parallax from '../components/home/Parallax';
import SkillsParallax from '../components/home/SkillsParallax';
import Contact from '../components/home/Contact';

export default function Home() {
  return (
    <div className="overflow-x-hidden w-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <Parallax />
      </section>
      
      {/* About Section */}
      <section className="relative bg-white dark:bg-neutral-950 w-full">
        <About />
      </section>
      
      {/* Skills Section */}
      <section className="relative bg-neutral-50 dark:bg-black w-full">
        <SkillsParallax />
      </section>
      
      {/* Experience Section */}
      <section className="relative bg-white dark:bg-neutral-950 w-full">
        <Experience />
      </section>
      
      {/* Projects Section */}
      <section className="relative bg-neutral-50 dark:bg-black w-full">
        <AllProjects />
      </section>
      
      {/* Education Section */}
      <section className="relative bg-white dark:bg-neutral-950 w-full">
        <EducationSection />
      </section>
      
      {/* Achievements Section */}
      <section className="relative bg-neutral-50 dark:bg-black w-full">
        <Achievements />
      </section>
      
      {/* Contact Section */}
      <section className="relative bg-neutral-50 dark:bg-black w-full">
        <Contact />
      </section>
    </div>
  );
}
