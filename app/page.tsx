import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import FeaturedProjects from "@/components/featured-projects"
import WorkExperience from "@/components/work-experience"
import Skills from "@/components/skills"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black dark:bg-black bg-white relative overflow-hidden transition-colors duration-500">
      <Navbar />
      <Hero />
      <section id="work">
        <FeaturedProjects />
      </section>
      <section id="experience">
        <WorkExperience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}
