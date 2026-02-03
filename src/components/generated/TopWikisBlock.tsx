import React from 'react';
import { Book, ChevronRight } from 'lucide-react';

/**
 * Data structures for the Top Wikis component.
 */
interface WikiItem {
  name: string;
  url: string;
}
interface WikiCategory {
  title: string;
  items: WikiItem[];
}
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
    url: ''
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
const WikiCategoryColumn = ({
  category
}: {
  category: WikiCategory;
}) => <div className="flex flex-col flex-1 min-w-[120px]">
    <div className="text-[#FFC500] text-[14px] font-bold leading-[21px] mb-[5px] uppercase tracking-wider">
      {category.title}
    </div>
    {category.items.map((item, idx) => <a key={idx} href={item.url} onClick={e => e.preventDefault()} className="text-white text-[14px] font-medium leading-[21px] hover:underline cursor-pointer transition-colors">
        {item.name}
      </a>)}
  </div>;
const VerticalDivider = () => <div className="hidden md:block w-[1px] h-[93px] opacity-25 border-l border-white mx-[18px]" />;

// @component: TopWikisBlock
export const TopWikisBlock = () => {
  // @return
  return <div className="w-full bg-[#280033] py-[30px] font-sans">
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
    </div>;
};