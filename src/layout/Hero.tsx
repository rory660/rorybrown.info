import GradientText from "../components/GradientText";
import ScrollVelocity from "../components/ScrollVelocity";
import Squares from "../components/Squares";
import TiltedCard from "../components/TiltedCard";

export const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="h-screen w-full flex flex-col justify-between">
        <ScrollVelocity
          texts={[
            "Backend. Frontend. Databases. APIs. Microservices. Web3. VR. Game Dev.",
            "Game Dev. VR. Web3. Microservices. Frontend. Backend.",
          ]}
          velocity={10}
          className="font-primary text-cyan-950 pointer-events-none select-none"
        />

        <div className="flex-1 relative items-center justify-center flex">
          <div className="absolute h-full w-full">
            <Squares
              speed={0.05}
              squareSize={60}
              direction="down" // up, down, left, right, diagonal
              borderColor="#40ffaa"
            />
          </div>
          <div className="w-full h-full max-w-[1080px] absolute flex flex-row justify-center gap-16 items-center font-extrabold bg-radial to-75% from-bg-dark to-transparent">
            <div className="h-full flex flex-col justify-center items-end gap-2">
              <h1 className="font-primary text-white select-none pointer-events-none text-6xl">
                Rory Brown
              </h1>
              <div className="font-primary flex flex-col items-end gap-4">
                <h2 className="text-base -mt-3 text-cyan-800">
                  <GradientText
                    colors={["#4079ff", "#40ffaa"]}
                    animationSpeed={8}
                    showBorder={false}
                    className="pointer-events-none select-none"
                  >
                    Senior Full Stack Engineer
                  </GradientText>
                </h2>
                <h2 className="font-primary text-white italic font-bold">
                  <GradientText
                    colors={["#4079ff", "#40ffaa"]}
                    animationSpeed={8}
                    showBorder={false}
                    className="pointer-events-none select-none"
                  >
                    - Founder @ VRcompare
                  </GradientText>
                  <GradientText
                    colors={["#4079ff", "#40ffaa"]}
                    animationSpeed={8}
                    showBorder={false}
                    className="pointer-events-none select-none"
                  >
                    - Backend & web3 @ LI.FI
                  </GradientText>
                </h2>
              </div>
            </div>
            <TiltedCard
              imageSrc="/rory.jpg"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={30}
              scaleOnHover={1.2}
              showMobileWarning={false}
            />
          </div>
        </div>
        <ScrollVelocity
          texts={[
            "Backend. Frontend. Databases. APIs. Microservices. Web3. VR. Game Dev.",
            "Game Dev. VR. Web3. Microservices. Frontend. Backend.",
          ]}
          velocity={10}
          className="font-primary text-cyan-950 pointer-events-none select-none"
        />
      </div>
    </div>
  );
};
