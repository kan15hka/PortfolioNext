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
                Let's create something amazing together
              </h2>
              <p className="mt-2 text-sm md:text-base">
                Ready to bring your next project to life? Let's connect and
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

//  <div className="py-16 pt-12 lg:py-24 lg:pt-20">
//       <div className="container">
//         <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 px-10 py-8 rounded-3xl text-center md:text-left relative z-0 overflow-hidden">
//           <div
//             className="absolute inset-0 -z-10 opacity-5"
//             style={{ backgroundImage: `url(${grainImage.src})` }}
//           ></div>
//           <div className="flex flex-col gap-8 items-center md:flex-row md:gap-16 ">
// <div>
//   <h2 className="font-serif text-2xl md:text-3xl">
//     Let's create something amazing together
//   </h2>
//   <p className="mt-2 text-sm md:text-base">
//     Ready to bring your next project to life? Let's connect and
//     discuss how I can help you achieve your goals.
//   </p>
// </div>
//             <div>
//               <button
//                 onClick={onConactMeClicked}
//                 className="w-max text-white bg-gray-900 inline-flex gap-2 items-center px-6 h-12 rounded-xl  border border-gray-900 hover:bg-red-300"
//               >
// <span className="font-semibold">Contact Me</span>
// <ArrowRightUpIcon className="size-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//  <button
//    onClick={onConactMeClicked}
//    className="inline-flex items-center rounded-xl gap-2 border border-white/15 px-6 h-12 focus:outline-none hover:bg-white/10 transition-colors relative z-20"
//  >
//    <span className="font-semibold">My Resume</span>
//  </button>;
