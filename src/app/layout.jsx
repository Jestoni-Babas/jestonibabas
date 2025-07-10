'use client';

import "./globals.css";
import { useEffect } from 'react';
import Image from 'next/image';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Typewriter } from 'react-simple-typewriter';

export default function RootLayout() {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
<html lang="en" className="scroll-smooth scroll-p-24">

      <body>
        <div className="container m-auto w-screen">
        <div className="h-screen flex flex-col" id="aboutme">
          <div className="h-[70vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4 px-3">
            <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
              <nav className="flex justify-end space-x-2 p-4">
                <a href="#aboutme" className="text-slate-600 font-semibold py-1 px-3 rounded-tl-lg rounded-br-lg bg-slate-100 hover:text-white hover:text-shadow-lg hover:bg-blue-500 hover:shadow-lg transition">ABOUT ME </a>
                <a href="#whatido" className="text-slate-600 font-semibold py-1 px-3 rounded-tl-lg rounded-br-lg bg-slate-100 hover:text-white hover:text-shadow-lg hover:bg-blue-500 hover:shadow-lg transition">WHAT I DO </a>
                <a href="#projects" className="text-slate-600 font-semibold py-1 px-3 rounded-tl-lg rounded-br-lg bg-slate-100 hover:text-white hover:text-shadow-lg hover:bg-blue-500 hover:shadow-lg transition">PROJECTS </a>
                <a href="#skills" className="text-slate-600 font-semibold py-1 px-3 rounded-tl-lg rounded-br-lg bg-slate-100 hover:text-white hover:text-shadow-lg hover:bg-blue-500 hover:shadow-lg transition">SKILLS</a>
              </nav>
            </header>

            <div className="flex pt-20">
              <div className="left_pane">
                <Image
                  src="/images/jdb.png"
                  alt="My Image"
                  width={300}
                  height={300}
                  className="my_image rounded-md ml-[40px]"
                />
              </div>
              <div className="right_pane text-center p-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-100 ml-[10px]">
                  Yow! I'm <b className="text-white text-shadow-2xs">Jestoni De Ocampo Babas</b>
                </h1>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-100 ml-[10px]">
                  <Typewriter
                    words={['A Passionate WEB DEVELOPER!', 'Turning coffee into awesome website.', 'Enjoy your stay.']}
                    loop={0}
                    cursor
                    cursorStyle='_'
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </h1>
              </div>
            </div>
          </div>

          <div className="h-[30vh] bg-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 font-bold text-center mt-7">
              <span className="text-slate-900">"Do what you love</span><br />
              <span className="text-violet-500">Love what you do"</span>
            </h1>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="800" className="h-screen text-center font-bold text-shadow-lg text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" id="whatido">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-[50px]">WHAT I DO</h1>
            
        </div>

        <div data-aos="fade-up" data-aos-duration="800" className="h-screen text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" id="projects">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-[50px]">PROJECTS</h1>
        </div>

        <div data-aos="fade-up" data-aos-duration="800" className="h-screen text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" id="skills">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-[50px]">SKILLS</h1>
        </div>
      </div>
      </body>
    </html>
  );
}
