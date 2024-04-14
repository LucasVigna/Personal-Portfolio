"use client"
import { PlayCircleIcon } from "lucide-react";
import { useState } from "react";
import { InstagramEmbed } from "react-social-media-embed";



export default function CustomEmbed() {

  const [clicked, setClicked] = useState(false)



  return (
    <>

      <div
        onClick={() => setClicked(true)}
        className={`relative pointer-events-none`}>



        <div className="h-full
          w-full absolute">

          <div
            className={`
${clicked ? "hidden" : "flex"} h-full w-full bg-red-50
            bg-opacity-50 
            items-center
            justify-center`}
          >
            <PlayCircleIcon className="h-16 
              text-sky-50 w-16
              mb-10" />
          </div>
        </div>

        <InstagramEmbed
          width={328}

          url="https://www.instagram.com/reel/C3_T_MvLEJn"
        />

      </div>


    </>
  )
}
