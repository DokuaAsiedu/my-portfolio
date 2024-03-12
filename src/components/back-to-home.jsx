import { IoReturnUpBack } from "react-icons/io5"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

export function BackToHome({ className }) {
  return (
    <Link
      to="/"
      className={
        `flex flex-row items-center justify-start gap-4 fixed top-4 left-4 bg-black text-white py-2 px-4 rounded-md ` +
        className
      }>
      <IoReturnUpBack />
      <span>Back to Home</span>
    </Link>
  )
}

BackToHome.propTypes = {
  className: PropTypes.string,
}
