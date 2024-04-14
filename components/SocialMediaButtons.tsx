import { EnvelopeClosedIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { SimpleIconsTiktok } from "./TiktokSVG";
import Link from "next/link";

const iconStyle = "h-10 w-10 text-sky-50";

export default function SocialMediaButtons() {
  return (
    <div className="grid grid-cols-3">
      <Link href="https://www.instagram.com/lucasvigna_/" target="_blank">
        <InstagramLogoIcon className={iconStyle} />
      </Link>
      <Link
        href="https://www.tiktok.com/@lucasvigna_?_t=8lEiuiYga8s&_r=1"
        target="_blank"
      >
        <SimpleIconsTiktok className={iconStyle + " p-1"} />
      </Link>
      <Link href="mailto: lucasnicolasvigna@gmail.com" target="_blank">
        <EnvelopeClosedIcon className={iconStyle} />
      </Link>
    </div>
  );
}
