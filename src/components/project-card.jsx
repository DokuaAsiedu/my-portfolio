import PropTypes from "prop-types"
import { Link } from "react-router-dom"

export function Card({ projectName, screenshot, href, className }) {
  return (
    <a href={href} target="_blank">
      <div
        className={`rounded-lg overflow-hidden shadow-black shadow-md ${className}`}>
        <img src={screenshot} alt="" className="w-full h-full"></img>
        <div className="p-1 flex flex-col items-center justify-center bg-white text-black">
          <p className="w-full text-xs text-center">{projectName}</p>
        </div>
      </div>
    </a>
  )
}

Card.propTypes = {
  projectName: PropTypes.string,
  screenshot: PropTypes.string,
  href: PropTypes.string,
}
