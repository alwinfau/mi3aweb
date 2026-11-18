import './global.css'
import {InteractiveHoverButton} from "./components/ui/interactive-hover-button.tsx";
import {AuroraText} from "./components/ui/aurora-text.tsx";
import {VideoText} from "./components/ui/video-text.tsx";
import {Confetti, type ConfettiRef} from "./components/ui/confetti.tsx";
import {useRef} from "react";
import {GridPattern} from "./components/ui/grid-pattern.tsx";
import {cn} from "./lib/utils.ts";

function App() {
    const confettiRef = useRef<ConfettiRef>(null)
  return (
    <>
      <InteractiveHoverButton>Interactive Hover Button</InteractiveHoverButton>
      <AuroraText>Belajar React</AuroraText>

        <div className="relative h-[500px] w-full overflow-hidden">
            <VideoText src="https://cdn.magicui.design/ocean-small.webm">POLMED</VideoText>
        </div>


        <div className="bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
      <span className="pointer-events-none bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10">
        Confetti
      </span>
            <Confetti
                ref={confettiRef}
                className="absolute top-0 left-0 z-0 size-full"
                onMouseEnter={() => {
                    confettiRef.current?.fire({})
                }}
            />
        </div>

        <div className="bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
            <GridPattern
                squares={[
                    [4, 4],
                    [5, 1],
                    [8, 2],
                    [5, 3],
                    [5, 5],
                    [10, 10],
                    [12, 15],
                    [15, 10],
                    [10, 15],
                    [15, 10],
                    [10, 15],
                    [15, 10],
                ]}
                className={cn(
                    "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
                )}
            />
        </div>
    </>
  )
}

export default App
