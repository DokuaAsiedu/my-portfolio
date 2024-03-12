import { FaGithub, FaLinkedin } from "react-icons/fa"

export function Socials() {
  return (
    <div className="flex flex-row justify-center align-center gap-4">
      <a href="https://github.com/DokuaAsiedu">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/a-dokua-asiedu-123224132/">
        <FaLinkedin />
      </a>
    </div>
  )
}
