import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { BsDownload, BsGithub } from "react-icons/bs";
import { SiPrisma } from "react-icons/si";
import LogosTooltip from "./LogosTooltip";
import { Button } from "./ui/button";
import { GiTechnoHeart } from "react-icons/gi";
import LeftLogos from "./LeftLogos";

function HeroSection() {
  return (
    <section className="container px-4 py-2">
      <div className="headings flex justify-between mt-10 flex-col items-center">
        <h1 className="text-3xl font-bold">
          Lorem ipsum dolor sit amet consectetur{" "}
          <span className="bg-gradient-to-r from-[#ff0f7b] to-[#f89b29] text-clip bg-clip-text text-transparent">
            adipisicing
          </span>{" "}
          elit. Maxime{" "}
          <span className="bg-gradient-to-r from-[#696eff] to-[#f8acff] text-clip bg-clip-text text-transparent">
            libero officiis dolore.
          </span>
        </h1>
      </div>
      <p className="text-muted-foreground mt-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi ea rem
        nesciunt fugiat inventore quia adipisci impedit maxime neque!
        Necessitatibus fugit explicabo veritatis harum voluptatum adipisci
        provident repellat et quod?
      </p>
      <div className="mt-6 flex gap-4">
        <Button
          asChild
          //   className="bg-gradient-to-r from-[#ffa585] to-[#ffeda0]"
        >
          <Link
            href="https://hi-kartik2004.github.io/Portfolio/assets/pdf/Kartikeya_Resume_June_2023.pdf"
            target="_blank"
            className="flex items-center gap-2"
          >
            <BsDownload /> Download Resume
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link
            href="mailto:kudlu2004@gmail.com"
            className="flex gap-2 items-center"
          >
            {" "}
            <BiLogoGmail /> Contact Me
          </Link>
        </Button>
      </div>

      <div className="mt-12">
        <Button asChild variant="link" className="-ml-3">
          <Link
            href="https://github.com/hi-kartik2004"
            className=" flex gap-2 items-center"
          >
            <BsGithub className="h-5 w-5" />
            <h2 className="text-lg">My Contributions</h2>
            <span className="text-xs">[hi-kartik2004]</span>
          </Link>
        </Button>
        <div className="overflow-x-auto overflow-y-auto flex flex-grow w-full mt-4">
          <div className="scrolling-container">
            <img
              src="https://ghchart.rshah.org/f89b29/hi-kartik2004"
              alt="Github Chart"
              className="h-[120px] min-w-[700px]"
            />
          </div>
        </div>
      </div>
      <div className="mt-16">
        <div className="flex gap-2 items-center mb-6">
          <GiTechnoHeart />
          <h2 className="text-lg">Technologies Known</h2>
        </div>

        <LeftLogos className="mt-6" />

        <div className="flex gap-10 overflow-x-auto mt-4">
          <LogosTooltip icon="BiLogoPhp" message="PHP" />
          <LogosTooltip icon="SiCplusplus" message="C++" />
          <LogosTooltip icon="TbBrandFramerMotion" message="Framer Motion" />
          <LogosTooltip icon="BsGit" message="Git" />
          <LogosTooltip icon="SiRadixui" message="Radix UI" />
          <LogosTooltip icon="BiLogoFigma" message="Figma" />
          <LogosTooltip icon="FaUbuntu" message="Ubuntu" />
          <LogosTooltip icon="BsWindows" message="Windows" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
