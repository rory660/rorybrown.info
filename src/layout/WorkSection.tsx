import ScrollFloat from "../components/ScrollFloat";

export const WorkSection = () => {
  return (
    <div className="w-full font-primary text-8xl relative z-10">
      <div className="w-full h-screen flex flex-col items-center">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          textClassName="font-extrabold"
        >
          Not enough for you? Check out my work experience!
        </ScrollFloat>
      </div>
    </div>
  );
};
