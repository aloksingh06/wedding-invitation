"use client";

import Image from "next/image";
import { Anton, Farro, Great_Vibes, Playfair_Display } from "next/font/google";
import CountdownTimer from "./components/CountdownTimer";
import FloatingLamps from "./components/FloatingLamps";
import SmoothScroll from "./components/SmoothScroll";
import { motion } from "framer-motion";

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
  process.env.NEXT_PUBLIC_MAP_URL || "https://maps.app.goo.gl/WcE1fLzEkW3ABjR57";

const EVENTS_TOP_ROW = [
   {
    title: "Haldi",
    imageSrc: "/myhaldi.png",
    date: "Monday, 27 April 2026",
    venue: "Tulsi mangalam, Raipura chowk",
    time: "6pm Onwards",
  },
  {
    title: "Barat",
    imageSrc: "/mywedding.png",
    date: "Tuesday, 28 April 2026",
    venue: "NIJ Niwas , Purani Basti ,Main Road",
    time: "6pm Onwards",
  },
  {
    title: "Reception",
    imageSrc: "/myreception.png",
    date: "Wednesday, 29 April 2026",
    venue: "Tulsi mangalam, Raipura chowk",
    time: "6pm Onwards",
  },
];

const GALLERY_IMAGES = [
  { src: "/pic1.jpeg", alt: "Wedding gallery photo 1" },
  { src: "/pic2.jpeg", alt: "Wedding gallery photo 2" },
  { src: "/pic3.jpeg", alt: "Wedding gallery photo 3" },
  { src: "/pic4.jpeg", alt: "Wedding gallery photo 4" },
];

const COUPLE_MESSAGE_TITLE = "A message from the couple";
const COUPLE_MESSAGE_BODY =
  "We are both so delighted that you are able to join us in celebrating what we hope will be one of the happiest days of our lives. The affection shown to us by so many people since our roka has been incredibly moving, and has touched us both deeply. We would like to take this opportunity to thank everyone most sincerely for their kindness. We are looking forward to see you at the wedding.";
const COUNTDOWN_TARGET_DATE = "2026-04-28T00:00:00+05:30";
const COUNTDOWN_TITLE = "The countdown begins";
const COUNTDOWN_MESSAGE =
  "Our families are excited that you are able to join us in celebrating what we hope will be one of the happiest days of our lives.";
const COUNTDOWN_FOOTER = "\u00A9 Missing Piece 2025";

function EventCard({ event, showTopRoute = false }) {
  return (
    <article className="flex flex-col items-center px-4 text-center text-white [text-shadow:0_10px_30px_rgba(0,0,0,0.3)] md:px-0">
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
        className="mt-3 h-[320px] w-auto object-contain md:h-[clamp(220px,24vw,500px)]"
      />
      <h3
        className={`${playfairDisplay.className} text-2xl leading-none md:text-[clamp(2.6rem,4.2vw,3.2rem)]`}
      >
        {event.title}
      </h3>
      <p
        className={`${farro.className} mt-3 px-2 text-base leading-relaxed md:px-0 md:text-[clamp(1.05rem,1.35vw,0.8rem)] md:leading-[1.2]`}
      >
        {event.date}
        <br />
        {event.venue}
        
      </p>
      
    </article>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <SmoothScroll />
      <FloatingLamps />

      <div className="pointer-events-none fixed inset-0 z-10 " />

      <div className="h-auto">
        <motion.div
          className="relative h-auto min-h-[700svh] md:min-h-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src="/firstbg.png"
            alt="Wedding invitation background panel 1"
            className="hidden h-auto w-full md:block"
            width={1100}
            height={1100}
            priority
          />
          <Image
            src="/firstbg.png"
            alt="Wedding invitation background panel 1"
            fill
            sizes="100vw"
            className="block object-cover object-top md:hidden"
          />
        </motion.div>
        <Image
          src="/second2bg.png"
          alt="Wedding invitation background panel 2"
          className="hidden h-full w-full md:block"
          width={1100}
          height={1100}
        />
        <Image
          src="/mysecondmobile.png"
          alt="Wedding invitation background panel 2"
          className="block h-auto w-full md:hidden"
          width={693}
          height={1633}
        />
        <div className="relative">
          <Image
            src="/third.png"
            alt="Wedding invitation background panel 3"
            className="h-screen w-full md:h-full"
            width={1100}
            height={1100}
            priority
          />
          <div className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center px-6 text-center md:px-4">
            <div
              className={`${greatVibes.className} mx-auto mt-20 max-w-[1180px] text-white [text-shadow:0_10px_30px_rgba(0,0,0,0.35)] md:mt-[8vh]`}
            >
              <p className="text-4xl leading-relaxed md:text-[clamp(2.2rem,4.6vw,4.8rem)] md:leading-[1.02]">
                {COUPLE_MESSAGE_TITLE}
              </p>
              <p className="mt-8 text-2xl leading-relaxed md:mt-[clamp(2.4rem,9.5vh,7.5rem)] md:text-[clamp(1.9rem,3.35vw,3.65rem)] md:leading-[1.18]">
                {COUPLE_MESSAGE_BODY}
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/myforth.png"
            alt="Wedding invitation background panel 4"
            className="hidden h-auto w-full md:block"
            width={1100}
            height={1100}
            priority
          />
          <Image
            src="/myforthmobile.png"
            alt="Wedding invitation background panel 4"
            className="block h-auto w-full md:hidden"
            width={1080}
            height={1920}
          />
          <div className="pointer-events-none absolute inset-0 z-20 flex justify-center px-6 pt-[11%] sm:pt-[8.5%] md:px-0">
            <div className="mt-28 text-center md:mt-60">
              <p
                className={`${playfairDisplay.className} text-7xl leading-[0.9] text-[#b7b6ff] md:text-[clamp(3.3rem,8.2vw,7.8rem)]`}
              >
                Akash
              </p>
              <p
                className={`${greatVibes.className} -mt-1 text-4xl leading-none text-[#2ed9ff] md:-mt-2 md:text-[clamp(2.8rem,6.2vw,5rem)]`}
              >
                &amp;
              </p>
              <p
                className={`${playfairDisplay.className} -mt-4 text-7xl leading-[0.9] text-[#78b8ff] md:-mt-12 md:text-[clamp(3.3rem,8.2vw,7.8rem)]`}
              >
                Prerna
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/lastbg.png"
            alt="Wedding invitation background panel 5"
            className="h-screen w-full md:h-full"
            width={1100}
            height={1100}
            priority
          />
          <div className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center px-6 text-center md:px-4">
            <div className="max-w-[1050px] text-white [text-shadow:0_10px_30px_rgba(0,0,0,0.35)]">
              <p
                className={`${playfairDisplay.className} text-2xl leading-relaxed md:text-[clamp(2.2rem,5.6vw,5rem)] md:leading-[1.02]`}
              >
                {COUNTDOWN_TITLE}
              </p>
              <CountdownTimer
                targetDateISO={COUNTDOWN_TARGET_DATE}
                className={`${playfairDisplay.className} mt-4 text-3xl leading-none tracking-[0.08em] md:mt-[clamp(1rem,2.3vw,2.2rem)] md:text-[clamp(2.1rem,4.9vw,4.6rem)]`}
              />
              <p
                className={`${playfairDisplay.className} mx-auto mt-6 max-w-[980px] px-2 text-lg leading-relaxed md:mt-[clamp(1.3rem,3.8vw,3.8rem)] md:px-0 md:text-[clamp(1.15rem,2.15vw,2.1rem)] md:leading-[1.2]`}
              >
                {COUNTDOWN_MESSAGE}
              </p>
              <p
                className={`${playfairDisplay.className} mt-[clamp(1.5rem,5.1vw,5.5rem)] text-[clamp(1rem,1.8vw,1.65rem)]`}
              >
                
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-40 flex h-auto min-h-screen flex-col gap-16 md:block md:min-h-0 md:gap-0">
        <section className="flex min-h-screen items-center justify-center px-6 text-center md:h-screen md:px-4">
          <div
            className={`${playfairDisplay.className} hero-title-enter mt-0 text-white [text-shadow:0_20px_58px_rgba(0,0,0,0.5)] md:mt-[-4vh]`}
          >
            <p className="text-7xl leading-none tracking-[0.09em] md:text-[clamp(3rem,10.8vw,7rem)] md:leading-[0.9]">
              Akash
            </p>
            <p className="my-3 text-4xl tracking-[0.3em] md:text-[clamp(1.1rem,3.2vw,2.6rem)] md:tracking-[0.6em]">
              WEDS
            </p>
            <p className="text-7xl leading-none tracking-[0.1em] md:text-[clamp(3rem,10.8vw,7rem)] md:leading-[0.1]">
              Prerna
            </p>
          </div>
        </section>

        <section className="h-screen" aria-hidden />

        {/* <section className="h-screen" aria-hidden /> */}

        <section className="mt-0 flex min-h-screen items-center justify-center px-6 py-20 text-center md:mt-84 md:h-auto md:px-4 md:py-0">
          <div
            className={`${playfairDisplay.className} max-w-[980px] text-white [text-shadow:0_10px_30px_rgba(0,0,0,0.35)]`}
          >
            <p
              className={`${farro.className} text-base leading-relaxed tracking-[0.04em] md:text-[clamp(1rem,1.45vw,1.7rem)]`}
            >
              ॐ श्री गणेशाय नमः
            </p>
            <Image
              src="/ganesh.png"
              alt="Lord Ganesha"
              width={170}
              height={170}
              className="mx-auto mt-4 h-24 w-24 object-contain opacity-95 md:h-[clamp(88px,10vw,170px)] md:w-[clamp(88px,10vw,170px)]"
              priority
            />
            <p
              className={`${greatVibes.className} mt-8 text-2xl leading-relaxed md:text-[clamp(2.1rem,3.9vw,3rem)] md:leading-[1.1]`}
            >
              With the heavenly blessings of
            </p>
            <p
              className={`${greatVibes.className} mt-6 text-xl leading-relaxed md:mt-8 md:text-[clamp(1.7rem,3.3vw,2.35rem)] md:leading-[1.25]`}
            >
              Late Shri Jagganth Sonkar &amp; Late smt. Bhuri Bai Sonkar
            </p>
            <p
              className={`${greatVibes.className} mt-6 text-xl leading-relaxed md:mt-8 md:text-[clamp(1.7rem,3.3vw,2.35rem)] md:leading-[1.25]`}
            >
              Late Shri Parmanand &amp; Smt. Viraj Purohit
            </p>
            <p
              className={`${anton.className} mt-8 text-5xl leading-none tracking-[0.06em] md:text-[clamp(4.1rem,11vw,10rem)] md:leading-[0.92]`}
            >
              INVITE
            </p>
            <p
              className={`${greatVibes.className} mt-7 text-2xl leading-relaxed md:text-[clamp(2rem,3.6vw,3.8rem)] md:leading-[1.15]`}
            >
              You to join us in the wedding celebrations of
            </p>

            <div className="mt-20 md:mt-40">
              <p
                className={`${playfairDisplay.className} text-5xl leading-none md:text-[clamp(4rem,10.5vw,9.6rem)] md:leading-[0.9]`}
              >
                Akash
              </p>
              <p
                className={`${greatVibes.className} mt-[-0.2rem] text-4xl leading-none md:mt-[-0.4rem] md:text-[clamp(3.2rem,8vw,6.1rem)]`}
              >
                &amp;
              </p>
              <p
                className={`${playfairDisplay.className} -mt-4 text-5xl leading-none md:mt-[-1.9rem] md:text-[clamp(4rem,10.5vw,9.6rem)] md:leading-[0.9]`}
              >
                Prerna
              </p>
            </div>

            
            <p
              className={`${greatVibes.className} mt-6 text-2xl leading-relaxed md:text-[clamp(1.95rem,3.6vw,2.8rem)] md:leading-[1.12]`}
            >
              On the following events
            </p>
          </div>
        </section>

        <section className="min-h-screen py-20 md:min-h-[100svh] md:py-10">
          <div className="flex min-h-screen items-center">
            <div className="mx-auto grid w-full max-w-[1800px] grid-cols-1 gap-10 px-4 md:grid-cols-3 md:gap-8 xl:px-12">
              {EVENTS_TOP_ROW.map((event) => (
                <EventCard key={event.title} event={event} showTopRoute />
              ))}
            </div>
          </div>
        </section>

        <section className="flex min-h-screen items-center justify-center px-6 py-20 md:h-screen md:px-4 md:py-0">
          <div className="gallery-slider-shell w-full max-w-[1800px] overflow-hidden">
            <div className="gallery-slider-track">
              {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  className="gallery-slide-card relative"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={2000}
                    height={2000}
                    unoptimized
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex min-h-[50vh] items-center justify-center px-6 py-20 md:h-screen md:px-4 md:py-0">
          <div className="pointer-events-auto relative h-[88vw] w-[88vw] md:h-[min(78vw,900px)] md:w-[min(78vw,900px)]">
            <Image
              src="/seerout.png"
              alt="See the route badge"
              fill
              sizes="(max-width: 768px) 88vw, 900px"
              className="object-contain"
              priority
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center pt-[10%] text-center text-[#4f2c91]">
              <a
                href={MAP_REDIRECT_URL}
                className="pointer-events-auto mt-16 block md:mt-28"
                aria-label="Open map route"
              >
                <Image
                  src="/map.avif"
                  alt="Location icon"
                  width={150}
                  height={220}
                  className="h-[72px] w-auto cursor-pointer object-contain md:h-[clamp(58px,8.4vw,110px)]"
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
