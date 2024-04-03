import { FaGithub, FaLinkedin } from "react-icons/fa"

export function Socials({ moreClasses }) {
  return (
    <div
      className={`container flex flex-row justify-center align-center gap-2 ${moreClasses}`}>
      <a href="https://github.com/DokuaAsiedu" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/a-dokua-asiedu-123224132/"
        target="_blank">
        <FaLinkedin />
      </a>
    </div>
  )
}
