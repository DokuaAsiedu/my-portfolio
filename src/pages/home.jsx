import { Background, Card } from "@/components"
import { Socials } from "@/components"
import { projects } from "@/utils/utils"
import Avatar from "@/assets/avatar.jpeg"

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* <Background /> */}
      <div className="container flex flex-col items-center justify-start sm:grid sm:grid-cols-[1fr_1fr] p-8 sm:p-12 gap-8">
        <div className="h-full flex flex-col justify-between items-center">
          <div className="flex flex-col justify-start items-center">
            <img
              src={Avatar}
              alt="#"
              className="aspect-square w-60 object-contain"
            />
            <p>
              Hello, I am Dokua and I am front end developer with a focus on
              React. Welcome to my portfolio page and browse through my work.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center xs:grid xs:grid-cols-[50%_50%] gap-4 xs:justify-center">
          {projects.map((item, index) => {
            return (
              <Card
                key={`item-${index}`}
                projectName={item.name}
                screenshot={item.screenshot}
                href={item.href}
              />
            )
          })}
        </div>
      </div>
      <Socials />
    </div>
  )
}
