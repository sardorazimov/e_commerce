import { Search } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"


const InputNavbar = () => {
  return (
    <div className="  flex justify-between items-center p-4">
      <Input placeholder="Are you"  className="justify-center items-center"/> 
       <Button className="bg-transparent text-black">
         <Search  className="w-4 h-4"/>
       </Button>    
      </div>
  )
}

export default InputNavbar
