"use client";

export default function Reel({
  delay = 0,
  width = 1080,
  height = 1920,
  poster = "",
  className = "",
  src,
}: {
  delay?: number;
  className?: string;
  poster?: string;
  src: string;
  width?: number;
  height?: number;
}) {
  return (
    <video
      width={width}
      className={className + " border-0 sm:border-4 rounded-lg border-sky-50"}
      data-aos="zoom-in-up"
      data-aos-delay={delay}
      height={height}
      poster={poster}
      controls
      preload="metadata"
    >
      <source src={src} className="block sm:block hidden" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
