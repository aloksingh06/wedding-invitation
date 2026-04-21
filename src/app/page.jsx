import Image from "next/image";
import { Anton, Farro, Great_Vibes, Playfair_Display } from "next/font/google";
import FloatingLamps from "./components/FloatingLamps";
import SmoothScroll from "./components/SmoothScroll";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

const farro = Farro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const MAP_REDIRECT_URL =
  process.env.NEXT_PUBLIC_MAP_URL || "https://maps.google.com";

const EVENTS_TOP_ROW = [
  {
    title: "Pre-wedding",
    imageSrc: "/pre-wedding.png",
    date: "Friday, March 9th 2026",
    venue: "Taj Exotica Resort, Goa",
    time: "6pm Onwards",
  },
  {
    title: "Shaadi",
    imageSrc: "/Shadi.png",
    date: "Friday, March 9th 2026",
    venue: "Taj Exotica Resort, Goa",
    time: "6pm Onwards",
  },
  {
    title: "Reception",
    imageSrc: "/reception.png",
    date: "Friday, March 9th 2026",
    venue: "Taj Exotica Resort, Goa",
    time: "6pm Onwards",
  },
];

const EVENTS_BOTTOM_ROW = [
  {
    title: "Mehendi",
    imageSrc: "/mehndi.png",
    date: "Friday, March 9th 2026",
    venue: "Taj Exotica Resort, Goa",
    time: "6pm Onwards",
  },
  {
    title: "Haldi",
    imageSrc: "/haldi.png",
    date: "Friday, March 9th 2026",
    venue: "Taj Exotica Resort, Goa",
    time: "6pm Onwards",
  },
  {
    title: "Cocktail",
    imageSrc: "/cocktail.png",
    date: "Friday, March 9th 2026",
    venue: "JW Mariott, Mussoorie",
    time: "6pm Onwards",
  },
];

function EventCard({ event, showTopRoute = false }) {
  return (
    <article className="flex flex-col items-center text-center text-white [text-shadow:0_10px_30px_rgba(0,0,0,0.3)]">
      {/* {showTopRoute ? (
        <p
          className={`${farro.className} text-[clamp(0.9rem,1.1vw,1.35rem)] underline underline-offset-4`}
        >
          See the route
        </p>
      ) : null} */}
      <Image
        src={event.imageSrc}
        alt={`${event.title} ceremony`}
        width={500}
        height={580}
        className="mt-3 h-[clamp(220px,24vw,500px)] w-auto object-contain"
      />
      <h3
        className={`${playfairDisplay.className}  text-[clamp(2.6rem,4.2vw,3.2rem)] leading-none`}
      >
        {event.title}
      </h3>
      <p
        className={`${farro.className} mt-3 text-[clamp(1.05rem,1.35vw,0.8rem)] leading-[1.2]`}
      >
        {event.date}
        <br />
        {event.venue}
        <br />
        {event.time}
      </p>
      <p
        className={`${farro.className} mt-5 text-[clamp(0.95rem,1.15vw,1.45rem)] underline underline-offset-4`}
      >
        See the route
      </p>
    </article>
  );
}

export default function Home() {
  return (
    <main className="relative">
      <SmoothScroll />
      <FloatingLamps />

      <div className="pointer-events-none fixed inset-0 z-10 " />

      <div>
        <Image
          src="/firstbg.png"
          alt="Wedding invitation background panel 1"
          className="w-full h-auto "
          width={1100}
          height={1100}
          priority
        />
        <Image
          src="/secondbg.png"
          alt="Wedding invitation background panel 2"
          className="w-full h-full "
          width={1100}
          height={1100}
          priority
        />
        <Image
          src="/thirdbg.png"
          alt="Wedding invitation background panel 3"
          className="w-full h-full "
          width={1100}
          height={1100}
          priority
        />
        <div className="relative">
          <Image
            src="/forthbg.png"
            alt="Wedding invitation background panel 4"
            className="w-full h-auto   "
            width={1100}
            height={1100}
            priority
          />
          <div className="pointer-events-none absolute inset-0 z-20 flex justify-center pt-[11%] sm:pt-[8.5%]">
            <div className="text-center mt-60">
              <p
                className={`${playfairDisplay.className} text-[clamp(3.3rem,8.2vw,7.8rem)] leading-[0.9] text-[#b7b6ff]`}
              >
                Akash
              </p>
              <p
                className={`${greatVibes.className} -mt-2 text-[clamp(2.8rem,6.2vw,5rem)] leading-none text-[#2ed9ff]`}
              >
                &amp;
              </p>
              <p
                className={`${playfairDisplay.className} -mt-12 text-[clamp(3.3rem,8.2vw,7.8rem)] leading-[0.9] text-[#78b8ff]`}
              >
                Prerna
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/lastbg.png"
          alt="Wedding invitation background panel 5"
          className="w-full h-full "
          width={1100}
          height={1100}
          priority
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-40">
        <section className="flex h-screen items-center justify-center px-4 text-center">
          <div
            className={`${playfairDisplay.className} hero-title-enter mt-[-4vh] text-white [text-shadow:0_20px_58px_rgba(0,0,0,0.5)]`}
          >
            <p className="text-[clamp(3rem,10.8vw,7rem)] leading-[0.9] tracking-[0.09em]">
              ABHISHEK
            </p>
            <p className="my-3 text-[clamp(1.1rem,3.2vw,2.6rem)] tracking-[0.6em]">
              WEDS
            </p>
            <p className="text-[clamp(3rem,10.8vw,7rem)] leading-[0.9] tracking-[0.1em]">
              KANIKA
            </p>
          </div>
        </section>

        <section className="h-screen" aria-hidden />

        <section className="mt-84 flex h-auto items-center justify-center px-4 text-center">
          <div
            className={`${playfairDisplay.className} max-w-[980px] text-white [text-shadow:0_10px_30px_rgba(0,0,0,0.35)]`}
          >
            <p
              className={`${farro.className} text-[clamp(1rem,1.45vw,1.7rem)] tracking-[0.04em]`}
            >
              ॐ श्री गणेशाय नमः
            </p>
            <Image
              src="/ganesh.png"
              alt="Lord Ganesha"
              width={170}
              height={170}
              className="mx-auto mt-4 h-[clamp(88px,10vw,170px)] w-[clamp(88px,10vw,170px)] object-contain opacity-95"
              priority
            />
            <p
              className={`${greatVibes.className} mt-8 text-[clamp(2.1rem,3.9vw,3rem)] leading-[1.1]`}
            >
              With the heavenly blessings of
            </p>
            <p
              className={`${greatVibes.className} mt-8 text-[clamp(1.7rem,3.3vw,2.35rem)] leading-[1.25]`}
            >
              Smt. Lata Devi &amp; Sm. Kamal Kapoor
            </p>
            <p
              className={`${greatVibes.className} mt-8 text-[clamp(1.7rem,3.3vw,2.35rem)] leading-[1.25]`}
            >
              Mrs. Reena &amp; Mr. Raju Kapoor
            </p>
            <p
              className={`${anton.className} mt-8 text-[clamp(4.1rem,11vw,10rem)] leading-[0.92] tracking-[0.06em]`}
            >
              INVITE
            </p>
            <p
              className={`${greatVibes.className} mt-7 text-[clamp(2rem,3.6vw,3.8rem)] leading-[1.15]`}
            >
              You to join us in the wedding celebrations of
            </p>

            <div className="mt-40">
              <p
                className={`${playfairDisplay.className} text-[clamp(4rem,10.5vw,9.6rem)] leading-[0.9]`}
              >
                Abhishek
              </p>
              <p
                className={`${greatVibes.className} mt-[-0.4rem] text-[clamp(3.2rem,8vw,6.1rem)] leading-none`}
              >
                &amp;
              </p>
              <p
                className={`${playfairDisplay.className} mt-[-0.35rem] text-[clamp(4rem,10.5vw,9.6rem)] leading-[0.9]`}
              >
                Kanika
              </p>
            </div>

            <p
              className={`${greatVibes.className} mt-40 text-[clamp(2rem,3.8vw,2rem)] leading-[1.1]`}
            >
              Daughter of
            </p>
            <p
              className={`${farro.className} mt-2 text-[clamp(1.55rem,2.85vw,1.9rem)] leading-[1.25]`}
            >
              Mrs. Shalini &amp; Mr. Aakash Mittal,
            </p>
            <p
              className={`${greatVibes.className} mt-6 text-[clamp(1.95rem,3.6vw,2.8rem)] leading-[1.12]`}
            >
              On the following events
            </p>
          </div>
        </section>

        <section className="min-h-[200svh] py-6 sm:py-10">
          <div className="flex min-h-screen items-center">
            <div className="mx-auto grid w-full max-w-[1800px] grid-cols-1 gap-10 px-4 md:grid-cols-3 md:gap-8 xl:px-12">
              {EVENTS_TOP_ROW.map((event) => (
                <EventCard key={event.title} event={event} showTopRoute />
              ))}
            </div>
          </div>

          <div className="flex min-h-screen items-center">
            <div className="mx-auto grid w-full max-w-[1800px] grid-cols-1 gap-10 px-4 md:grid-cols-3 md:gap-8 xl:px-12">
              {EVENTS_BOTTOM_ROW.map((event) => (
                <EventCard key={event.title} event={event} />
              ))}
            </div>
          </div>
        </section>

        <section className="flex h-screen items-center justify-center px-4">
          <div className="pointer-events-auto relative h-[min(78vw,900px)] w-[min(78vw,900px)]">
            <Image
              src="/seerout.png"
              alt="See the route badge"
              fill
              sizes="(max-width: 768px) 78vw, 900px"
              className="object-contain"
              priority
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center pt-[10%] text-center text-[#4f2c91]">
              <a
                href={MAP_REDIRECT_URL}
                className="pointer-events-auto mt-28 block"
                aria-label="Open map route"
              >
                <Image
                  src="/map.avif"
                  alt="Location icon"
                  width={150}
                  height={220}
                  className="h-[clamp(58px,8.4vw,110px)] w-auto cursor-pointer object-contain"
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
