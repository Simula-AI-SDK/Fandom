import { useMemo } from 'react';
import { Container, Theme } from './settings/types';
import { FeaturedFeed } from './components/generated/FeaturedFeed';
import { FandomTopNavigation } from './components/generated/FandomTopNavigation';
import { NavigationSidebar } from './components/generated/NavigationSidebar';
import { TopWikisBlock } from './components/generated/TopWikisBlock';
import { MoviesFeedSection } from './components/generated/MoviesFeedSection';
// %IMPORT_STATEMENT

let theme: Theme = 'light';
// only use 'centered' container for standalone components, never for full page apps or websites.
let container: Container = 'none';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  const generatedComponent = useMemo(() => {
    // THIS IS WHERE THE TOP LEVEL GENRATED COMPONENT WILL BE RETURNED!
    return (
      <>
        <FandomTopNavigation />
        <NavigationSidebar />
        <div className="pt-[46px] pl-[66px]">
          <FeaturedFeed />
          <TopWikisBlock />
          <MoviesFeedSection />
        </div>
      </>
    ); // %EXPORT_STATEMENT%
  }, []);

  if (container === 'centered') {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center">
        {generatedComponent}
      </div>
    );
  } else {
    return generatedComponent;
  }
}

export default App;