import GithubIcon from "@/assets/icons/github.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import InstagraIcon from "@/assets/icons/instagram.svg";
import WhatsappIcon from "@/assets/icons/whatsapp.svg";
import { TechIcon } from "./TechIcon";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const socials = [
  {
    title: "LinkedIn",
    iconType: LinkedinIcon,
    href: "https://www.linkedin.com/in/kanishka-s-763062223/",
  },
  {
    title: "Github",
    iconType: GithubIcon,
    href: "https://github.com/kan15hka",
  },
  {
    title: "Whatsapp",
    iconType: WhatsappIcon,
    href: "https://wa.me/918072828935",
  },
];
export const SocialsBox = () => {
  return (
    <div className="px-6 flex flex-col gap-2 items-center ">
      {socials.map((social) => (
        <a
          href={social.href}
          key={social.title}
          target="_blank"
          className="w-full px-5"
        >
          <div>
            <div className="grid grid-cols-3 border border-white/15 border-2 p-2 rounded-xl hover:bg-gray-700">
              <div className="col-span-1  flex justify-center">
                <TechIcon className="size-8" component={social.iconType} />
              </div>
              <div className="col-span-2 flex items-center">
                <div className="inline-flex items-center gap-2">
                  <div>{social.title}</div>
                  <ArrowUpRightIcon className="size-4" />
                </div>{" "}
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};
{
  /* <div className="col-span-2 flex justify-end ">
            <div className="border border-white/15 border-2 p-2 px-4 rounded-l-xl">
              <TechIcon className="size-8" component={social.iconType} />
            </div>
          </div>
          <div className="  col-span-3 flex items-center justify-center ">
            <div className="font-serif text-white/60">{social.title}</div>
          </div>
          <div className="col-span-1">
            <div className="border border-white/15 border-2 p-2  rounded-r-xl">
              <a
                href="#"
                key={social.title}
                target="_blank"
                className="inline-flex items-center gap-1.5"
              >
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div> */
}
