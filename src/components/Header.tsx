import Bookmark, { BookmarkColors } from './Bookmark/Bookmark';

export default function Header() {
  return (
    <header className="w-full">
      <div className="flex justify-end gap-x-2 pr-20">
        <Bookmark color={BookmarkColors.BLUE}>
          <span>About me</span>
        </Bookmark>
        <Bookmark color={BookmarkColors.YELLOW}>
          <span>Skills</span>
        </Bookmark>
        <Bookmark color={BookmarkColors.RED}>
          <span>Education</span>
        </Bookmark>
        <Bookmark color={BookmarkColors.ORANGE}>
          <span>Portfolio</span>
        </Bookmark>
      </div>
    </header>
  );
}
