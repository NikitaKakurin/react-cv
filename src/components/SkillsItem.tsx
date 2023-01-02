import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface IProps {
  stars: number;
  children: string;
  isShow: boolean;
}

export default function SkillsItem({ children, stars, isShow }: IProps) {
  const getStars = (stars: number): JSX.Element[] => {
    const arr: JSX.Element[] = [];
    for (let i = 1; i <= 5; i++) {
      arr.push(
        i <= stars ? (
          <AiFillStar color="yellow" key={i} />
        ) : (
          <AiOutlineStar color="yellow" key={i} />
        )
      );
    }
    return arr;
  };

  return (
    <div className="pointer group relative inline min-w-[100px] cursor-pointer rounded-md bg-gradient-to-b from-stone-500/40 via-stone-300/90 to-stone-400/70 py-1 px-1 text-center">
      <div
        className={`${
          isShow ? 'max-h-full max-w-full' : 'max-h-0 max-w-0'
        } group-hover:opacity-1 absolute bottom-9 left-0 flex w-full items-center justify-evenly rounded-md bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900/50 duration-300 group-hover:max-h-full group-hover:max-w-full`}
      >
        {getStars(stars)}
      </div>
      <span>{children}</span>
    </div>
  );
}
