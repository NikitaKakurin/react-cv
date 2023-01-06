import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { AiFillGithub } from 'react-icons/ai';
import Popup from 'components/popup/popup';
import { portfolioWorks } from 'data/portfolioWorks';

export default function Slider() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [indexPortfolioWork, setIndexPortfolioWork] = useState(0);
  return (
    <>
      <Carousel
        showArrows={true}
        dynamicHeight={true}
        emulateTouch={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={true}
        autoPlay={true}
      >
        {portfolioWorks.map((work, index) => (
          <div key={index}>
            <img src={work.imageSrc} alt={work.name} />
            <div
              className="legend  !bottom-[1px] cursor-pointer !rounded-b-none transition-colors duration-300 hover:!text-blue-800"
              onClick={() => {
                setIndexPortfolioWork(index);
                setPopupVisible(true);
              }}
            >
              <h4 className="m-0 text-lg">{work.name}</h4>
            </div>
          </div>
        ))}
      </Carousel>
      <Popup popupVisible={popupVisible} setPopupVisible={setPopupVisible}>
        <div className="p w-full max-w-[500px] rounded-lg bg-neutral-100 pb-3">
          <img
            src={portfolioWorks[indexPortfolioWork].imageSrc}
            className="rounded-t-lg"
            alt={portfolioWorks[indexPortfolioWork].name}
          />
          <h4 className="m-0 text-center text-lg">{portfolioWorks[indexPortfolioWork].name}</h4>
          <div className="text-md text-center">{portfolioWorks[indexPortfolioWork].skills}</div>
          <div className="flex items-center justify-center gap-5 py-2">
            <a
              href={portfolioWorks[indexPortfolioWork].githubSrc}
              className="underline-none text-lg text-black hover:text-blue-500"
            >
              <AiFillGithub className="hover:text-blue-500" size={25} />
            </a>
            <a
              href={portfolioWorks[indexPortfolioWork].deploySrc}
              className="underline-none text-lg text-black "
            >
              <span className="hover:text-blue-500">deploy</span>
            </a>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={() => setPopupVisible(false)}
              className="rounded-lg border-2 border-slate-900/40 bg-black/40 px-5 py-1 text-center text-slate-200 hover:bg-slate-900/60"
            >
              close
            </button>
          </div>
        </div>
      </Popup>
    </>
  );
}
