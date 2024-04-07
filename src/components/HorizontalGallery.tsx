"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const scroller = useRef<HTMLDivElement>(null); // Specify the type of the ref object
  const skills = useRef<HTMLDivElement>(null); // Specify the type of the ref object

  useEffect(() => {
    if (!scroller.current) return; // Ensure that the ref is initialized before using it

    let skillSet = gsap.utils.toArray('.skill-set');

    let to = gsap.to(skillSet, {
      xPercent: () => -100 * (skillSet.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (skillSet.length - 1),

        end: () => '+=' + window.innerWidth,
      },
    });

    return () => {
      to.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden flex">
      <div className="overflow-hidden ">
        <div
          id="skills"
          ref={scroller}
          className=" flex text-white w-[400vw] m-0 bg-background relative h-screen"
        >
          <section
            ref={skills}
            className="skill-set px-0 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <Image
              src="/logo.png"
              alt="1st image"
              layout="fill"
              objectFit="contain"
              className="max-w-[70vw] max-h-[60vh] mt-auto mb-auto"
            />
          </section>
          <section
            ref={skills}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <Image
              src="/logo.png"
              alt="2ndimage"
              layout="fill"
              objectFit="contain"
              className="max-w-[70vw] max-h-[60vh]  mt-auto mb-auto"
            />
          </section>
          <section
            ref={skills}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <Image
              src="/logo.png"
              alt="2ndimage"
              layout="fill"
              objectFit="contain"
              className="max-w-[70vw] max-h-[60vh]  mt-auto mb-auto"
            />
          </section>
          <section
            ref={skills}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <Image
              src="/logo.png"
              alt="2ndimage"
              layout="fill"
              objectFit="contain"
              className="max-w-[70vw] max-h-[60vh]  mt-auto mb-auto"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
