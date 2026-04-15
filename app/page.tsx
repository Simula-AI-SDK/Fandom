"use client";

import { FandomTopNavigation } from "@/components/fandom-top-navigation";
import { NavigationSidebar } from "@/components/navigation-sidebar";
import { CombinedFandomSections } from "@/components/combined-fandom-sections";

export default function FandomPage() {
  return (
    <div className="min-h-screen bg-[#f4f4f4]">
      {/* Fixed Top Navigation */}
      <FandomTopNavigation />

      {/* Fixed Sidebar Navigation */}
      <NavigationSidebar />

      {/* Main Content Area - offset for fixed nav elements */}
      <main className="max-w-[100vw] overflow-x-hidden pl-0 md:pl-[66px] pt-14 md:pt-[46px]">
        <CombinedFandomSections />
      </main>
    </div>
  );
}
