import Bookmark, { BookmarkColors } from './Bookmark/Bookmark';
import Hamburger from './Hamburger/Hamburger';
import LangSwitcher from './langSwitcher/LangSwitcher';

export default function Header() {
  return (
    <header className="w-full">
      <nav className="hidden justify-end gap-x-2 md:flex md:pr-20">
        <Bookmark color={BookmarkColors.BLUE} page={0}>
          <span>About me</span>
        </Bookmark>
        <Bookmark color={BookmarkColors.YELLOW} page={0}>
          <span>Skills</span>
        </Bookmark>
        <Bookmark color={BookmarkColors.RED} page={1}>
          <span>Education</span>
        </Bookmark>
        <Bookmark color={BookmarkColors.ORANGE} page={1}>
          <span>Portfolio</span>
        </Bookmark>
        <div className="bookmark-clip bg-green-500 px-2">
          <LangSwitcher />
        </div>
      </nav>
      <nav className="md:hidden">
        <Hamburger />
      </nav>
    </header>
  );
}
