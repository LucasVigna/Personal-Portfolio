import HomeContent from "@/components/HomeContent";
import SocialMediaButtons from "@/components/SocialMediaButtons";
import Navbar from "@/components/Navbar";
import { HeartHandshakeIcon } from "lucide-react";
import Image from "next/legacy/image";

export default function Home() {
  return (
    <main className="">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen w-screen fixed z-[-99]"></div>
      <div className="sm:h-[320px] pt-2">
        <div className="flex flex-col justify-center items-center">
          <Image
            data-aos="zoom-in"
            alt="avatar"
            src="/face.png"
            className="rounded-full aspect-square object-cover border-2 border-sky-50"
            // layout="fill"
            width={150}
            height={150}
          ></Image>

          <h1 className="text-5xl text-center text-white" data-aos="fade-left">
            Lucas Nicolas Vigna
          </h1>

          <p className="text-white" data-aos="fade-right">
            ESL English Teacher
          </p>

          <SocialMediaButtons />

          <Navbar />
        </div>
      </div>
      <div className="md:max-w-screen-xl mx-auto">
        <div
          className="bg-gradient-to-r from-cyan-950 
          to-cyan-800 border-4 rounded-lg border-blue-100 inset-0 px-4 w-full z-10 "
        >
          <div className="flex pb-3 text-cyan-700 pt-4 items-center justify-center"></div>

          <HomeContent />
        </div>
      </div>
    </main>
  );
}
