"use client";
import ArrowRightUpIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  const onConactMeClicked = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=kanishka2727@gmail.com",
      "_blank"
    );
  };
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 px-10 py-8 rounded-3xl text-center md:text-left ">
          <div className="flex flex-col gap-8 items-center md:flex-row md:gap-16 ">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let us create something amazing together
              </h2>
              <p className="mt-2 text-sm md:text-base">
                Ready to bring your next project to life? Let us connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <button
              onClick={onConactMeClicked}
              className="md:w-[300px] lg:w-[200px] flex items-center justify-center rounded-xl gap-2  px-6 h-12 bg-black hover:bg-gray-900 text-white transition-colors relative z-20"
            >
              <div className="font-semibold">Contact Me</div>
              <ArrowRightUpIcon className="size-4" />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
