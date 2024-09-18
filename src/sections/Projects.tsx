import project1 from "@/assets/images/ceginduc.png";
import project2 from "@/assets/images/pound.jpg";
import project3 from "@/assets/images/tstore.jpg";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
const portfolioProjects = [
  {
    company: "CEG Anna University",
    year: "2024",
    title: "CEG Freshers Induction App",
    results: [
      {
        title: "Freshers App for students of CEG.",
      },
      { title: "Tech Stack: Flutter, Firebase." },
      { title: "CEG Tech Forum" },
    ],
    link: "https://github.com/OmprakashD20/ceg-induction-app",
    image: project1,
  },
  {
    company: "Fitness",
    year: "2024",
    title: "Pound - Fitness App",
    results: [
      { title: "A Fitness Move-to-Earn App Using NFTs." },
      { title: "Integration with wearables and Fitness APIs." },
      {
        title:
          "Tech Stack: Flutter, React, Solidity, Flask, NodeJs MonogoDB, tailwindCSS",
      },
    ],
    link: "https://github.com/kan15hka/Pound",
    image: project2,
  },
  {
    company: "ECommerce",
    year: "2023",
    title: "TStore - Ecommerce App",
    results: [
      { title: "A FullStack Ecommerce App for Small Scale Businesses." },
      { title: "Scalable and Performant with Great UI" },
      { title: "Tech Stack: Flutter, Firebase, GetX" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: project3,
  },
];
export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Real-world Results"
          eyebrow="Featured Projects"
          description=" See how I transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="pb-0 px-8 pt-8 md:px-10 md:pt-12 lg:pt-16 lg:px-20 sticky"
              style={{ top: `calc(64px + ${projectIndex * 40}px)` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text ">
                    <span>{project.company}</span> <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6 lg:size-6" />
                        <span className=" w-fit">{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="inline-flex md:w-auto px-6 items-center justify-center gap-2 mt-8 bg-white text-gray-950 rounded-xl w-full h-12 font-semibold">
                      <span>Github Link</span> <ArrowUpRightIcon />
                    </button>
                  </a>
                </div>
                <div className="relative z-0">
                  <Image
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg: h-full lg:w-auto lg:max-w-none  rounded-t-3xl"
                    src={project.image}
                    alt={project.title}
                  />
                  <Image
                    className="absolute h-full  lg:opacity-0 w-full object-cover z-10 inset-0 rounded-t-3xl opacity-5 "
                    src={grainImage}
                    alt={project.title}
                  />
                  {/* <div //className="absolute inset-0 z-10 opacity-25 " className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg: h-full lg:w-auto lg:max-w-none  rounded-t-3xl " style={{ backgroundImage: `url(${grainImage.src})` }} ></div> */}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
