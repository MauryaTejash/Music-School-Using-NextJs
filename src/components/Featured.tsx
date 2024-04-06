'use client';
import Link from 'next/link'
import courseData from '../data/music_course.json'
import { Button } from './ui/moving-border'
import { BackgroundGradient } from './ui/background-gradient'
import Image from 'next/image';

interface Courses{
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
        image:string,
}

function Featured(){

    const featuredCourses = courseData.courses.filter((course:Courses) =>course.isFeatured)

    return(
        <div className='py-12 bg-gray-900'>
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSE</h2>

                    <p className="mt-2 mb-4 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn with the best</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center text-white">
                {featuredCourses.map((courses:Courses)=>(
                    <div key={courses.id} className="flex justify-center">
                        <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <Image key={courses.id} src={courses.image} height="400"
                                    width="400" className="object-contain" alt='hello' />
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200"> {courses.title}</p>

                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{courses.description}</p>

                                <Link href={`/course`}>
                                    Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>

            <div className='mt-20 text-center'>
                <Link href={'/courses'}>
                    <Button className="bg-white dark:bg-slate-900 text-blue dark:text-white border-neutral-200 dark:border-red-800">
                        View All Courses
                    </Button> 
                </Link>
            </div>
        </div>
    )
}

export default Featured