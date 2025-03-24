import GradientText from "./components/GradientText";
import ScrollVelocity from "./components/ScrollVelocity";

function App() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="h-screen w-full flex flex-col justify-between">
        <ScrollVelocity
          texts={["The Sickest Dev", "Probably Ever"]}
          velocity={10}
          className="font-primary text-zinc-900"
        />
        <div className="w-full flex flex-col justify-center items-center gap-4 font-extrabold">
          <h1 className="font-primary text-white">Rory Brown</h1>
          <h2 className="font-primary text-white italic">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
            >
              - The sickest dev probably ever -
            </GradientText>
          </h2>
        </div>
        <ScrollVelocity
          texts={["The Sickest Dev", "Probably Ever"]}
          velocity={10}
          className="font-primary text-zinc-900"
        />
      </div>
    </div>
  );
}

export default App;
