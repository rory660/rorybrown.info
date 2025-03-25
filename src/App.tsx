import { Hero } from "./layout/Hero";
import { TechnologiesSection } from "./layout/TechnologiesSection";
import { WorkSection } from "./layout/WorkSection";

function App() {
  return (
    <div className="w-full flex flex-col items-center">
      <Hero />
      <TechnologiesSection />
      <WorkSection />
    </div>
  );
}

export default App;
