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
  isActive?: boolean;
}

interface Colors {
  [key: string]: ValueOf<BookmarkColors>;
}

export default function Bookmark({ children, color, isActive }: IProps) {
  const colors: Colors = {
    blue: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300',
    yellow: 'bg-yellow-500 text-white hover:bg-yellow-600',
    green: 'bg-green-500 text-white hover:bg-green-600',
    red: 'bg-red-500 text-white hover:bg-red-600',
    orange: 'bg-orange-500 text-white hover:bg-orange-600',
  };
  return (
    <div className={`cursor-pointer text-center ${colors[color]} write-mode-vertical w-[100px]`}>
      {children}
    </div>
  );
}
