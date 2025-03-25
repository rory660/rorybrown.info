import { TokenIcon } from "@web3icons/react";
import {
  BiLogoFigma,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { DiCss3 } from "react-icons/di";
import {
  FaAws,
  FaDigitalOcean,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaLinux,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaUnity,
  FaWordpress,
} from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiBlender,
  SiC,
  SiExpo,
  SiGoogleanalytics,
  SiNginx,
  SiPrisma,
  SiStrapi,
} from "react-icons/si";

import { ReactNode } from "react";
import { IconType } from "react-icons";
import { TbBrandAzure } from "react-icons/tb";
import GridMotion from "../../components/GridMotion";

const TechnologyCell = (props: {
  color: string;
  text: string;
  icon?: IconType;
  iconChild?: ReactNode;
  iconClassName?: string;
}) => (
  <div
    className="w-full h-full flex items-center justify-center flex-col group"
    style={{ background: props.color }}
  >
    {/* Fade out the children when hovered */}
    {/* <span className="pointer-events-none user-select-none block group-hover:opacity-0 transition-opacity duration-300"> */}
    {props.icon && (
      <props.icon className={props.iconClassName ?? "w-30 h-30"} />
    )}
    {props.iconChild}
    {/* </span> */}
    {/* Fade in the text when hovered */}
    <span className=" p-4 font-primary text-3xl w-full h-full text-center justify-center items-center flex font-bold pointer-events-none user-select-none absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full h-full bg-[#000000cc]">
      {props.text}
    </span>
  </div>
);

export const TechnologiesGrid = () => {
  // note: you'll need to make sure the parent container of this component is sized properly
  const items = [
    <TechnologyCell
      icon={BiLogoPostgresql}
      color="#3A6C94"
      text="PostgreSQL"
    />,
    <TechnologyCell icon={FaLinux} color="#080808" text="Linux" />,
    <TechnologyCell icon={FaAws} color="#FE9C15" text="Amazon Web Services" />,
    <TechnologyCell icon={FaDocker} color="#2A99ED" text="Docker" />,
    <TechnologyCell icon={FaReact} color="#67DAFB" text="React" />,
    <TechnologyCell
      icon={BiLogoTailwindCss}
      color="#41BEF8"
      text="TailwindCSS"
    />,
    <TechnologyCell icon={BiLogoMongodb} color="#24AC58" text="MongoDB" />,
    <TechnologyCell icon={FaGitAlt} color="#F0573A" text="Git" />,
    <TechnologyCell
      icon={FaDigitalOcean}
      color="#007CF7"
      text="DigitalOcean"
      iconClassName="w-30 h-30"
    />,
    <TechnologyCell icon={FaGithub} color="#080808" text="GitHub" />,
    <TechnologyCell
      icon={BiLogoTypescript}
      color="#387BC8"
      text="TypeScript"
    />,
    <TechnologyCell icon={RiNextjsFill} color="#080808" text="NextJS" />,
    <TechnologyCell icon={FaPython} color="#F3BD3A" text="Python" />,
    <TechnologyCell icon={FaHtml5} color="#E5532F" text="HTML5" />,
    <TechnologyCell
      iconChild={
        <TokenIcon symbol="eth" variant="mono" size="128" color="#FFFFFF" />
      }
      color="#1B1B1B"
      text="Ethereum / EVM"
    />,
    <TechnologyCell icon={FaUnity} color="#29333D" text="Unity" />,
    <TechnologyCell icon={SiPrisma} color="#153A51" text="Prisma" />,
    <TechnologyCell icon={FaJava} color="#EC941F" text="Java" />,
    <TechnologyCell
      icon={BiLogoJavascript}
      color="#F7E029"
      text="JavaScript"
    />,
    <TechnologyCell icon={SiNginx} color="#199940" text="Nginx" />,
    <TechnologyCell
      icon={DiCss3}
      color="#1472B6"
      text="CSS3"
      iconClassName="h-35 w-35"
    />,
    <TechnologyCell
      iconChild={
        <TokenIcon symbol="sui" variant="mono" size="128" color="#FFFFFF" />
      }
      color="#53A5FF"
      text="Sui / Move"
    />,
    <TechnologyCell icon={SiC} color="#0C4A86" text="C" />,
    <TechnologyCell icon={BiLogoFigma} color="#F35328" text="Figma" />,
    <TechnologyCell icon={FaPhp} color="#7B7FB6" text="PHP" />,
    <TechnologyCell icon={SiStrapi} color="#4E4BFE" text="Strapi" />,
    <TechnologyCell
      icon={SiGoogleanalytics}
      color="#E47816"
      text="Google Analytics"
    />,
    <TechnologyCell icon={TbBrandAzure} color="#2B77BA" text="Azure" />,
    <TechnologyCell icon={SiBlender} color="#EA7A16" text="Blender" />,
    <TechnologyCell icon={FaWordpress} color="#2A789D" text="WordPress" />,
    <TechnologyCell icon={FaNodeJs} color="#5AA14A" text="NodeJS" />,
    <TechnologyCell icon={SiExpo} color="#4C36EC" text="Expo" />,
  ];

  return <GridMotion items={items} />;
};
