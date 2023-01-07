import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { portfolioWorks } from 'data/portfolioWorks';
import { setIndexWork, showPortfolioPopup } from 'app/slices/portfolioSlice';
import { useAppDispatch } from 'app/hooks';

export default function Slider() {
  const dispatch = useAppDispatch();
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
                dispatch(setIndexWork(index));
                dispatch(showPortfolioPopup());
              }}
            >
              <h4 className="m-0 text-lg">{work.name}</h4>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}
