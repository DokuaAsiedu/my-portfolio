import { FaFreeCodeCamp } from "react-icons/fa"
import { TfiFullscreen } from "react-icons/tfi"
import PropTypes from "prop-types"
import { sampleText } from "@/utils/markdown-previewer/sample-text"
import { useEffect, useState } from "react"
import { marked } from "marked"
import DOMPurify from "dompurify"
import { BackToHome } from "@/components"

export function MarkdownPreviewer() {
  const [content, setContent] = useState(sampleText)
  const [editorFullScreen, setEditorFullScreen] = useState(false)
  const [previewerFullScreen, setPreviewerFullScreen] = useState(false)

  const handleChange = (event) => {
    setContent(event.target.value)
  }

  const handleEditor = () => {
    setEditorFullScreen((prev) => !prev)
  }

  const handlePreview = () => {
    setPreviewerFullScreen((prev) => !prev)
  }

  useEffect(() => {
    console.log(editorFullScreen)
  })

  return (
    <div className="flex flex-col items-center justify-start gap-4 p-8 h-full min-h-screen bg-[#87B5B5] relative">
      <BackToHome />
      {!previewerFullScreen && (
        <div
          className={`w-2/5 flex flex-col items-stretch justify-start overflow-y-auto ${editorFullScreen ? "flex-1" : ""}`}>
          <TitleBar title="Editor" handleClick={handleEditor} />
          <textarea
            onInput={handleChange}
            className={`w-full h-full min-h-52 p-2 bg-[#C0D7D8] resize-none rounded-b-md overflow-y-auto ${editorFullScreen ? "flex-1" : ""}`}
            defaultValue={content}></textarea>
        </div>
      )}
      {!editorFullScreen && (
        <div
          className={`w-3/5 flex flex-col items-stretch justify-start overflow-y-auto ${previewerFullScreen ? "flex-1" : ""}`}>
          <TitleBar title="Previewer" handleClick={handlePreview} />
          <div
            className={`w-full h-full min-h-60 px-4 pt-2 pb-4 bg-[#C0D7D8] rounded-b-md overflow-y-auto ${previewerFullScreen ? "flex-1" : ""}`}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(marked.parse(content)),
            }}></div>
        </div>
      )}
    </div>
  )
}

// function Interface({ title, content, className }) {
//   return (
//     <div
//       className={`h-60 flex flex-col items-stretch justify-start ` + className}>
//       <div className="w-full h-min flex flex-row items-end justify-start gap-2 bg-[#4AA3A3] p-2 rounded-t-md">
//         <FaFreeCodeCamp />
//         <span className="inline-block align-bottom">{title}</span>
//         <TfiFullscreen className="ms-auto" />
//       </div>
//       <textarea className="w-full h-full p-2 overflow-y-auto bg-[#C0D7D8] resize-none rounded-b-md">
//         {content}
//       </textarea>
//     </div>
//   )
// }

function TitleBar({ title, handleClick }) {
  return (
    <div className="w-full h-min flex flex-row items-end justify-start gap-2 bg-[#4AA3A3] p-2 rounded-t-md">
      <FaFreeCodeCamp />
      <span className="inline-block align-bottom">{title}</span>
      <TfiFullscreen className="ms-auto" onClick={handleClick} />
    </div>
  )
}

// Interface.propTypes = {
//   content: PropTypes.string,
//   title: PropTypes.string,
//   className: PropTypes.string,
// }

TitleBar.propTypes = {
  title: PropTypes.string,
  handleClick: PropTypes.func,
}
