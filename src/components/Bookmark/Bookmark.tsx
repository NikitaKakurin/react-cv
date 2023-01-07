import { setPage } from 'app/actionsCreators/pageActionsCreators';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectPage } from 'app/slices/pageSlice';
import { ValueOf } from 'models/typescript';
import './style.scss';
export enum BookmarkColors {
  BLUE = 'blue',
  YELLOW = 'yellow',
  GREEN = 'green',
  RED = 'red',
  ORANGE = 'orange',
}
type colorsType = 'blue' | 'yellow' | 'green' | 'red' | 'orange';

interface IProps {
  color: colorsType;
  children: JSX.Element;
  page: number;
}

interface Colors {
  [key: string]: ValueOf<BookmarkColors>;
}

export default function Bookmark({ children, color, page }: IProps) {
  const currentPage = useAppSelector(selectPage);
  const dispatch = useAppDispatch();
  const colors: Colors = {
    blue: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300',
    yellow: 'bg-yellow-500 text-white hover:bg-yellow-600',
    green: 'bg-green-500 text-white hover:bg-green-600',
    red: 'bg-red-500 text-white hover:bg-red-600',
    orange: 'bg-orange-500 text-white hover:bg-orange-600',
    disabled: 'bg-gray-300 text-gray-400 cursor-not-allowed',
  };
  const colorStyle = currentPage === page ? colors.disabled : colors[color];
  return (
    <div
      className={`cursor-pointer text-center ${colorStyle} write-mode-vertical w-[100px]`}
      onClick={() => dispatch(setPage(page))}
    >
      {children}
    </div>
  );
}
