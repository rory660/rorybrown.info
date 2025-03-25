import { Footer } from "./layout/Footer";
import { Hero } from "./layout/Hero";
import { TechnologiesSection } from "./layout/technologiesSection/TechnologiesSection";
import { WorkSection } from "./layout/WorkSection";

function App() {
  return (
    <div className="w-full flex flex-col items-center">
      <Hero />
      <TechnologiesSection />
      <WorkSection />
      <Footer />
    </div>
  );
}

export default App;
