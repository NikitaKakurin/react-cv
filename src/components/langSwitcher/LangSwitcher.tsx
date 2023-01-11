import React from 'react';
import './style.css';
import { MdLanguage } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectLang } from 'app/slices/langSlice';
import { setLang } from 'app/actionsCreators/langActionsCreators';
export default function LangSwitcher() {
  const dispatch = useAppDispatch();
  const selectedLang = useAppSelector(selectLang);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLang(e.target.value));
  };
  return (
    <div className="lang-switcher">
      <label className="lang__label" htmlFor="lang-en">
        <span className="lang__text-en">EN</span>
      </label>
      <div className="switcher-toggle">
        <input
          className="lang__radio-en"
          type="radio"
          name="lang"
          id="lang-en"
          value="en"
          checked={'en' === selectedLang}
          onChange={handleChange}
        />
        <input
          className="lang__radio-ru"
          type="radio"
          name="lang"
          id="lang-ru"
          value="ru"
          defaultChecked={'ru' === selectedLang}
          onChange={handleChange}
        />
        <div className="switcher-handle">
          <MdLanguage size={20} />
        </div>
      </div>
      <label className="lang__label" htmlFor="lang-ru">
        <span className="lang__text-ru">RU</span>
      </label>
    </div>
  );
}
