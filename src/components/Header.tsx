import Bookmark, { BookmarkColors } from './Bookmark/Bookmark';

export default function Header() {
  return (
    <header className="w-full">
      <div className="flex justify-end gap-x-2 pr-20">
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
      </div>
    </header>
  );
}
