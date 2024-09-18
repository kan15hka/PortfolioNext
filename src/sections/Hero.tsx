"use client";
import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  const onLetsConnectClick = () => {
    console.log("Let's Connect clicked");
    const anchor = document.querySelector("#contact");
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onResumeClicked = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "KanishkaS_resume.pdf";
    link.click();
  };

  return (
    <div className="py-32 md:py-48 lg:py-60 relative overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          shouldSpin
          orbitDuration="30s"
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          shouldSpin
          orbitDuration="32s"
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          shouldSpin
          orbitDuration="36s"
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          shouldSpin
          orbitDuration="38s"
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          shouldSpin
          orbitDuration="40s"
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          shouldSpin
          orbitDuration="44s"
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          shouldSpin
          orbitDuration="46s"
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="Developer" />
          <div className="bg-gray-950 border border-gray-800 inline-flex items-center gap-4 px-4 py-1.5 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 size-2.5 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="mt-8 font-serif text-3xl md:text-5xl tracking-wide text-center">
            Hi, I’m Kanishka{" "}
          </h1>
          <p className="mt-4 text-center md:text-lg text-white/60">
            Crafting innovative and responsive web & mobile apps. Passionate
            about creating engaging and intuitive UI/UX, I turn concepts into
            beautifully functional designs.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button
            onClick={onResumeClicked}
            className="inline-flex items-center rounded-xl gap-2 border border-white/15 px-6 h-12 focus:outline-none hover:bg-white/10 transition-colors relative z-20"
          >
            <span className="font-semibold">My Resume</span>
            <ArrowDown className="size-4" />
          </button>
          <button
            onClick={onLetsConnectClick}
            className="inline-flex items-center rounded-xl text-gray-900 gap-2 border border-white bg-white px-6 h-12 focus:outline-none hover:bg-gray-100 transition-colors relative z-20"
          >
            <div>👋</div>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
