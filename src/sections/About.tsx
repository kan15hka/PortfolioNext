"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import profileImage from "@/assets/images/me.webp";
import nameImage from "@/assets/images/name.webp";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTML5Icon from "@/assets/icons/html5.svg";
import CSS3Icon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextIcon from "@/assets/icons/next.svg";
import FlutterIcon from "@/assets/icons/flutter.svg";
import GithubIcon from "@/assets/icons/github.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import InstagraIcon from "@/assets/icons/instagram.svg";
import KotlinIcon from "@/assets/icons/kotlin.svg";
import mapImage from "@/assets/images/map.webp";
import smileMemoji from "@/assets/images/memoji-smile.webp";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
import { LeetCodeData } from "@/components/LeetCodeData";
import { SocialsBox } from "@/components/SocialsBox";
const toolBoxItems = [
  {
    title: "HTML5",
    iconType: HTML5Icon,
  },
  {
    title: "CSS3",
    iconType: CSS3Icon,
  },
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "React Native",
    iconType: ReactIcon,
  },
  {
    title: "Flutter",
    iconType: FlutterIcon,
  },
  // {
  //   title: "Kotlin",
  //   iconType: KotlinIcon,
  // },

  {
    title: "Github",
    iconType: GithubIcon,
  },
];
const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "50%",
    top: "5%",
  },

  {
    title: "Dancing",
    emoji: "🕺",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "❤",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
];
export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20  lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="A Glimpse Into My World"
          title="About Me"
          description="Learn more about who I am, what I do,and what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Myself"
                description="Just a chill, curious guy from around the corner."
              />
              <div className=" flex justify-center items-center relative z-0">
                {/* <div className="absolute -z-10 text-4xl font-serif text-white/75  text-center w-full ">
                  KANISHKA
                </div>
                <div className="absolute z-10 text-4xl font-serif text-outline text-white/75   text-center w-full ">
                  KANISHKA
                </div> */}
                <div className="absolute -z-10 invert opacity-50 ">
                  <Image src={nameImage} alt="Name Cover" />
                </div>
                <div className="w-40 md:w-30 mx-auto">
                  <Image src={profileImage} alt="Profile Cover" />
                </div>
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                className=""
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
              />

              <ToolboxItems
                items={toolBoxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolBoxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                className="py-6 px-6"
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond digital realm."
              />

              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobbie) => (
                  <motion.div
                    key={hobbie.title}
                    className="absolute inline-flex items-center gap-2 px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full"
                    style={{ left: hobbie.left, top: hobbie.top }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobbie.title}
                    </span>
                    <span>{hobbie.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                className="h-full w-full object-cover object-left-top"
                src={mapImage}
                alt="Map"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2  after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  className=" size-20"
                  src={smileMemoji}
                  alt="Smile Memoji"
                />
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="Socials" description="Get in touch with me." />
              <SocialsBox />
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                className=""
                title="My Leetcode"
                description="Overview of my LeetCode performance."
              />

              <LeetCodeData />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
