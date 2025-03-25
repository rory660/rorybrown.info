import { Hero } from "./layout/Hero";
import { TechnologiesSection } from "./layout/TechnologiesSection";

function App() {
  return (
    <div className="w-full flex flex-col items-center">
      <Hero />
      <TechnologiesSection />
    </div>
  );
}

export default App;
