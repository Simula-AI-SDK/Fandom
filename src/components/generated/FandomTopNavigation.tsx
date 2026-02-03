import React, { useState } from 'react';
import { Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * FandomTopNavigation Component
 * A faithful recreation of the Fandom global navigation bar.
 * Features:
 * - Responsive layout
 * - Search bar with focus state
 * - Navigation links with authentic styling
 * - Sign In / Register buttons
 */

// @component: FandomTopNavigation
export const FandomTopNavigation = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  // @return
  return <nav className="fixed top-0 left-0 w-full h-[46px] flex items-center justify-between px-[18px] z-[500] border-b border-[#e6e6e6]" style={{
    backgroundColor: 'rgb(244, 244, 244)'
  }} aria-label="Fandom top navigation">
      {/* Left Section: Logo */}
      <div className="flex items-center h-full">
        <a href="#" onClick={e => e.preventDefault()} className="flex items-center hover:opacity-80 transition-opacity" aria-label="Fandom homepage">
          <img src="https://storage.googleapis.com/storage.magicpath.ai/user/369218509202395136/assets/ed7783ff-ba21-4a15-8fa0-dac996fdd1fc.png" alt="Fandom" className="h-[32px] w-auto" style={{
          objectFit: "contain",
          objectPosition: "50% 50%",
          opacity: "1"
        }} />
        </a>
      </div>

      {/* Middle Section: Search */}
      <div className="flex-1 flex justify-end max-w-[400px] px-4 md:px-0">
        <div className="relative w-full max-w-[320px]">
          <div className="relative flex items-center w-full h-[34px]">
            <input type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} placeholder="Search" className={`
                w-full h-full px-[40px] py-0 text-[16px] leading-[16px] rounded-[3px] border transition-all duration-200
                placeholder:text-[#b3b3b3] focus:outline-none
                ${isFocused ? 'bg-white border-[#088488] ring-1 ring-[#088488]/20' : 'bg-white border-[#b3b3b3]'}
              `} style={{
            fontFamily: 'rubik, helvetica, arial, sans-serif',
            color: 'rgb(30, 12, 27)'
          }} />
            <Search className={`absolute left-[12px] w-[18px] h-[18px] transition-colors duration-200 ${isFocused ? 'text-[#088488]' : 'text-[#1e0c1b]'}`} strokeWidth={2.5} />
          </div>
          
          {/* Animated dropdown for search results simulation */}
          <AnimatePresence>
            {isFocused && searchValue.length > 0 && <motion.div initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -10
          }} className="absolute top-[40px] left-0 w-full bg-white shadow-lg rounded-[3px] border border-[#e6e6e6] overflow-hidden py-2">
                <div className="px-4 py-2 text-xs font-bold text-[#b3b3b3] uppercase tracking-wider">Search suggestions</div>
                <div className="px-4 py-2 hover:bg-[#f4f4f4] cursor-pointer text-sm text-[#1e0c1b]">{searchValue} in Communities</div>
                <div className="px-4 py-2 hover:bg-[#f4f4f4] cursor-pointer text-sm text-[#1e0c1b]">{searchValue} in News</div>
              </motion.div>}
          </AnimatePresence>
        </div>
      </div>

      {/* Right Section: Actions */}
      <div className="flex items-center space-x-3 ml-3">
        {/* Mobile Search Icon (only visible on mobile if hidden input) */}
        <div className="flex md:hidden items-center justify-center w-[46px] h-[46px] cursor-pointer">
           <Search className="w-5 h-5 text-[#1e0c1b]" />
        </div>

        {/* User profile / Auth buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a href="#" onClick={e => e.preventDefault()} className="px-[18px] py-[7px] border border-[#520044] rounded-[3px] text-[#520044] text-[12px] font-semibold uppercase tracking-[0.2px] hover:bg-[#520044]/5 transition-colors duration-300" style={{
          fontFamily: 'rubik, helvetica, arial, sans-serif'
        }}>
            Sign In
          </a>
          <a href="#" onClick={e => e.preventDefault()} className="px-[18px] py-[7px] bg-[#520044] border border-[#520044] rounded-[3px] text-white text-[12px] font-semibold uppercase tracking-[0.2px] hover:bg-[#6e005b] transition-colors duration-300" style={{
          fontFamily: 'rubik, helvetica, arial, sans-serif'
        }}>
            Register
          </a>
        </div>

        {/* User Icon for Mobile */}
        <div className="flex sm:hidden items-center justify-center h-[34px] w-[34px] rounded-full bg-[#e6e6e6] cursor-pointer">
          <User className="w-5 h-5 text-[#520044]" />
        </div>
      </div>
    </nav>;
};