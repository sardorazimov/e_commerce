import Image from "next/image"


const Page = () => {
  return (
    <div>
      <Image src={'/aplle/hero-2.png'}  alt="Doc" fill className="md:object-contain sm:object-contain flex lg:object-contain  flex-col"/>
      <h1></h1>
    </div>
  )
}

export default Page
