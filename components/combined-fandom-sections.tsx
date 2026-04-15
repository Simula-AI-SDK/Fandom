import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Book, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// ============================================================================
// TYPES
// ============================================================================

interface FeedItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  link: string;
}
interface WikiItem {
  name: string;
  url: string;
}
interface WikiCategory {
  title: string;
  items: WikiItem[];
}
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

// ============================================================================
// DATA
// ============================================================================

const FEED_DATA: FeedItem[] = [{
  id: '1',
  title: 'What To Expect (And Not Expect) From Nintendo And Switch 2 In 2026',
  category: 'GAMES',
  imageUrl: 'https://static.wikia.nocookie.net/451ba5b7-e965-4225-b957-dc240547c59e/scale-to-width-down/500',
  link: '#'
}, {
  id: '2',
  title: 'Code Vein 2 Review - Second Bite',
  category: 'GAMES',
  imageUrl: 'https://static.wikia.nocookie.net/1b84c17c-a4d1-4e4d-b31f-5cd24707dc91/scale-to-width-down/500',
  link: '#'
}, {
  id: '3',
  title: 'Cairn Review - An Uphill Battle Worth Taking On',
  category: 'GAMES',
  imageUrl: 'https://static.wikia.nocookie.net/4b7ad7f0-9ddb-4ece-8425-6aca66315e0c/scale-to-width-down/500',
  link: '#'
}, {
  id: '4',
  title: 'A Knight of the Seven Kingdoms: Making Game of Thrones Small Was a Bad Idea',
  category: 'TV',
  imageUrl: 'https://static.wikia.nocookie.net/2567ad7d-ef9c-4f9a-b0a7-e5db0486795d/scale-to-width-down/500',
  link: '#'
}, {
  id: '5',
  title: "Heated Rivalry: Christina Chang on Yuna and Shane's Big Finale Moment",
  category: 'TV',
  imageUrl: 'https://static.wikia.nocookie.net/6a4bfde6-cb59-478f-8ff6-235c6fb0369b/scale-to-width-down/500',
  link: '#'
}, {
  id: '6',
  title: 'Star Trek: Starfleet Academy Review: Star Trek Meets College Drama',
  category: 'TV',
  imageUrl: 'https://static.wikia.nocookie.net/0dc7ab66-8cdb-4353-aa31-2c067dfcc22c/scale-to-width-down/500',
  link: '#'
}];
const CATEGORIES: WikiCategory[] = [{
  title: 'GAMES',
  items: [{
    name: 'Terraria',
    url: ''
  }, {
    name: 'Minecraft',
    url: ''
  }, {
    name: 'Genshin Impact',
    url: ''
  }]
}, {
  title: 'MOVIES',
  items: [{
    name: 'Star Wars',
    url: ''
  }, {
    name: 'Harry Potter',
    url: '/wiki/harry-potter'
  }, {
    name: 'Marvel',
    url: ''
  }]
}, {
  title: 'TV',
  items: [{
    name: 'Memory Alpha',
    url: ''
  }, {
    name: 'Arrowverse',
    url: ''
  }, {
    name: 'SpongeBobia',
    url: ''
  }]
}, {
  title: 'ANIME',
  items: [{
    name: 'One Piece',
    url: ''
  }, {
    name: 'Naruto',
    url: ''
  }, {
    name: 'My Hero Academia',
    url: ''
  }]
}];
const POPULAR_WIKIS: PopularWiki[] = [{
  id: '1',
  title: 'Harry Potter',
  wikiName: 'Harry Potter Wiki',
  imageUrl: 'https://static.wikia.nocookie.net/aad30c25-f98b-4aae-b024-901c456af1ec/scale-to-height-down/400',
  url: '/wiki/harry-potter'
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
  url: '/wiki/harley-quinn'
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

// ============================================================================
// HELPER COMPONENTS - Featured Feed
// ============================================================================

const FeedCard = ({
  item
}: {
  item: FeedItem;
}) => <motion.div whileHover={{
  y: -4
}} className="relative overflow-hidden rounded-md group cursor-pointer shadow-lg">
    <a href={item.link} onClick={e => e.preventDefault()} className="block h-full no-underline">
      {/* Image Section */}
      <div className="relative h-[110px] w-full overflow-hidden">
        <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute left-0 bottom-0 bg-[#fa005a] px-2 py-0.5">
          <span className="text-white text-[10px] font-black tracking-widest uppercase">
            {item.category}
          </span>
        </div>
      </div>

      {/* Title Section */}
      <div className="bg-[#280033] p-3 h-[140px] flex items-start">
        <h3 className="text-white text-base md:text-lg font-medium leading-snug line-clamp-4 m-0">
          {item.title}
        </h3>
      </div>
    </a>
  </motion.div>;

// ============================================================================
// HELPER COMPONENTS - Top Wikis
// ============================================================================

const WikiCategoryColumn = ({
  category
}: {
  category: WikiCategory;
}) => <div className="flex flex-col flex-1 min-w-[120px]">
    <div className="text-[#FFC500] text-[14px] font-bold leading-[21px] mb-[5px] uppercase tracking-wider">
      {category.title}
    </div>
    {category.items.map((item, idx) =>
      item.url ? (
        <Link
          key={idx}
          href={item.url}
          className="text-white text-[14px] font-medium leading-[21px] hover:underline cursor-pointer transition-colors"
        >
          {item.name}
        </Link>
      ) : (
        <a
          key={idx}
          href="#"
          onClick={(e) => e.preventDefault()}
          className="text-white text-[14px] font-medium leading-[21px] hover:underline cursor-pointer transition-colors"
        >
          {item.name}
        </a>
      )
    )}
  </div>;
const VerticalDivider = () => <div className="hidden md:block w-[1px] h-[93px] opacity-25 border-l border-white mx-[18px]" />;

// ============================================================================
// HELPER COMPONENTS - Movies Feed
// ============================================================================

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
}) => {
  const inner = (
    <div className="flex flex-col text-[14px]">
      <div className="relative mb-1.5 border-b-[3px] border-[#fa005a] overflow-hidden">
        <div
          className="h-[min(200px,45vw)] sm:h-[200px] w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${wiki.imageUrl})` }}
        />
      </div>
      <div className="font-medium text-[#520044] leading-tight line-clamp-1">{wiki.title}</div>
      <div className="flex items-start leading-[18px] text-[#520044] opacity-80 mt-0.5">
        <Book className="w-3 h-3 min-w-[12px] mr-1 mt-[3px]" />
        <span className="text-[12px] line-clamp-1">{wiki.wikiName}</span>
      </div>
    </div>
  );

  if (wiki.url.startsWith("/")) {
    return (
      <Link href={wiki.url} className="group block transition-opacity hover:opacity-90">
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={wiki.url}
      className="group block transition-opacity hover:opacity-90"
      onClick={(e) => wiki.url === "#" && e.preventDefault()}
    >
      {inner}
    </a>
  );
};
const NewsCard = ({
  story
}: {
  story: NewsStory;
}) => <div className="group">
    <a href={story.url} className="block relative">
      <div className="overflow-hidden rounded-[3px]">
        <img src={story.imageUrl} alt={story.title} className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="relative -mt-[37px] px-[22px] text-center">
        <div className="inline-block bg-[#fa005a] text-white text-[14px] font-medium px-[13px] py-1 shadow-sm">
          {story.source} <span className="font-normal opacity-90 ml-1">{story.date}</span>
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

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export const CombinedFandomSections = () => {
  const [searchValue, setSearchValue] = useState('');
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchValue);
  };
  return <>
      {/* FEATURED FEED SECTION */}
      <div className="w-full flex flex-col items-center bg-[#520044] font-sans pb-8" style={{
      backgroundImage: `url('https://static.wikia.nocookie.net/0dfbc1cb-6311-45e0-8b74-fc965ca9afc7'), linear-gradient(151.47deg, #fa005a -21.32%, #280033 77.37%)`,
      backgroundRepeat: 'repeat',
      backgroundPosition: '0% 0%'
    }}>
        <header className="w-full pt-8 pb-2 px-6 flex flex-col items-center max-w-7xl">
          <img src="https://static.wikia.nocookie.net/6a181c72-e8bf-419b-b4db-18fd56a0eb60" alt="Fandom Logo" className="w-[200px] md:w-[300px] mb-4" />

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="w-full max-w-[800px] mb-4">
            <div className="flex items-center bg-[#280033] border-2 border-[#f9edd8] rounded-full px-4 py-2">
              <div className="flex-grow flex items-center gap-2">
                {!searchValue && <span className="text-[#f9edd8] text-sm md:text-lg hidden sm:block whitespace-nowrap overflow-hidden text-ellipsis">
                    Search the world's largest fan wiki platform
                  </span>}
                <input type="text" placeholder={searchValue ? '' : 'Search'} value={searchValue} onChange={e => setSearchValue(e.target.value)} className="w-full bg-transparent border-none outline-none text-[#f9edd8] text-lg py-1 placeholder:text-[#f9edd8]/60" />
              </div>
              <button type="submit" className="w-8 h-8 md:w-10 md:h-10 bg-[#f9edd8] rounded-full flex items-center justify-center transition-transform active:scale-90 hover:opacity-90">
                <Search className="w-4 h-4 md:w-5 md:h-5 text-[#520044]" strokeWidth={3} />
              </button>
            </div>
          </form>

          {/* Feed Container */}
          <div className="w-full rounded-[18px] p-2 md:p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4" style={{
          backgroundImage: `url('https://static.wikia.nocookie.net/1e17bced-251e-4c43-b3ac-ed39ee07cb94')`,
          backgroundColor: 'rgba(155, 0, 63, 0.5)',
          backgroundSize: '100% 100%'
        }}>
            {FEED_DATA.map(item => <FeedCard key={item.id} item={item} />)}
          </div>
        </header>
      </div>

      {/* TOP WIKIS SECTION */}
      <div className="w-full bg-[#280033] py-[30px] font-sans">
        <div className="max-w-[1302px] mx-auto px-6 md:px-[42px] flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-0">
          {/* Title Block Section */}
          <div className="flex flex-col flex-1 items-start justify-center md:mr-3">
            <div className="bg-[#FFC500] flex items-center px-3 py-2 w-[159px]">
              <Book className="w-[18px] h-[18px] text-[#280033] mr-2 flex-shrink-0" />
              <span className="text-[#280033] text-[14px] font-black leading-[21px] uppercase whitespace-nowrap">
                TOP WIKIS
              </span>
            </div>
          </div>

          {/* Categories Section */}
          <div className="flex flex-wrap md:flex-nowrap flex-[4] justify-between w-full md:w-auto gap-y-6 md:gap-y-0">
            {CATEGORIES.map((category, index) => <React.Fragment key={category.title}>
                <WikiCategoryColumn category={category} />
                {index < CATEGORIES.length - 1 && <VerticalDivider />}
              </React.Fragment>)}
          </div>

          {/* Last Divider before Explore */}
          <div className="hidden lg:block w-[1px] h-[93px] opacity-25 border-l border-white mx-[18px]" />

          {/* Explore More Section */}
          <div className="flex flex-1 items-center justify-end w-full md:w-auto">
            <a href="" onClick={e => e.preventDefault()} className="text-white text-[14px] leading-[17px] w-[140px] hover:opacity-80 transition-opacity">
              Plus over <span className="font-bold">250,000</span> more to explore
            </a>
            <a href="" onClick={e => e.preventDefault()} className="bg-[#FFC500] flex items-center justify-center w-9 h-9 ml-[18px] hover:brightness-110 transition-all flex-shrink-0">
              <ChevronRight className="w-6 h-6 text-[#280033]" />
            </a>
          </div>
        </div>
      </div>

      {/* MOVIES FEED SECTION */}
      <div className="w-full bg-[#f8f8f8] min-h-screen">
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
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {POPULAR_WIKIS.map(wiki => <WikiCard key={wiki.id} wiki={wiki} />)}
                  </div>
                </div>

                {/* News Section */}
                <div className="mt-[30px]">
                  <h3 className="text-[#520044] text-[18px] font-medium leading-[22.6px] mb-[18px]">
                    Top News Stories in movies
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {NEWS_STORIES.map(story => <NewsCard key={story.id} story={story} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
};
