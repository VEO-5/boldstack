"use client";

/* Imports */
// Image component for optimized images in Next.js
import Image from "next/image";
// React hooks for state management and side effects
import { useState, useEffect } from 'react';

/* Main Component */
export default function Home() {
  /* Typewriter animation state */
  const words = ["Product Designer", "Web Developer", "UI/UX Designer", ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  /* Typewriter animation logic */
  useEffect(() => {
    const word = words[currentWordIndex];
    const speed = isDeleting ? 50 : 100; // faster erase speed

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // typing
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1));
        } else {
          // pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // erasing
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentWordIndex, currentText, isDeleting]);

  /* Render JSX */
  return (
<>
    {/* Hero section */}
    <section className="hero bg-[#040e48] min-h-screen flex items-center justify-center relative">
      <Image src="/hbg.jpg" width={1000} height={100} className="absolute left-1/2 top-[33px] -translate-x-1/2 -scale-y-100 rounded-[45px]" alt="Hero background" />
      <h1 className="absolute left-1/2 top-[239px] -translate-x-1/2 -translate-y-1/2 text-white text-[71px] font-normal text-center p-[5px] whitespace-nowrap" style={{ fontFamily: 'var(--font-dm-sans)' }}>Turning bold ideas into<br />real experiences.</h1>
      <p className="absolute left-1/2 top-[433px] -translate-x-1/2 -translate-y-1/2 text-black text-[24px] font-normal text-center p-[5px] whitespace-nowrap" style={{ fontFamily:  "'Fira Code', monospace" }}>I'm Emmanuel Eromosele - a {currentText}|</p>
      <button className="absolute left-1/2 top-[510px] -translate-x-1/2 bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 border border-white">Work with me</button>
    </section>
    {/* Tech Stack section */}
    <section className="tech-stack bg-[#040e48] text-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-6" style={{ fontFamily: 'var(--font-dm-sans)', color: '#68a7d9' }}>Powered by Innovation</h2>
        <p className="text-center text-gray-300 text-[23px] mb-8" style={{ fontFamily: 'var(--font-dm-sans)' }}>From design to deployment — here's the stack behind my creations</p>
        <div className="flex justify-center mb-8">
          <div className="flex flex-row justify-between w-full max-w-5xl">
            <div className="w-[100px] h-[100px] bg-[#212121] rounded-full flex items-center justify-center">
              <img src="/figma.svg" width="50" height="70" alt="Figma Logo" />
            </div>
            <div className="w-[100px] h-[100px] bg-[#212121] rounded-full flex items-center justify-center">
              <img src="/html5.svg" width="57" height="91" alt="Html5 Logo" />
            </div>
            <div className="w-[100px] h-[100px] bg-[#212121] rounded-full flex items-center justify-center">
              <img src="/openai.svg" width="60" height="91" alt="OpenAI Logo" />
            </div>
            <div className="w-[100px] h-[100px] bg-[#212121] rounded-full flex items-center justify-center">
              <img src="/react.svg" width="60" height="91" alt="React Logo" />
            </div>
            <div className="w-[100px] h-[100px] bg-[#212121] rounded-full flex items-center justify-center">
              <img src="nextjs.png" width="80" height="21" alt="Next.js Logo" />
            </div>
            <div className="w-[100px] h-[100px] bg-[#212121] rounded-full flex items-center justify-center">
              <img src="/vercel.svg" width="60" height="91" alt="Vercel Logo" />
            </div>
          </div>
        </div>
    </section>
    {/* Core Value section */}
    <section className="core-values bg-[#040e48] text-white min-h-screen flex flex-col gap-8">
      {/* Section 1 */}
      <div className="container py-20 px-4 flex-1 flex flex-col md:flex-row items-center justify-center">
        <div className="relative flex-shrink-0 translate-x-5 ml-10">
          <Image src="/hbg.jpg" width="500" height="319" alt="Core Values Background" className="rounded-[45px]" />
          <Image src="/hbg.jpg" width="500" height="319" alt="Duplicate Core Values Background" className="absolute right-[-50px] top-[45px] rounded-[45px] z-[1] object-contain" />
          <Image src="/rocket.png" width="256" height="256" alt="Rocket image" className="absolute left-[172px] top-[60px] z-[1] object-contain" />
        </div>
        <div className="text-left md:text-left flex-1 ml-40 translate-y-8">
          <p className="text-[45px] font-normal text-[#c1c6e2]" style={{ fontFamily: "'Fira Code', monospace" }}>
            Pushing boundaries with fresh, future-ready ideas
          </p>
        </div>
      </div>
      {/* Section 2 */}
      <div className="container py-20 px-6 flex-1 flex flex-col md:flex-row-reverse items-center justify-start md:ml-[-7rem]">
        <div className="relative flex-shrink-0 translate-x-0 ml-10">
          <Image src="/hbg.jpg" width="500" height="319" alt="Core Values Background" className="rounded-[45px] transform scale-x-[-1]" />
          <Image src="/hbg.jpg" width="500" height="319" alt="Duplicate Core Values Background" className="absolute right-[-50px] top-[45px] rounded-[45px] z-[1] object-contain [45px] transform scale-x-[-1]" />
          <Image src="/setting.png" width="256" height="256" alt="Rocket image" className="absolute right-[80px] top-[60px] z-[1] object-contain" />
        </div>
        <div className="text-left md:text-left flex-1 ml-40 translate-y-8">
          <p className="text-[45px] font-normal text-[#c1c6e2]" style={{ fontFamily: "'Fira Code', monospace" }}>
            Crafting scalable, clean, and reliable solutions
          </p>
        </div>
      </div>
      {/* Section 3 */}
      <div className="container py-20 px-4 flex-1 flex flex-col md:flex-row items-center justify-center">
        <div className="relative flex-shrink-0 translate-x-5 ml-10">
          <Image src="/hbg.jpg" width="500" height="319" alt="Core Values Background" className="rounded-[45px]" />
          <Image src="/hbg.jpg" width="500" height="319" alt="Duplicate Core Values Background" className="absolute right-[-50px] top-[45px] rounded-[45px] z-[1] object-contain" />
          <Image src="/handshake.png" width="256" height="256" alt="Rocket image" className="absolute right-[80px] top-[60px] z-[1] object-contain" />
        </div>
        <div className="text-left md:text-left flex-1 ml-40 translate-y-8">
          <p className="text-[45px] font-normal text-[#c1c6e2]" style={{ fontFamily: "'Fira Code', monospace" }}>
            Designing with purpose — solutions that create real change
          </p>
        </div>
      </div>
    </section>
    {/* Footer section */}
    <section className="contact bg-[#040e48] text-white py-20 px-4">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-dm-sans)', color: '#68a7d9' }}>Contact</h2>
        <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'var(--font-dm-sans)' }}>
          I'm currently looking to join a cross-functional team that values improving people's lives through accessible design. Or have a project in mind? Let's connect.
        </p>
        <a href="mailto:eeromosele@byupathway.edu" className="text-2xl font-normal hover:opacity-75 transition-opacity" style={{ fontFamily: "'Fira Code', monospace", color: '#c1c6e2' }}>
          eeromosele@byupathway.edu
        </a>
      </div>
    </section>
</>
  );
}
