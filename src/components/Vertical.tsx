"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

function App() {
  const scroller = useRef<HTMLDivElement>(null);
  const skills = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!scroller.current) return;

    const trigger = scroller.current;
    const skillSet = skills.current;
    const skillCount = skillSet.length;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      for (let i = 0; i < skillCount; i++) {
        const skill = skillSet[i];
        const rect = skill.getBoundingClientRect();
        const offsetY = scrollTop + rect.top;

        const progress = Math.max(0, Math.min(1, (offsetY - window.innerHeight) / (window.innerHeight * 0.5)));

        gsap.to(skill, {
          y: -progress * (skillCount - 1 - i) * 100,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Ref callback for skills
  const setSkillRef = (el: HTMLDivElement) => {
    if (el) skills.current.push(el);
  };

  return (
    <div className="overflow-hidden flex">
      <div className="overflow-hidden">
        <div
          id="skills"
          ref={scroller}
          className="flex text-white w-full m-0 bg-background relative h-screen overflow-y-auto"
        >
          <section
            ref={setSkillRef}
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
            ref={setSkillRef}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <Image
              src="/logo.png"
              alt="2nd image"
              layout="fill"
              objectFit="contain"
              className="max-w-[70vw] max-h-[60vh]  mt-auto mb-auto"
            />
          </section>
          <section
            ref={setSkillRef}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <Image
              src="/logo.png"
              alt="3rd image"
              layout="fill"
              objectFit="contain"
              className="max-w-[70vw] max-h-[60vh]  mt-auto mb-auto"
            />
          </section>
          <section
            ref={setSkillRef}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <Image
              src="/logo.png"
              alt="4th image"
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
