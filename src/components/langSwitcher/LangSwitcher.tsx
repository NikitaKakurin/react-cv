import React from 'react';
import './style.css';
import { MdLanguage } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectLang } from 'app/slices/langSlice';
import { setLang } from 'app/actionsCreators/langActionsCreators';
import type { langType } from 'i18n';

interface IProps {
  isTextLight?: boolean;
}
export default function LangSwitcher({ isTextLight = true }: IProps) {
  const dispatch = useAppDispatch();
  const lang = useAppSelector(selectLang);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const value = e.target.value as langType;
      dispatch(setLang(value));
      return;
    }
  };
  return (
    <div className="relative z-10 flex items-center gap-[5px]">
      <label
        className={`cursor-pointer text-center ${isTextLight ? 'text-gray-200' : 'text-gray-900'}`}
        htmlFor="lang-en"
      >
        <span className="inline-block h-5 cursor-pointer leading-5 text-inherit">EN</span>
      </label>
      <div className="relative z-30 h-5 w-10 cursor-pointer rounded-full bg-orange-200">
        <input
          className="absolute top-0 right-5 z-20 h-5 w-5 cursor-pointer rounded-full opacity-0"
          type="radio"
          name="lang"
          id="lang-en"
          value="en"
          checked={'en' === lang}
          onChange={handleChange}
        />
        <input
          className="absolute top-0 left-5 z-20 h-5 w-5 cursor-pointer rounded-full opacity-0"
          type="radio"
          name="lang"
          id="lang-ru"
          value="ru"
          checked={'ru' === lang}
          onChange={handleChange}
        />
        <div
          className={`absolute top-0 flex h-5 w-5 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-red-200 transition-[left_0.4s_easy] ${
            lang === 'en' ? 'left-[0px]' : 'left-5'
          }`}
        >
          <MdLanguage size={20} />
        </div>
      </div>
      <label
        className={`cursor-pointer text-center ${isTextLight ? 'text-gray-200' : 'text-gray-900'}`}
        htmlFor="lang-ru"
      >
        <span className="inline-block h-5 cursor-pointer leading-5 text-inherit">RU</span>
      </label>
    </div>
  );
}
