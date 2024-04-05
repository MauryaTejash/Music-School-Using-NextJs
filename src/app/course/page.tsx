"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

const MusicSchool = [
    {
      title: "Starting journey of Learning Guitar",
      description: (
        <>
          <p>
          Embarking on the journey of learning guitar involves several key steps. Begin by familiarizing yourself with the guitar's components, such as the body, neck, and strings. Learn how to tune the guitar properly, either with a tuner or by ear. Establishing correct posture and hand positioning is vital to avoid discomfort and injury while playing. 
          </p>
          <p>
          Start with basic chords and strumming patterns, gradually progressing to more complex techniques like fingerpicking and scales. Dedicate regular practice sessions to build muscle memory, improve rhythm, and enhance musicality. Stay patient, persistent, and enjoy the process of mastering this versatile instrument.
          </p>
        </>
      ),
      badge: "Start",
      image:
        "https://images.unsplash.com/photo-1518190171695-bbbb69c4a901?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Basic Chords",
      description: (
        <>
          <p>
          Basic chords are fundamental to guitar playing, forming the backbone of countless songs across various genres. They encompass open chords, barre chords, and power chords. Open chords like C, G, and D utilize open strings and are often the starting point for beginners. 
          </p>
          <p>
          Barre chords involve barring one finger across multiple strings, enabling versatility in changing keys. Power chords, consisting of the root and fifth notes, create a robust sound popular in rock and punk music. Mastering these chords lays a solid foundation for advancing guitarists to explore more complex harmonic structures.
          </p>
        </>
      ),
      badge: "Challenges",
      image:
        "https://images.unsplash.com/photo-1471523835123-1172efe5eaa1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Be a perfect Guitar Player",
      description: (
        <>
          <p>
          Becoming a perfect guitar player requires dedication, passion, and continual growth. Focus on mastering fundamental techniques such as chord changes, scales, and rhythm. Develop a keen ear for music by practicing listening and transcribing songs. Embrace challenges, learn from mistakes, and persistently refine your skills. 
          </p>
          <p>Experiment with different styles and genres to broaden your musicality. Cultivate creativity through improvisation and composing your music. Stay humble, open-minded, and always strive for improvement. Remember, perfection is subjective, but the journey towards excellence is rewarding and fulfilling.
            
          </p>
        </>
      ),
      badge: "Success",
      image:
        "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

function page(){
    return (
        <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {MusicSchool.map((item, index) => (
          <div key={`content-${index}`} className="mb-10 mt-20">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>
 
            <p className={twMerge("text-xl mb-4")}>
              {item.title}
            </p>
 
            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}
export default page