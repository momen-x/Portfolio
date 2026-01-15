import AboutPage from "./(pages)/about/page";
import WorkPage from "./(pages)/work/page";
import Contact from "./_Components/Contact/Contact";
import Experience from "./_Components/Experience";
import Feedback from "./_Components/Feedback";
import Footer from "./_Components/footer";
import HeroSection from "./_Components/Hero";
import Tech from "./_Components/Tech";

export default function Home() {
  return (
    <div>
          

      <div id="">

      <HeroSection />
      </div>
      <div id="about">
        <AboutPage />
     
      <Experience />
      <Tech />
       </div>
      <div id="work">
        <WorkPage />
      </div>
      <Feedback />
      <div id="contact">
        <Contact />
      </div>
      {/* <StarsCanvas /> */}
      <Footer />
    </div>
  );
}
