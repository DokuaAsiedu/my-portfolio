export function Background() {
  return (
    <div className="fixed -z-10 h-screen w-screen bg-black">
      {[0, 1, 2, 3, 4, 5].map((item, index) => {
        return <Star key={`item-${index}`} />
      })}
    </div>
  )
}

function Star() {
  const randNum = randomize()
  const randPos = `top-[${randNum}rem] left-[${randNum}rem]`
  console.log(randNum, randPos)
  return (
    <div className="relative w-4 bg-red-300 animate-horizontal-movement">
      <div
        className={`relative w-4 aspect-square rounded-full bg-white animate-vertical-movement`}></div>
    </div>
  )
}

function randomize() {
  return Math.ceil(Math.random() * 96)
}
