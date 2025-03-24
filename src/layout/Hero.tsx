import GradientText from "../components/GradientText";
import ScrollVelocity from "../components/ScrollVelocity";
import Squares from "../components/Squares";

export const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="h-screen w-full flex flex-col justify-between">
        <ScrollVelocity
          texts={["The Sickest Dev", "Probably Ever"]}
          velocity={10}
          className="font-primary text-zinc-900 pointer-events-none select-none"
        />

        <div className="flex-1 relative items-center justify-center flex">
          <div className="absolure h-full w-full">
            <Squares
              speed={0.05}
              squareSize={60}
              direction="down" // up, down, left, right, diagonal
              borderColor="#40ffaa"
            />
          </div>
          <div className="w-full h-full absolute flex flex-col justify-center items-center gap-4 font-extrabold">
            <div className="w-full h-full flex flex-col justify-center items-center bg-radial to-75% from-bg-dark to-transparent">
              <h1 className="font-primary text-white">Rory Brown</h1>
              <h2 className="font-primary text-white italic">
                <GradientText
                  colors={[
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                  ]}
                  animationSpeed={3}
                  showBorder={false}
                  className="pointer-events-none select-none"
                >
                  - The sickest dev probably ever -
                </GradientText>
              </h2>
            </div>
          </div>
        </div>
        <ScrollVelocity
          texts={["The Sickest Dev", "Probably Ever"]}
          velocity={10}
          className="font-primary text-zinc-900 pointer-events-none select-none"
        />
      </div>
    </div>
  );
};
