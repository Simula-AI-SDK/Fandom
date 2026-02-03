import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
interface FeedItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  link: string;
}
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

// Helper component for the feed card to keep the main component clean
const FeedCard = ({
  item
}: {
  item: FeedItem;
}) => <motion.div whileHover={{
  y: -4
}} className="relative flex-1 min-w-[180px] m-1.5 md:m-2.5 overflow-hidden rounded-md group cursor-pointer shadow-lg">
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

// @component: FeaturedFeed
export const FeaturedFeed = () => {
  const [searchValue, setSearchValue] = useState('');
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchValue);
  };

  // @return
  return <div className="min-h-screen w-full flex flex-col items-center bg-[#520044] font-sans" style={{
    backgroundImage: `url('https://static.wikia.nocookie.net/0dfbc1cb-6311-45e0-8b74-fc965ca9afc7'), linear-gradient(151.47deg, #fa005a -21.32%, #280033 77.37%)`,
    backgroundRepeat: 'repeat',
    backgroundPosition: '0% 0%',
    height: "fit-content",
    minHeight: "fit-content"
  }}>
      {/* Header Section */}
      <header className="w-full pt-8 pb-2 px-6 flex flex-col items-center max-w-7xl">
        <img src="https://static.wikia.nocookie.net/6a181c72-e8bf-419b-b4db-18fd56a0eb60" alt="Fandom Logo" className="w-[200px] md:w-[300px] mb-4" />

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="w-full max-w-[800px] mb-4">
          <div className="flex items-center bg-[#280033] border-2 border-[#f9edd8] rounded-full px-4 py-2">
            <div className="flex-grow flex items-center gap-2">
              {!searchValue && <span className="text-[#f9edd8] text-sm md:text-lg hidden sm:block whitespace-nowrap overflow-hidden text-ellipsis">
                  Search the world's largest fan wiki platform
                </span>}
              <input type="text" placeholder={searchValue ? "" : "Search"} value={searchValue} onChange={e => setSearchValue(e.target.value)} className="w-full bg-transparent border-none outline-none text-[#f9edd8] text-lg py-1 placeholder:text-[#f9edd8]/60" />
            </div>
            <button type="submit" className="w-8 h-8 md:w-10 md:h-10 bg-[#f9edd8] rounded-full flex items-center justify-center transition-transform active:scale-90 hover:opacity-90">
              <Search className="w-4 h-4 md:w-5 md:h-5 text-[#520044]" strokeWidth={3} />
            </button>
          </div>
        </form>

        {/* Feed Container */}
        <div className="w-full rounded-[18px] p-2 md:p-4 flex flex-nowrap justify-start" style={{
        backgroundImage: `url('https://static.wikia.nocookie.net/1e17bced-251e-4c43-b3ac-ed39ee07cb94')`,
        backgroundColor: 'rgba(155, 0, 63, 0.5)',
        backgroundSize: '100% 100%'
      }}>
          {FEED_DATA.map(item => <FeedCard key={item.id} item={item} />)}
        </div>
      </header>
    </div>;
};