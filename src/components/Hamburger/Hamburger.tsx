import LangSwitcher from 'components/langSwitcher/LangSwitcher';
import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useAppSelector } from 'app/hooks';
import { selectLang } from 'app/slices/langSlice';
import i18n from 'i18n';
import './style.scss';

export default function Hamburger() {
  const lang = useAppSelector(selectLang);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((isOpen) => !isOpen);
  const backgroundRef = useRef(null);
  return (
    <>
      <div className="fixed top-0 right-3 z-50 flex border-collapse items-center justify-end rounded-lg border-[1px] border-black/50 bg-blue-200/80 px-2">
        <button className="relative z-50 ml-auto h-11 w-10" onClick={toggleMenu}>
          <span className="sr-only">Open/close main menu</span>
          <div
            className={`absolute top-2 h-0.5 w-full transform bg-current transition duration-500 ease-in-out ${
              isOpen ? 'translate-y-[12px] -rotate-45' : ''
            }`}
          ></div>
          <div
            className={`absolute top-5 h-0.5 w-full transform bg-current transition duration-500 ease-in-out ${
              isOpen ? 'opacity-0' : ''
            }`}
          ></div>
          <div
            className={`absolute top-8 h-0.5 w-full transform bg-current transition duration-500 ease-in-out ${
              isOpen ? '-translate-y-[12px] rotate-45' : ''
            }`}
          ></div>
        </button>
      </div>
      <CSSTransition
        nodeRef={backgroundRef}
        in={isOpen}
        timeout={200}
        mountOnEnter
        unmountOnExit
        classNames="background-animation"
      >
        <div className="background" onClick={() => setIsOpen(false)} ref={backgroundRef}></div>
      </CSSTransition>

      <nav
        className={`fixed top-0 right-[-300px] z-40 w-[300px] rounded-l-lg bg-white/95 transition-[right] ${
          isOpen ? 'right-[0px]' : ''
        }`}
      >
        <ul className="m-0 flex w-full list-none flex-col px-0 py-10 ">
          <li>
            <a className="burger-link" href="#About">
              {i18n[lang].about}
            </a>
          </li>
          <li>
            <a className="burger-link" href="#Skills">
              {i18n[lang].skills}
            </a>
          </li>
          <li>
            <a className="burger-link" href="#Education">
              {i18n[lang].education}
            </a>
          </li>
          <li>
            <a className="burger-link" href="#Portfolio">
              {i18n[lang].portfolio}
            </a>
          </li>
          <li>
            <span className="burger-link">
              <LangSwitcher isTextLight={false} />
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
}
