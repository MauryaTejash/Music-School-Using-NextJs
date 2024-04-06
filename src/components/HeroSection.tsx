import Link from "next/link"
import { Spotlight } from "./ui/Spotlite"
import { Button } from "./ui/moving-border"

function HeroSection(){
    return(
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            {/* this will bring the light effect when scroll */}
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="purple"
        />
            
            <div className="p-4 relative z-10 w-full text-center text-white">

                <h1  className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master the art Of Music</h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-3xl mx-auto">Mastering the art of music is a lifelong pursuit requiring dedication and passion. Start by learning music theory, mastering an instrument, and practicing regularly. Explore various genres, study masterpieces, and innovate by experimenting with different sounds and styles. Collaborate with other musicians, seek feedback, and perform regularly to build confidence and stage presence. Stay inspired by attending concerts, reading, and engaging with the music community. Remember, it's a journey of continuous learning and growth, so embrace creativity, stay curious, and never stop honing your musical skills.</p>
                <div className="mt-4">
                    <Link href={'/courses'}>
                        <Button borderRadius="1.75rem"
                        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
                            
                            Explore Courses
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default HeroSection