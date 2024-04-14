import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="grid grid-cols-1 text-sky-50 text-center py-6">
      <div className="mx-auto flex items-center flex-col">
        <span className="text-5xl pb-3">Contact me</span>
        <Image src="/portfolioface.jpg" width={300} height={300} alt="lucas" />
      </div>

      <div className="mx-auto flex flex-col">
        <span className="my-6">
          Reach out to me at <b>lucasnicolasvigna@gmail.com</b>
        </span>
        <Link
          target="_blank"
          href="https://docs.google.com/document/d/1iJ8A6-MV-AKhPap38OnivcAdsY3V3YIdNh_B7gdjtLY/edit"
        >
          <Button>My Portfolio</Button>
        </Link>
      </div>
    </div>
  );
}
