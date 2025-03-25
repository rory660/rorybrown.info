import { gsap } from "gsap";
import { FC, JSX, useEffect, useRef, useState } from "react";

interface GridMotionProps {
  items?: (string | JSX.Element)[];
  gradientColor?: string;
}

const GridMotion: FC<GridMotionProps> = ({ items = [] }) => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const idleOffsetRef = useRef<number>(0); // Tracks the idle offset for slow movement
  const [isMouseOver, setIsMouseOver] = useState(false); // Tracks if the mouse is over the grid

  const totalItems = 32;
  const defaultItems = Array.from(
    { length: totalItems },
    (_, index) => `Item ${index + 1}`
  );
  const combinedItems =
    items.length > 0 ? items.slice(0, totalItems) : defaultItems;

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);

    const updateMotion = (): void => {
      const baseDuration = 1000; // Base duration for inertia
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2]; // Different inertia for each row, outer rows slower

      // Increment the idle offset for slow movement
      if (!isMouseOver) {
        idleOffsetRef.current += 0.1; // Adjust this value for slower or faster idle movement
      }

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1;

          // Calculate movement based on idle offset
          const moveAmount = isMouseOver
            ? 0 // Pause movement when mouse is over
            : Math.sin(idleOffsetRef.current / 100) * 2000 * direction; // Add slow oscillation when idle

          gsap.to(row, {
            x: moveAmount,
            duration:
              baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: "power3.out",
            overwrite: "auto",
          });
        }
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);

    return () => {
      removeAnimationLoop();
    };
  }, [isMouseOver]);

  return (
    <div
      ref={gridRef}
      className="h-screen w-full overflow-visible"
      onMouseEnter={() => setIsMouseOver(true)} // Pause motion when mouse enters
      onMouseLeave={() => setIsMouseOver(false)} // Resume motion when mouse leaves
    >
      <section className="w-full h-[150vh] -top-[25vh] overflow-visible relative flex items-center justify-center">
        {/* Noise overlay */}
        <div className="absolute inset-0 pointer-events-none z-[4] bg-[url('../../../assets/noise.png')] bg-[length:250px]"></div>
        <div className="gap-4 flex-none relative w-[130vw] h-[80vh] grid grid-rows-4 grid-cols-1 origin-center z-[2]">
          {Array.from({ length: 4 }, (_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid gap-4 grid-cols-8"
              style={{ willChange: "transform, filter" }}
              ref={(el) => {
                rowRefs.current[rowIndex] = el;
              }}
            >
              {Array.from({ length: 8 }, (_, itemIndex) => {
                const content = combinedItems[rowIndex * 8 + itemIndex];
                return (
                  <div key={itemIndex} className="relative">
                    <div className="relative w-full h-full overflow-hidden rounded-[10px] bg-[#111] flex items-center justify-center text-white text-[1.5rem]">
                      {typeof content === "string" &&
                      content.startsWith("http") ? (
                        <div
                          className="w-full h-full bg-cover bg-center absolute top-0 left-0"
                          style={{ backgroundImage: `url(${content})` }}
                        ></div>
                      ) : (
                        <div className="w-full h-full">{content}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="relative w-full h-full top-0 left-0 pointer-events-none"></div>
      </section>
    </div>
  );
};

export default GridMotion;
