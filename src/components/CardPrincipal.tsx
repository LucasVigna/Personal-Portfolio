'use client';
import Image from "next/legacy/image";

export default function CardPrincipal({
  caption,
  delay,
  image,
  imagePosition = 'center',
  backgroundImage = '/defaultBackground.svg',
}: {
  caption: string;
  delay: number;
  image: string;
  imagePosition?: string;
  backgroundImage?: string;
}) {
  return (
    <div data-aos="fade-up" data-aos-delay={delay} className="inter-var  cursor-default w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
      <div className="grid grid-rows-6 grid-cols-1 h-full">

        <div className="relative h-full w-full overflow-hidden row-span-4">
          <Image
            src={image}
            alt="thumbnail"
            layout="fill"
            objectFit="cover"
            objectPosition={imagePosition}
          />
        </div>

        <div
          className="p-4 text-center font-semibold text-white text-lg-6 h-full row-span-2"
          style={{
            textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
          }}
        >
          {caption}
        </div>
      </div>
    </div>
  );
}
