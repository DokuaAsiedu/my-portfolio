import { IoLogoJavascript } from "react-icons/io"
import { FaHtml5, FaReact, FaSass, FaBootstrap, FaPython } from "react-icons/fa"
import { FaCss3 } from "react-icons/fa6"
import { BiLogoTailwindCss } from "react-icons/bi"
import { SiPhp, SiMysql } from "react-icons/si"
import quotePic from "@/assets/rand-quote-gen.png"
import markPrev from "@/assets/markdown-previewer.png"
import drumPrev from "@/assets/drum-machine.png"
import calcPrev from "@/assets/calculator.png"
import clockPrev from "@/assets/clock.png"

export const LANGS = [
  <IoLogoJavascript />,
  // <FaHtml5 />,
  // <FaCss3 />,
  <FaReact />,
  <BiLogoTailwindCss />,
  // <FaSass />,
  // <FaBootstrap />,
  <SiPhp />,
  <SiMysql />,
  <FaPython />,
]

export const PROJECTS = [
  {
    name: "Random Quote Generator",
    screenshot: quotePic,
    href: "https://dokuaasiedu.github.io/rand-quote-previewer/",
  },
  {
    name: "Markdown Previewer",
    screenshot: markPrev,
    href: "https://dokuaasiedu.github.io/markdown-previewer",
  },
  {
    name: "Drum Machine",
    screenshot: drumPrev,
    href: "https://dokuaasiedu.github.io/drum-machine",
  },
  {
    name: "Calculator",
    screenshot: calcPrev,
    href: "https://dokuaasiedu.github.io/calculator",
  },
  {
    name: "25 + 5 Calculator",
    screenshot: clockPrev,
    href: "https://dokuaasiedu.github.io/break-session-clock",
  },
]
