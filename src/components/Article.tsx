import Image from "next/legacy/image";
import Button from "./Button";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

export default function Article() {
  return (
    <div
      id="mystory"
      className="text-sky-50 grid grid-cols-1 rounded-md md:grid-cols-2 py-10"
    >
      <img
        alt="me"
        className="mx-auto pr-3 rounded-md"
        data-aos="fade-right"
        src="/article.jpg"
        width={360}
        height={640}
      />
      <div className="my-auto text-center sm:text-left" data-aos="fade-left">
        <h1 className="text-5xl mb-3">
          A Country Of Beauty ... And Delicious Arepas!
        </h1>
        <p className="mb-3 text-3xl text-cyan-400">
          What were you doing at 18?
        </p>

        <p className="mb-3  text-cyan-400">
          Well, life can take you to unexpected places. Even remote places like
          a little village in Colombia. I can attest to that. My name is Lucas
          Vigna, I’m an Argentinian eighteen-year-old who for as long as I can
          remember, has always had a rather inquisitive mind: Constantly
          learning about languages, countries, international affairs...
        </p>

        <Link
          target="_blank"
          href="https://www.theteflacademy.com/meet-our-alumni/lucas-vigna/?utm_source=The+TEFL+Academy+email+news&utm_campaign=80a0cf3cd8-EMAIL_CAMPAIGN_2022_06_27_01_49_COPY_01&utm_medium=email&utm_term=0_ce6a5fa23f-80a0cf3cd8-106494304&mc_cid=80a0cf3cd8&mc_eid=75a7fb5f5a"
        >
          <Button>
            Read the full story <ArrowRightIcon className="h-4 w-4 ml-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
