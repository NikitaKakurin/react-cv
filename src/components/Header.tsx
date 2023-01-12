import { useAppSelector } from 'app/hooks';
import { selectLang } from 'app/slices/langSlice';
import i18n from 'i18n';
import Bookmark, { BookmarkColors } from './Bookmark/Bookmark';
import Hamburger from './Hamburger/Hamburger';
import LangSwitcher from './langSwitcher/LangSwitcher';

export default function Header() {
  const lang = useAppSelector(selectLang);
  return (
    <header className="w-full">
      <nav className="hidden justify-end gap-x-2 md:flex md:pr-20">
        <Bookmark color={BookmarkColors.BLUE} page={0}>
          <span>{i18n[lang].about}</span>
        </Bookmark>
        <Bookmark color={BookmarkColors.YELLOW} page={0}>
          <span>{i18n[lang].skills}</span>
        </Bookmark>
        <Bookmark color={BookmarkColors.RED} page={1}>
          <span>{i18n[lang].education}</span>
        </Bookmark>
        <Bookmark color={BookmarkColors.ORANGE} page={1}>
          <span>{i18n[lang].portfolio}</span>
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
