import { Background, Card } from "@/components"
import { Socials } from "@/components"
import { projects } from "@/utils/utils"
import Avatar from "@/assets/avatar.jpeg"
import { useState } from "react"
import { GrNext, GrPrevious } from "react-icons/gr"

export default function Home() {
  const [cardNum, setCardNum] = useState(0)

  const next = () => {
    const currentValue = cardNum
    if (currentValue + 1 >= projects.length) {
      setCardNum(0)
      return
    }
    setCardNum(currentValue + 1)
  }

  const previous = () => {
    const currentValue = cardNum
    if (currentValue - 1 < 0) {
      setCardNum(projects.length - 1)
      return
    }
    setCardNum(currentValue - 1)
  }

  return (
    <div className="relative py-12 lg:h-screen">
      {/* <Background /> */}
      <div className="container h-full flex flex-col items-center justify-start lg:grid lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-start items-center gap-4">
            {/* <img
              src={Avatar}
              alt="#"
              className="aspect-square w-60 object-contain"
            /> */}
            <div className="text-lg font-bold">
              <p>Imagine</p>
              <p>Code</p>
              <p>Deploy</p>
            </div>
            <p>
              Hello, I am Dokua and I am front end developer with a focus on
              React. Welcome to my portfolio page and browse through my work.
            </p>
            <Socials />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-5 place-items-center">
            <button onClick={previous} className="col-span-1">
              <GrPrevious className="text-lg sm:text-3xl" />
            </button>
            <div className="col-span-3">
              {
                <Card
                  projectName={projects[cardNum].name}
                  screenshot={projects[cardNum].screenshot}
                  href={projects[cardNum].href}
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
