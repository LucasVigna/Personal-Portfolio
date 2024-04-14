"use client";
import { InstagramEmbed } from "react-social-media-embed";
import Article from "./Article";
import CardPrincipal from "./CardPrincipal";
import Reel from "./Reel";
import { Separator } from "./ui/separator";
import WhoamI from "./WhoAmI";
import AOS from "aos";
import Portfolio from "./Portfolio";
import { useEffect } from "react";

export default function HomeContent() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  });
  return (
    <div className="px-10 flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pb-6">
        <CardPrincipal
          caption="Interactive and engaging warm-ups in my classes are essential for presenting the target language in context. When learners are motivated, a successful lesson is ensured"
          image="/gather.jpg"
          delay={0}
          imagePosition="top"
          backgroundImage="/blueBackground-1.svg"
        />

        <CardPrincipal
          caption="Learning a language and having fun should not go separate but rather go hand in hand with one another"
          image="/gather3.jpg"
          delay={200}
          imagePosition="50% 75%"
          backgroundImage="/blueBackground-2.svg"
        />

        <CardPrincipal
          caption='Dynamics such as “Who am I?” are part of a "Gamification" process of my lessons. When self-expression and student interactions are celebrated, a student-centred experience is created'
          image="/gather2.jpg"
          delay={400}
          imagePosition="center"
          backgroundImage="/blueBackground-3.svg"
        />
      </div>

      <Separator className="mb-6 text-cyan-700" />

      <span
        className="
        text-center
        text-sky-50
        text-5xl
        font-semibold 
        mb-6
        w-full
        "
      >
        {" "}
        My Lessons
      </span>

      <div
        id="mylessons"
        className="flex flex-col
        md:grid
        md:grid-cols-2
        lg:grid-cols-4
        gap-2"
      >
        <Reel src="reel1.mp4" poster="/reels/4.jpg" />
        <Reel src="reel6.mp4" poster="/reels/3.jpg" delay={200} />
        <Reel src="reel2.mp4" poster="/reels/6.jpg" delay={300} />

        <Reel src="reel7.mp4" poster="/reels/2.jpg" delay={400} />

        <Reel src="reel3.mp4" poster="/reels/8.jpg" delay={0} />
        <Reel src="reel8.mp4" poster="/reels/1.jpg" delay={200} />

        <Reel src="reempl.mp4" poster="/reels/7.jpg" delay={300} />
        <Reel src="reel9.mp4" poster="/reels/5.jpg" delay={400} />
        <Reel
          src="reel5.mp4"
          width={1920}
          poster="/reels/10.jpg"
          className="col-span-1 sm:col-span-2"
          height={1080}
          delay={300}
        />
        <Reel
          src="reel10.mp4"
          width={1920}
          className="col-span-1 sm:col-span-2"
          poster="/reels/9.jpg"
          height={1080}
          delay={600}
        />
        <span className="h-full flex items-center col-span-1">
          <img
            src="/amig1.jpg"
            className="rounded-md"
            width={960}
            height={1280}
            alt="alumna"
            data-aos="flip-left"
            data-aos-deplay={500}
          />
        </span>
        <img
          src="/amig2.jpg"
          className="col-span-1 sm:col-span-3 rounded-md"
          width={1920}
          height={1080}
          data-aos="flip-right"
          data-aos-delay={500}
          alt="zoom"
        />
      </div>

      <Separator className="my-6 text-cyan-700" />

      <Article />

      <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pb-6">
        <CardPrincipal
          caption="Presenting vocabulary through engaging practical tasks focused on fluency and real-life communication"
          image="/gather6.jpeg"
          delay={400}
          imagePosition="center"
          backgroundImage="/blueBackground-1.svg"
        />
        <CardPrincipal
          caption="End-of-the-year Graduation Ceremony"
          image="/gather4.jpeg"
          delay={0}
          imagePosition="50% 5%"
          backgroundImage="/blueBackground-1.svg"
        />
        <CardPrincipal
          caption="Building positive teacher-student relationships in order to create a classroom belonging culture "
          image="/gather5.jpeg"
          delay={200}
          imagePosition="center"
          backgroundImage="/blueBackground-1.svg"
        />
      </div>

      <WhoamI />

      <Separator className="my-6" />

      <Portfolio />

      <Separator className="my-6" />

      <div
        className="gap-3 
        pb-6 
        flex-col
        sm:flex-row
        justify-center
        items-center
        flex"
      >
        <InstagramEmbed
          width={328}
          url="https://www.instagram.com/reel/C4v8QrWPnXS"
        />
        <InstagramEmbed
          width={328}
          url="https://www.instagram.com/reel/CxMY1WsuhfE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D&img_index=3"
        />

        <InstagramEmbed
          width={328}
          url="https://www.instagram.com/reel/C4muNvQufqe"
        />
      </div>
    </div>
  );
}
