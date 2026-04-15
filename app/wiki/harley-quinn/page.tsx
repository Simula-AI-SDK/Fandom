"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp, Gamepad2, MessageCircle, Download, ArrowLeft, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MiniGameMenu } from "@simula/ads";
import { FandomTopNavigation } from "@/components/fandom-top-navigation";
import { NavigationSidebar } from "@/components/navigation-sidebar";

interface InfoBoxRow {
  label: string;
  value: string | string[];
}

const INFO_BOX_DATA: InfoBoxRow[] = [
  { label: "Real Name", value: "Harleen Frances Quinzel" },
  { label: "Alias(es)", value: ["Harley Quinn", "Harleen", "The Queen of Gotham City", "Lady of Lunacy", "Mistress of Felonious Mischief"] },
  { label: "Species", value: "Human" },
  { label: "Nationality", value: "American" },
  { label: "Affiliation", value: ["Joker's Gang (formerly)", "Suicide Squad", "Birds of Prey"] },
  { label: "Status", value: "Alive" },
];

const APPEARANCES = [
  { title: "Suicide Squad", year: "2016" },
  { title: "Birds of Prey", year: "2020" },
  { title: "The Suicide Squad", year: "2021" },
];

const HARLEY_CHARACTER = {
  name: "Harley Quinn",
  id: "harley-quinn-dceu",
  image: "https://static.wikia.nocookie.net/7b2c03ed-3982-4315-b3b8-c1c6386ea33c/scale-to-height-down/400",
  description: "Former psychiatrist turned chaotic antihero. Ready to cause some mayhem!",
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

export default function HarleyQuinnWikiPage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    biography: true,
    personality: false,
    abilities: false,
    relationships: false,
  });
  const [showMessage, setShowMessage] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowMessage(true);
    }, 4000);
    
    const hideTimer = setTimeout(() => {
      setShowMessage(false);
    }, 17000); // 4 seconds to appear + 13 seconds visible = 17 seconds total
    
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f4f4]">
      {/* Mini Game Menu */}
      <MiniGameMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        charName={HARLEY_CHARACTER.name}
        charID={HARLEY_CHARACTER.id}
        charImage={HARLEY_CHARACTER.image}
        charDesc={HARLEY_CHARACTER.description}
        messages={[]}
        maxGamesToShow={6}
        delegateChar={true}
        theme={fandomGameTheme}
      />

      {/* Fixed Harley Quinn gif in bottom right corner */}
      <div className="fixed bottom-0 right-0 z-50">
        {/* Message bubble */}
        {showMessage && (
          <div className="absolute bottom-4 right-[250px] w-[320px] animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="relative bg-white rounded-2xl rounded-br-sm px-4 py-3 shadow-lg border border-gray-200">
              <p className="text-sm text-gray-800">
                Hiya! You look like you could use a little chaos in your life. Lucky for you, I&apos;ve got plenty to spare! 😈
              </p>
            </div>
            <div className="flex justify-end mt-2">
              <Button 
                size="sm" 
                className="bg-[#ff0066] hover:bg-[#ff0066]/90 text-white text-xs pointer-events-auto"
              >
                <Play className="h-3 w-3 mr-1" />
                Play With Harley Quinn in DC Dark Legion
              </Button>
            </div>
          </div>
        )}
        {/* Green radial blur behind gif - shifted down */}
        <div 
          className="absolute inset-0 -z-10 scale-[2] blur-2xl translate-y-[40%] translate-x-[20%]"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 100, 0.7) 0%, rgba(0, 255, 100, 0.4) 40%, rgba(0, 255, 100, 0) 70%)',
          }}
        />
        {/* Buttons positioned at bottom left inside gif */}
        <div className="absolute bottom-5 left-5 flex gap-2 pointer-events-auto">
          <Button 
            size="icon"
            className="h-10 w-10 rounded-full bg-[#ff0066] hover:bg-[#ff0066]/90 text-white shadow-lg"
            onClick={() => setMenuOpen(true)}
          >
            <Gamepad2 className="h-5 w-5" />
          </Button>
          <Button 
            size="icon"
            className="h-10 w-10 rounded-full bg-[#ff0066] hover:bg-[#ff0066]/90 text-white shadow-lg"
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
        </div>
        <img
          src="https://storage.googleapis.com/simula-public/assets/mockups/harley.gif"
          alt="Harley Quinn"
          width={240}
          height={336}
          className="object-contain pointer-events-none"
        />
      </div>
      {/* Fixed Top Navigation */}
      <FandomTopNavigation />

      {/* Fixed Sidebar Navigation */}
      <NavigationSidebar />

      {/* Main Content Area - offset for fixed nav elements */}
      <main className="pl-[66px] pt-[46px]">
        {/* Wiki Header */}
        <div className="bg-gradient-to-b from-[#2a0a1a] to-[#520044] px-8 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-[#00d8ff] text-sm mb-4 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Return to Home
          </Link>
          <div className="text-[#00d8ff] text-xs font-semibold tracking-wider mb-1">DC EXTENDED UNIVERSE WIKI</div>
          <h1 className="text-4xl font-bold text-white">Harley Quinn</h1>
        </div>

        {/* Content - Two Column Layout for Desktop */}
        <div className="px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8 max-w-7xl">
            {/* Main Content Column */}
            <div className="flex-1 min-w-0">
              {/* Info Box at Top - Horizontal Layout */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 mb-8 flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-[240px] aspect-[3/4] sm:aspect-auto sm:h-auto flex-shrink-0">
                  <Image
                    src="https://static.wikia.nocookie.net/7b2c03ed-3982-4315-b3b8-c1c6386ea33c/scale-to-height-down/400"
                    alt="Harley Quinn"
                    fill
                    className="object-cover object-top"
                    unoptimized
                  />
                </div>
                <div className="flex-1 divide-y divide-gray-200">
                  {INFO_BOX_DATA.map((row, index) => (
                    <div key={index} className="flex">
                      <div className="w-1/3 px-4 py-3 bg-gray-100 text-gray-600 text-sm font-medium">
                        {row.label}
                      </div>
                      <div className="w-2/3 px-4 py-3 text-sm">
                        {Array.isArray(row.value) ? (
                          <div className="flex flex-wrap gap-0.5">
                            {row.value.map((v, i) => (
                              <span key={i} className="text-gray-800">
                                {v}{i < row.value.length - 1 && <span className="text-gray-400">, </span>}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className={row.label === "Status" && row.value === "Alive" ? "text-green-600 font-medium" : "text-gray-800"}>
                            {row.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Intro Paragraph */}
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Harleen Frances Quinzel</strong>, also known as <strong>Harley Quinn</strong>, is a former psychiatrist at Arkham Asylum who was manipulated by the Joker into becoming his accomplice and lover. After years of an abusive relationship, Harley eventually freed herself from the Joker and became an antihero in her own right, joining various teams including Amanda Waller&apos;s Task Force X and the Birds of Prey.
              </p>

              {/* Quote */}
              <blockquote className="border-l-4 border-[#ff0066] pl-4 py-3 mb-8 italic text-gray-700 bg-white rounded-r-lg shadow-sm">
                &quot;Honestly, I would&apos;ve stayed if the food hadn&apos;t tasted like feet. But I gotta admit it, it felt nice to be believed in for a change.&quot;
                <footer className="text-gray-500 text-sm mt-2 not-italic">— Harley Quinn</footer>
              </blockquote>

              {/* Biography Section */}
              <section className="mb-6 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleSection("biography")}
                  className="w-full flex items-center justify-between py-4 px-5 border-b border-gray-200 hover:bg-gray-50"
                >
                  <h2 className="text-xl font-bold text-gray-800">Biography</h2>
                  {expandedSections.biography ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {expandedSections.biography && (
                  <div className="p-5 text-gray-700 space-y-5">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Early Life</h3>
                      <p className="leading-relaxed">
                        Harleen Quinzel grew up in a dysfunctional household in Gotham City. Despite her troubled upbringing, she excelled academically and earned a scholarship to Gotham University, where she studied psychiatry. Her fascination with the criminal mind led her to seek employment at Arkham Asylum, where she hoped to make a name for herself by studying the most dangerous patients.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Meeting the Joker</h3>
                      <p className="leading-relaxed">
                        At Arkham, Dr. Quinzel was assigned to treat the Joker. Over the course of their sessions, the Joker manipulated Harleen&apos;s emotions and turned her infatuation with him into obsessive love. He convinced her to help him escape, which resulted in her losing her medical license and being imprisoned.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Becoming Harley Quinn</h3>
                      <p className="leading-relaxed">
                        After her release, Harleen fully embraced her new identity as Harley Quinn, the Joker&apos;s devoted sidekick and lover. She adopted a colorful costume and persona that matched her chaotic new lifestyle. Together with the Joker, she terrorized Gotham City until Batman finally captured her and sent her to Belle Reve prison.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Task Force X</h3>
                      <p className="leading-relaxed">
                        At Belle Reve, Harley was recruited by Amanda Waller into Task Force X, also known as the Suicide Squad. She participated in several dangerous missions, including the defeat of Enchantress and Incubus, and later the destruction of Jotunheim and the alien creature Starro. Her service earned her a reduction in her sentence and eventual release.
                      </p>
                    </div>
                  </div>
                )}
              </section>

              {/* Personality Section */}
              <section className="mb-6 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleSection("personality")}
                  className="w-full flex items-center justify-between py-4 px-5 border-b border-gray-200 hover:bg-gray-50"
                >
                  <h2 className="text-xl font-bold text-gray-800">Personality</h2>
                  {expandedSections.personality ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {expandedSections.personality && (
                  <div className="p-5 text-gray-700 space-y-4">
                    <p className="leading-relaxed">
                      Harley Quinn is known for her unpredictable, chaotic, and often violent behavior. Despite her dangerous tendencies, she possesses a surprisingly optimistic and playful personality. She is highly intelligent, having been a qualified psychiatrist before her transformation.
                    </p>
                    <p className="leading-relaxed">
                      Her time with the Joker left her emotionally scarred, but also gave her a unique perspective on relationships and trust. After leaving him, Harley has shown growth as a character, developing genuine friendships and fighting for causes she believes in.
                    </p>
                  </div>
                )}
              </section>

              {/* Abilities Section */}
              <section className="mb-6 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleSection("abilities")}
                  className="w-full flex items-center justify-between py-4 px-5 border-b border-gray-200 hover:bg-gray-50"
                >
                  <h2 className="text-xl font-bold text-gray-800">Abilities</h2>
                  {expandedSections.abilities ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {expandedSections.abilities && (
                  <div className="p-5 text-gray-700">
                    <ul className="space-y-3">
                      <li><strong>Expert Gymnast:</strong> Harley is an extremely skilled gymnast and acrobat, capable of impressive feats of agility in combat.</li>
                      <li><strong>Hand-to-Hand Combat:</strong> She is proficient in various forms of martial arts and street fighting techniques.</li>
                      <li><strong>Weapons Expert:</strong> Skilled with various weapons including her signature baseball bat, mallet, and firearms.</li>
                      <li><strong>Psychology Expertise:</strong> Her background as a psychiatrist gives her insight into human behavior and manipulation tactics.</li>
                      <li><strong>Immunity to Toxins:</strong> Thanks to Poison Ivy, Harley has enhanced immunity to most poisons and toxins.</li>
                    </ul>
                  </div>
                )}
              </section>

              {/* Relationships Section */}
              <section className="mb-6 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleSection("relationships")}
                  className="w-full flex items-center justify-between py-4 px-5 border-b border-gray-200 hover:bg-gray-50"
                >
                  <h2 className="text-xl font-bold text-gray-800">Relationships</h2>
                  {expandedSections.relationships ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {expandedSections.relationships && (
                  <div className="p-5 text-gray-700 space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">The Joker (Former Lover)</h4>
                      <p className="leading-relaxed">The Joker manipulated Harley into becoming his accomplice and lover. Their toxic relationship lasted years before Harley finally broke free.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Poison Ivy (Best Friend)</h4>
                      <p className="leading-relaxed">Ivy is Harley&apos;s closest friend and confidante. Ivy has helped Harley through her recovery from the Joker and granted her immunity to toxins.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Birds of Prey (Allies)</h4>
                      <p className="leading-relaxed">Harley formed an alliance with Huntress, Black Canary, and Renee Montoya to take down Roman Sionis.</p>
                    </div>
                  </div>
                )}
              </section>
            </div>

            {/* Sidebar Column */}
            <div className="lg:w-[280px] flex-shrink-0">
              {/* Appearances */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Appearances</h3>
                <div className="space-y-2">
                  {APPEARANCES.map((app, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-800 font-medium text-sm">{app.title}</span>
                      <span className="text-gray-500 text-sm">({app.year})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sponsored Ad */}
              <div className="mt-6 bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="text-xs text-gray-400 mb-2">Sponsored</div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🦇</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">DC Dark Legion</h4>
                  <p className="text-sm text-gray-600 mb-3">Assemble your ultimate team of DC heroes and villains!</p>
                  <Button size="sm" className="w-full bg-[#ff0066] hover:bg-[#ff0066]/90 text-white">
                    <Download className="h-4 w-4 mr-1" />
                    Download Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
