"use client";

import { useState, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronDown, ChevronUp, ArrowLeft, Play } from "lucide-react";
import { MiniGameMenu } from "@simula/ads";
import { Button } from "@/components/ui/button";
import { FandomTopNavigation } from "@/components/fandom-top-navigation";
import { NavigationSidebar } from "@/components/navigation-sidebar";

interface InfoBoxRow {
  label: string;
  value: string | string[];
}

const INFO_BOX_DATA: InfoBoxRow[] = [
  { label: "Full name", value: "Harry James Potter" },
  {
    label: "Aliases",
    value: ["The Boy Who Lived", "The Chosen One", "Undesirable No. 1"],
  },
  { label: "Species", value: "Human (Wizard)" },
  { label: "Blood status", value: "Half-blood" },
  { label: "House", value: "Gryffindor" },
  { label: "Patronus", value: "Stag" },
];

const APPEARANCES = [
  { title: "Harry Potter and the Philosopher's Stone", year: "2001" },
  { title: "Harry Potter and the Chamber of Secrets", year: "2002" },
  { title: "Harry Potter and the Prisoner of Azkaban", year: "2004" },
];

const HERMIONE_SIMULA_CHARACTER = {
  name: "Hermione Granger",
  id: "hermione-hp",
  image: "/hermoine.gif",
  description:
    "Bright Gryffindor witch and loyal friend—exceptional at spells, research, and quick thinking. Ideal for puzzle and strategy mini-game moments.",
};

const fandomGameTheme = {
  backgroundColor: "rgba(244, 244, 244, 0.98)",
  headerColor: "rgba(255, 255, 255, 0.95)",
  borderColor: "rgba(209, 213, 219, 0.6)",
  titleFont: "Geist, system-ui, sans-serif",
  secondaryFont: "Geist, system-ui, sans-serif",
  titleFontColor: "#1f2937",
  secondaryFontColor: "#6b7280",
  iconCornerRadius: 12,
};

export default function HarryPotterWikiPage() {
  const sponsoredFrameRef = useRef<HTMLDivElement>(null);
  const frameFullyInView = useInView(sponsoredFrameRef, {
    once: true,
    amount: "all",
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [hermoineImageUrl, setHermoineImageUrl] = useState(() =>
    typeof window !== "undefined"
      ? new URL("/hermoine.gif", `${window.location.origin}/`).href
      : "",
  );

  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    biography: true,
    hogwarts: false,
    magic: false,
    relationships: false,
  });

  useLayoutEffect(() => {
    setHermoineImageUrl(
      new URL("/hermoine.gif", `${window.location.origin}/`).href,
    );
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4]">
      <MiniGameMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        charName={HERMIONE_SIMULA_CHARACTER.name}
        charID={HERMIONE_SIMULA_CHARACTER.id}
        charImage={hermoineImageUrl}
        charDesc={HERMIONE_SIMULA_CHARACTER.description}
        messages={[]}
        maxGamesToShow={6}
        delegateChar={false}
        theme={fandomGameTheme}
      />
      <FandomTopNavigation />
      <NavigationSidebar />

      <main className="mx-auto max-w-[100vw] overflow-x-hidden pt-14 md:pt-[46px] pb-10 pl-0 md:pl-[66px]">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="rounded-t-lg sm:rounded-none bg-gradient-to-b from-[#1a2744] via-[#0f1729] to-[#0c1222] pl-3 sm:pl-5 pt-6 pb-5 sm:pt-8 sm:pb-6">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center gap-2 text-amber-200/90 text-sm hover:text-amber-100 hover:underline mb-4"
            >
              <ArrowLeft className="h-4 w-4 shrink-0" />
              Return to Home
            </Link>
            <div className="text-amber-400/90 text-xs font-semibold tracking-wider mb-1">
              HARRY POTTER WIKI
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Harry Potter
            </h1>
          </div>

          <div className="pt-5 pb-6 sm:pt-6 sm:pb-8 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              <div className="flex-1 min-w-0">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 mb-6 sm:mb-8 flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-[min(240px,100%)] aspect-[3/4] sm:aspect-auto sm:min-h-[280px] flex-shrink-0 mx-auto sm:mx-0 max-w-[280px] sm:max-w-none">
                    <Image
                      src="https://static.wikia.nocookie.net/aad30c25-f98b-4aae-b024-901c456af1ec/scale-to-height-down/400"
                      alt="Harry Potter"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 280px, 240px"
                      unoptimized
                      priority
                    />
                  </div>
                  <div className="flex-1 divide-y divide-gray-200 min-w-0">
                    {INFO_BOX_DATA.map((row, index) => (
                      <div key={index} className="flex flex-col sm:flex-row">
                        <div className="w-full sm:w-1/3 px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-100 text-gray-600 text-xs sm:text-sm font-medium shrink-0">
                          {row.label}
                        </div>
                        <div className="w-full sm:w-2/3 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm break-words">
                          {Array.isArray(row.value) ? (
                            <div className="flex flex-wrap gap-0.5">
                              {row.value.map((v, i) => (
                                <span key={i} className="text-gray-800">
                                  {v}
                                  {i < row.value.length - 1 && (
                                    <span className="text-gray-400">, </span>
                                  )}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <span className="text-gray-800">{row.value}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 text-[15px] sm:text-base">
                  <strong>Harry James Potter</strong> is a half-blood wizard,
                  the only child of James and Lily Potter. He is famous for
                  having survived an attack by Lord Voldemort as an infant—an
                  event that earned him the title &quot;The Boy Who Lived.&quot;
                  He studied at Hogwarts School of Witchcraft and Wizardry and
                  played a central role in the defeat of the Dark Lord.
                </p>

                <blockquote className="border-l-4 border-amber-600 pl-4 py-3 mb-8 italic text-gray-700 bg-white rounded-r-lg shadow-sm text-[15px] sm:text-base">
                  &quot;It is our choices, Harry, that show what we truly are,
                  far more than our abilities.&quot;
                  <footer className="text-gray-500 text-sm mt-2 not-italic">
                    — Albus Dumbledore
                  </footer>
                </blockquote>

                <div className="mb-6 sm:mb-8">
                  <p className="text-xs sm:text-sm font-semibold leading-snug text-gray-600 mb-2">
                    Sponsored by Harry Potter: Hogwarts Mystery
                  </p>
                  <Button
                    asChild
                    className="mb-3 h-9 w-fit bg-[#740001] px-4 text-amber-50 shadow-sm hover:bg-[#740001]/90"
                  >
                    <a
                      href="https://www.hogwartsmystery.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </Button>
                  <div
                    ref={sponsoredFrameRef}
                    className="relative aspect-square w-full overflow-hidden rounded-lg border-2 border-gray-200 bg-white shadow-sm"
                  >
                    <motion.div
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: frameFullyInView ? 1 : 0 }}
                      transition={{
                        duration: 1.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Image
                        src="/hermoine.gif"
                        alt="Hermione Granger"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 896px"
                        unoptimized
                      />
                    </motion.div>
                    <motion.div
                      className="pointer-events-none absolute top-2 left-2 z-20 w-[min(28%,5rem)] sm:w-24"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: frameFullyInView ? 1 : 0 }}
                      transition={{
                        duration: 1.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Image
                        src="/1200.jpg"
                        alt="Harry Potter: Hogwarts Mystery"
                        width={160}
                        height={80}
                        className="h-auto w-full object-contain"
                        sizes="(max-width: 640px) 28vw, 6rem"
                      />
                    </motion.div>
                    <motion.div
                      className="absolute bottom-3 left-3 right-3 z-20 max-w-full pointer-events-none"
                      initial={{ opacity: 0, y: 10 }}
                      animate={
                        frameFullyInView
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 10 }
                      }
                      transition={{
                        duration: 0.75,
                        delay: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <div className="pointer-events-auto rounded-2xl rounded-bl-sm border border-gray-200 bg-white/95 px-3 py-3 shadow-lg backdrop-blur-[2px]">
                        <p className="text-sm text-gray-800 leading-snug mb-3">
                          Shall we play a game of Wizard Chess, right here in
                          Fandom?
                        </p>
                        <Button
                          type="button"
                          className="w-full gap-2 bg-[#740001] text-amber-50 shadow-sm hover:bg-[#740001]/90"
                          onClick={() => setMenuOpen(true)}
                        >
                          <Play className="h-4 w-4 shrink-0" aria-hidden />
                          Play Chess with Hermoine
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <section className="mb-4 sm:mb-6 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleSection("biography")}
                    className="w-full min-h-[48px] flex items-center justify-between py-3 px-4 sm:px-5 border-b border-gray-200 hover:bg-gray-50 text-left active:bg-gray-100"
                  >
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800 pr-2">
                      Biography
                    </h2>
                    {expandedSections.biography ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 shrink-0" />
                    )}
                  </button>
                  {expandedSections.biography && (
                    <div className="p-4 sm:p-5 text-gray-700 space-y-4 text-[15px] sm:text-base leading-relaxed">
                      <p>
                        Harry was raised by his Muggle relatives, the Dursleys,
                        after his parents were murdered. On his eleventh
                        birthday he learned he was a wizard and entered
                        Hogwarts, where he was sorted into Gryffindor and
                        discovered a deep connection to Voldemort.
                      </p>
                      <p>
                        Over the years he faced trials including the
                        Philosopher&apos;s Stone, the Chamber of Secrets, the
                        Triwizard Tournament, and ultimately the Horcrux hunt
                        and the Battle of Hogwarts.
                      </p>
                    </div>
                  )}
                </section>

                <section className="mb-4 sm:mb-6 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleSection("hogwarts")}
                    className="w-full min-h-[48px] flex items-center justify-between py-3 px-4 sm:px-5 border-b border-gray-200 hover:bg-gray-50 text-left active:bg-gray-100"
                  >
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800 pr-2">
                      Hogwarts
                    </h2>
                    {expandedSections.hogwarts ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 shrink-0" />
                    )}
                  </button>
                  {expandedSections.hogwarts && (
                    <div className="p-4 sm:p-5 text-gray-700 space-y-3 text-[15px] sm:text-base leading-relaxed">
                      <p>
                        Harry was taught Defence Against the Dark Arts by
                        several professors and later contributed to
                        Dumbledore&apos;s Army. He became Gryffindor Seeker and
                        later captain of the Quidditch team.
                      </p>
                    </div>
                  )}
                </section>

                <section className="mb-4 sm:mb-6 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleSection("magic")}
                    className="w-full min-h-[48px] flex items-center justify-between py-3 px-4 sm:px-5 border-b border-gray-200 hover:bg-gray-50 text-left active:bg-gray-100"
                  >
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800 pr-2">
                      Magical abilities
                    </h2>
                    {expandedSections.magic ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 shrink-0" />
                    )}
                  </button>
                  {expandedSections.magic && (
                    <div className="p-4 sm:p-5 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          Exceptional skill in Defence Against the Dark Arts and
                          Patronus charms
                        </li>
                        <li>
                          Parseltongue (later lost after Voldemort&apos;s soul
                          fragment was destroyed)
                        </li>
                        <li>Skilled flyer and duellist</li>
                      </ul>
                    </div>
                  )}
                </section>

                <section className="mb-6 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleSection("relationships")}
                    className="w-full min-h-[48px] flex items-center justify-between py-3 px-4 sm:px-5 border-b border-gray-200 hover:bg-gray-50 text-left active:bg-gray-100"
                  >
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800 pr-2">
                      Relationships
                    </h2>
                    {expandedSections.relationships ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 shrink-0" />
                    )}
                  </button>
                  {expandedSections.relationships && (
                    <div className="p-4 sm:p-5 text-gray-700 space-y-4 text-[15px] sm:text-base">
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">
                          Ron Weasley & Hermione Granger
                        </h3>
                        <p className="leading-relaxed">
                          Harry&apos;s loyal best friends who stood with him
                          through every major conflict.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">
                          Sirius Black & Remus Lupin
                        </h3>
                        <p className="leading-relaxed">
                          Connections to his father&apos;s generation who guided
                          and protected him.
                        </p>
                      </div>
                    </div>
                  )}
                </section>
              </div>

              <aside className="w-full lg:w-[280px] shrink-0">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-4 sticky top-20">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">
                    Film appearances
                  </h3>
                  <ul className="space-y-2">
                    {APPEARANCES.map((app, index) => (
                      <li
                        key={index}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 py-2 border-b border-gray-100 last:border-0 text-sm"
                      >
                        <span className="text-gray-800 font-medium leading-snug">
                          {app.title}
                        </span>
                        <span className="text-gray-500 shrink-0">
                          ({app.year})
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
