import { useEffect } from "react";
import { Separator } from "./ui/separator";
import Image from "next/image";
import AOS from "aos";

export default function WhoamI() {
  useEffect(() => {
    setTimeout(() => {
      AOS.refresh();
    }, 5000);
  });
  return (
    <div id="aboutme" className="flex flex-col gap-16 pb-16 text-sky-50">
      <Separator className="my-3" />
      <p className="text-sky-50 my-auto text-center font-semibold pb-3 text-5xl">
        Who am I?
      </p>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
        <ImageDisplay>
          <Image
            src="/whoami5.jpg"
            className="rounded-md"
            alt="whoiam"
            width={1000}
            height={2000}
          />
        </ImageDisplay>
        <p className="my-auto" data-aos="fade-left">
          Born in Rosario, Argentina, I knew at a very young age that my passion
          in life was stepping out of my comfort zone and getting to know more
          about the world surrounding us. At 16 years old, while I was still in
          high school, I got my first job In Arcos Dorados, McDonalds Argentina.
          There, I was responsible for the Local Store Marketing department
          (LSM), and family hospitality of the restaurant.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
        <p
          className="my-auto text-right"
          data-aos="fade-left"
          data-aos-delay={100}
        >
          It was through this job that I learned what independence and
          proactivity truly meant. In the mornings, I attended school and, in
          the afternoons, I would put on my uniform and rush to work. I also
          worked in other restaurants and even ice cream shops. However, no
          other things made me feel so alive as constantly learning about other
          cultures and Languages. It was the desire to certify years of hard
          work that catapulted me into obtaining the CPE (C2) proficiency in
          english exam, Cambridge University’s highest-level qualification.
        </p>

        <ImageDisplay>
          <Image
            src="/whoami3.jpg"
            className="rounded-md"
            alt="whoiam2"
            width={1000}
            height={2000}
          />
        </ImageDisplay>
      </div>

      <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
        <ImageDisplay>
          <Image
            src="/whoami2.jpg"
            className="rounded-md"
            alt="whoiam3"
            width={600}
            height={600}
          />
        </ImageDisplay>
        <p
          className="my-auto"
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-left"
        >
          I was determined to make the most of it. So I embarked on another
          journey… Becoming a certified English teacher ! At 18, I became TEFL
          certified by “The TEFL Academy”the world most awarded TEFL Course
          provider, Based in the United Kingdom. After successfully completing
          the level 5: 168 hour TEFL certificate and the “Teaching English to
          young learners course”, I had no doubt great things awaited me, and I
          was not in the wrong. One day I applied for a permanent full-time job
          as an English Teacher for one of the most prominent private institutes
          in Colombia; the rest is just history…
        </p>
      </div>
    </div>
  );
}

function ImageDisplay({ children }: any) {
  return (
    <div className="max-w-[350px] py-5 m-auto" data-aos="fade-right">
      {children}
    </div>
  );
}
