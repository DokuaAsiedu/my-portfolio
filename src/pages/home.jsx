import { Background, Card } from "@/components"
import { Socials } from "@/components"
import { projects } from "@/utils/utils"
import Avatar from "@/assets/avatar.jpeg"
import { useState } from "react"
import { GrNext, GrPrevious } from "react-icons/gr"
import { LANGS, PROJECTS } from "@/config"
import HTMLFlipBook from "react-pageflip"

export default function Home() {
  const [cardNum, setCardNum] = useState(0)

  const next = () => {
    const currentValue = cardNum
    if (currentValue + 1 >= PROJECTS.length) {
      setCardNum(0)
      return
    }
    setCardNum(currentValue + 1)
  }

  const previous = () => {
    const currentValue = cardNum
    if (currentValue - 1 < 0) {
      setCardNum(PROJECTS.length - 1)
      return
    }
    setCardNum(currentValue - 1)
  }

  return (
    <div className="relative py-12 lg:h-screen">
      {/* <Background /> */}
      <div className="container h-full flex flex-col items-center justify-start gap-4 lg:grid lg:grid-cols-4 lg:gap-0">
        <div className="flex flex-col justify-center items-center lg:col-span-1">
          <div className="flex flex-col justify-start items-center gap-2">
            {/* <img
              src={Avatar}
              alt="#"
              className="aspect-square w-60 object-contain"
            /> */}
            <div className="flex flex-row items-center justify-center gap-2 text-xs">
              <p>Imagine</p>
              <span>|</span>
              <p>Code</p>
              <span>|</span>
              <p>Deploy</p>
            </div>

            <p className="text-sm">Hello All,</p>

            <h1 className="text-4xl">I am Dokua</h1>

            <p className="text-xs">Web Developer</p>

            <div className="flex flex-row items-center justify-center gap-1">
              {/* list of languages I know */}
              {LANGS.map((item, index) => {
                return <div key={`item-${index}`}>{item}</div>
              })}
            </div>

            <Socials />
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="grid grid-cols-5 place-items-center">
            {/* <HTMLFlipBook width={300} height={500}>
              {[1,2,3,4,5].map((item, index) => {
                <div className="demoPage">
                  <div>kjfdal;sdkjf</div>
                  <div>kjfdal;sdkjf</div>
                </div>
              })}
              
            </HTMLFlipBook> */}
            <button onClick={previous} className="col-span-1">
              <GrPrevious className="text-lg sm:text-3xl" />
            </button>
            <div className="col-span-3">
              {
                <Card
                  projectName={PROJECTS[cardNum].name}
                  screenshot={PROJECTS[cardNum].screenshot}
                  href={PROJECTS[cardNum].href}
                  className={""}
                />
              }
            </div>
            <button onClick={next} className="col-span-1">
              <GrNext className="text-lg sm:text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// export default function Home() {
//   return (
//     <div className="h-full min-h-screen grid grid-cols-2">
//       <div className="container relative h-full min-h-screen flex flex-col items-center justify-center gap-3">
//         <div className="flex flex-row items-center justify-center gap-2 text-xs">
//           <p>Imagine</p>
//           <span>|</span>
//           <p>Code</p>
//           <span>|</span>
//           <p>Deploy</p>
//         </div>

//         <p className="text-sm">Hello All,</p>

//         <h1 className="text-4xl">I am Dokua</h1>

//         <p className="text-xs">Web Developer</p>

//         <div className="flex flex-row items-center justify-center gap-1">
//           {/* list of languages I know */}
//           {LANGS.map((item, index) => {
//             return <div key={`item-${index}`}>{item}</div>
//           })}
//         </div>

//         <button className="p-2 border-white border-2 box-border">
//           My Projects
//         </button>

//         <Socials />
//       </div>

//       <div className="container h-full py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 content-start gap-4">
//         {PROJECTS.map((item, index) => {
//           return (
//             <div key={`item-${index}`} className="">
//               <Card
//                 projectName={item.name}
//                 screenshot={item.screenshot}
//                 href={item.href}
//               />
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }
