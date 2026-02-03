import React from 'react';
import { Book, ChevronRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Types ---

interface PopularWiki {
  id: string;
  title: string;
  wikiName: string;
  imageUrl: string;
  url: string;
}
interface NewsStory {
  id: string;
  source: string;
  date: string;
  title: string;
  summary: string;
  imageUrl: string;
  url: string;
}

// --- Data ---

const POPULAR_WIKIS: PopularWiki[] = [{
  id: '1',
  title: 'Harry Potter',
  wikiName: 'Harry Potter Wiki',
  imageUrl: 'https://static.wikia.nocookie.net/aad30c25-f98b-4aae-b024-901c456af1ec/scale-to-height-down/400',
  url: '#'
}, {
  id: '2',
  title: 'Neo',
  wikiName: 'Matrix Wiki',
  imageUrl: 'https://static.wikia.nocookie.net/49e38102-534d-4e73-9730-83964d09c832/scale-to-height-down/400',
  url: '#'
}, {
  id: '3',
  title: 'Harley Quinn',
  wikiName: 'DC Extended Universe',
  imageUrl: 'https://static.wikia.nocookie.net/7b2c03ed-3982-4315-b3b8-c1c6386ea33c/scale-to-height-down/400',
  url: '#'
}, {
  id: '4',
  title: 'Snake Eyes',
  wikiName: 'G.I. Joe Wiki',
  imageUrl: 'https://static.wikia.nocookie.net/298fd6dd-427f-4d34-a276-d31f462a633f/scale-to-height-down/400',
  url: '#'
}, {
  id: '5',
  title: 'Disney Princesses',
  wikiName: 'Disney Wiki',
  imageUrl: 'https://static.wikia.nocookie.net/7de54604-2615-49f6-aef6-bc75bd65a1e7/scale-to-height-down/400',
  url: '#'
}, {
  id: '6',
  title: 'Godzilla',
  wikiName: 'Monster Verse Wiki',
  imageUrl: 'https://static.wikia.nocookie.net/6f0afb01-d646-425b-9377-f4febe9398da/scale-to-height-down/400',
  url: '#'
}];
const NEWS_STORIES: NewsStory[] = [{
  id: 'n1',
  source: 'GameSpot',
  date: 'Nov 18, 2025',
  title: "We Ate The Popeyes Five Nights At Freddy's 2 Deluxe Box",
  summary: 'FNAF and Popeyes are partnering for a new meal, but is it any good?',
  imageUrl: 'https://static.wikia.nocookie.net/8adef4b2-f000-4d52-8b29-85aa788ce129/scale-to-width-down/800',
  url: '#'
}, {
  id: 'n2',
  source: 'GameSpot',
  date: 'Nov 12, 2025',
  title: 'New Super Mario Galaxy Movie Trailer Blasts Off For A Cosmic Adventure',
  summary: "Mario's next movie is out of this world.",
  imageUrl: 'https://static.wikia.nocookie.net/f88620df-0c0b-4a58-8655-0562ee067855/scale-to-width-down/800',
  url: '#'
}, {
  id: 'n3',
  source: 'GameSpot',
  date: 'Oct 29, 2025',
  title: 'Warner Bros. Is Lobbying For A Minecraft Movie To Win Academy Awards',
  summary: 'Jack Black should win Best Actor for playing Steve, WB says.',
  imageUrl: 'https://static.wikia.nocookie.net/798a9d08-26a3-43f8-b3d5-fd263f1751a7/scale-to-width-down/800',
  url: '#'
}];

// --- Helpers ---

const SectionHeader = ({
  title,
  viewAllUrl
}: {
  title: string;
  viewAllUrl: string;
}) => <div className="flex items-center mb-0 mt-[-10px]">
    <h2 className="bg-[#fa005a] text-white text-[24px] uppercase font-bold border-t-[10px] border-[#520044] px-[18px] py-[10px] leading-tight">
      {title}
    </h2>
    <a href={viewAllUrl} className="ml-3 text-[#520044] text-[12px] font-bold tracking-[1px] uppercase flex items-center hover:underline group">
      View All
      <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
    </a>
  </div>;
const WikiCard = ({
  wiki
}: {
  wiki: PopularWiki;
}) => <a href={wiki.url} className="flex-1 min-w-[200px] group transition-opacity hover:opacity-90">
    <div className="flex flex-col text-[14px]">
      <div className="relative mb-1.5 border-b-[3px] border-[#fa005a] overflow-hidden">
        <div className="h-[200px] w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{
        backgroundImage: `url(${wiki.imageUrl})`
      }} />
      </div>
      <div className="font-medium text-[#520044] leading-tight line-clamp-1">{wiki.title}</div>
      <div className="flex items-start leading-[18px] text-[#520044] opacity-80 mt-0.5">
        <Book className="w-3 h-3 min-w-[12px] mr-1 mt-[3px]" />
        <span className="text-[12px] line-clamp-1">{wiki.wikiName}</span>
      </div>
    </div>
  </a>;
const NewsCard = ({
  story
}: {
  story: NewsStory;
}) => <div className="flex-1 min-w-[300px] mb-[30px] group">
    <a href={story.url} className="block relative">
      <div className="overflow-hidden rounded-[3px]">
        <img src={story.imageUrl} alt={story.title} className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="relative -mt-[37px] px-[22px] text-center">
        <div className="inline-block bg-[#fa005a] text-white text-[14px] font-medium px-[13px] py-1 shadow-sm">
          {story.source}{' '}
          <span className="font-normal opacity-90 ml-1">{story.date}</span>
        </div>
        <div className="bg-white mt-0 pt-2 pb-3 px-4 shadow-lg mx-auto w-full max-w-[90%] border-b-2 border-transparent group-hover:border-[#fa005a] transition-all">
          <div className="text-[#282628] text-[24px] font-medium leading-[30px] mb-1 line-clamp-2">
            {story.title}
          </div>
          <div className="text-[#520044] text-[14px] leading-[21px] line-clamp-2 px-2">
            {story.summary}
          </div>
        </div>
      </div>
    </a>
  </div>;

// @component: MoviesFeedSection
export const MoviesFeedSection = () => {
  // @return
  return <div className="w-full bg-[#f8f8f8] min-h-screen">
      <div className="border-t-[10px] border-[#fa005a] w-full bg-white">
        <div className="max-w-[1302px] mx-auto px-4 md:px-[36px] pb-[30px]">
          {/* Header */}
          <SectionHeader title="Movies" viewAllUrl="#" />

          <div className="pt-[30px]">
            {/* Main Content */}
            <div className="w-full">
              {/* Popular Wikis Section */}
              <div className="flex flex-col mb-8">
                <h3 className="mb-6 text-[18px] leading-[22.6px] font-medium text-[#520044]">
                  Popular Wiki Pages in Movies
                </h3>
                <div className="flex flex-nowrap justify-start gap-3.5">
                  {POPULAR_WIKIS.map(wiki => <WikiCard key={wiki.id} wiki={wiki} />)}
                </div>
              </div>

              {/* News Section */}
              <div className="mt-[30px]">
                <h3 className="text-[#520044] text-[18px] font-medium leading-[22.6px] mb-[18px]">
                  Top News Stories in movies
                </h3>
                <div className="flex flex-nowrap justify-start gap-3.5">
                  {NEWS_STORIES.map(story => <NewsCard key={story.id} story={story} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};