import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";
const testimonials = [
  {
    name: "Arun Kumar",
    position: "Lead Developer @ InnovateTech",
    text: "Working with Kanishka was a game-changer for our project. Their expertise in Flutter and UI/UX design elevated our app to new heights. Their attention to detail and problem-solving skills are exceptional.",
    avatar: memojiAvatar1,
  },
  {
    name: "Meera Lakshmi",
    position: "Founder @ TechSolutions",
    text: "Kanishka played a crucial role in developing our complex backend system. Their proficiency in handling large datasets and optimizing performance was instrumental in our success.",
    avatar: memojiAvatar2,
  },
  {
    name: "Karthik Raj",
    position: "Product Manager @ Digital Innovations",
    text: "I had the pleasure of collaborating with Kanishka on a challenging mobile app project. Their ability to translate complex requirements into elegant solutions made a significant impact on our product's success.",
    avatar: memojiAvatar3,
  },
  {
    name: "Saravanan V",
    position: "CTO @ Global Startups",
    text: "Kanishka's dedication to quality and innovation is remarkable. Their contributions to our AI integration project were invaluable, showcasing deep technical expertise and a proactive approach to problem-solving.",
    avatar: memojiAvatar4,
  },
  {
    name: "Divya Ramesh",
    position: "UX Designer @ Creative Designs",
    text: "I've had the pleasure of witnessing Kanishka's exceptional frontend skills firsthand. Their ability to create stunning and intuitive user interfaces sets them apart. Kanishka is truly a frontend wizard!",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Happy Clients"
          eyebrow="What Clients Say About Me"
          description="Don't just take my word for it. See what my clients have to say about my
        work"
        />

        <div className="mt-12 lg:mt-20 py-4 -my-4 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300 "
                  >
                    <div className="flex gap-4 items-center">
                      <div className="bg-gray-700 size-14 rounded-full inline-flex items-center justify-center flex-shrink-0">
                        <Image
                          className="max-h-full"
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6  text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
