import { Copy, PlusCircle } from "lucide-react"

const Card = ({title, status, heading, description, btn1, btn2, img}: any) => {
  return (
    <div className="p-6 dark:bg-[#212121] border dark:border-[#2c2c2c] rounded-md h-full shadow-sm">
        <div className="flex justify-between items-center mb-8">
            <p className="text-[#a1a1a1] font-medium">● {title}</p>
            <p className="text-green-500 bg-green-500/20 px-2 rounded-lg">• {status}</p>
        </div>     
        <div className="grid grid-cols-[2fr_1fr] gap-4 justify-between mb-8">
            <div>
                <h1 className="text-3xl font-semibold mb-2">{heading}</h1>
                <p className="text-[#a1a1a1] mb-2">{description}</p>
                <div className="flex justify-start items-center gap-2">
                    <p className="dark:bg-[#2b2b2b] border border-[#e4e4e7] dark:border-0 hover:bg-[#f4f4f5] px-2 py-1 rounded-sm font-light flex gap-2 items-center cursor-pointer dark:hover:bg-[#323232]"><PlusCircle size={12} /> {btn1}</p>
                    <p className="dark:bg-[#2b2b2b] border border-[#e4e4e7] dark:border-0 hover:bg-[#f4f4f5] px-2 py-1 rounded-sm font-light flex gap-2 items-center cursor-pointer dark:hover:bg-[#323232]"><Copy size={12} /> {btn2}</p>
                </div>
            </div>
            <div>
                <img src={img} className="rounded-full w-36 h-36 object-cover border-2" alt="img" />
            </div>
        </div>   
        <div>
            Projects
        </div>
            
    </div>
  )
}

export default Card
