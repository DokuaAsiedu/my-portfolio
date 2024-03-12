import PropTypes from "prop-types"
import { Link } from "react-router-dom"

export function Card({ projectName, screenshot, href }) {
  return (
    <Link
      to={href}
      className="h-52 grid grid-rows-[80%_20%] border-2 border-black">
      <img src={screenshot} alt="" className="w-full h-full"></img>
      <div className="flex flex-col items-center justify-center">
        <p className="w-full text-center">{projectName}</p>
      </div>
    </Link>
  )
}

Card.propTypes = {
  projectName: PropTypes.string,
  screenshot: PropTypes.string,
  href: PropTypes.string,
}
