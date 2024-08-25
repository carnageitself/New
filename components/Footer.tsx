import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { Cover } from "./ui/Cover";
import { Clients } from "./Clients";
import { PinContainer } from "./ui/Pin";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the <Cover>next level?</Cover>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:carnageitself@gmail.com" className="md:mt-0 mt-10">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex md:mt-16 mt-5 md:flex-row flex-col-reverse justify-between items-center">
        <div className="md:text-base text-sm md:font-normal font-semibold flex-1 ">
          Copyright © 2024 Yash Harale
        </div>

        {/* <Clients /> */}

        <div className="flex items-center md:gap-14 gap-16 flex-1 justify-end">
          {socialMedia.map((info) => (
            <Link href={info.href}>
              <PinContainer
                title={info.title}
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </PinContainer>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
