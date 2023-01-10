import Header from 'components/Header';
import Main from 'components/Main';
import Cover from 'components/Cover';
import Popup from 'components/popup/Popup';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { hidePortfolioPopup } from 'app/actionsCreators/portfolioActionsCreators';
import PortfolioModal from './PortfolioModal';
import { useEffect } from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Education from './Education';
import {
  setDesktopFormat,
  setMobileFormat,
  selectDeviceFormat,
} from 'app/slices/deviceFormatSlice';
import Footer from './Footer';

function App() {
  const { popupVisible } = useAppSelector((state) => state.portfolio);
  const isDesktop = useAppSelector(selectDeviceFormat);
  const dispatch = useAppDispatch();
  const checkDeviceFormat = () => {
    window.innerWidth >= 768 ? dispatch(setDesktopFormat()) : dispatch(setMobileFormat());
  };
  useEffect(() => {
    checkDeviceFormat();
    window.addEventListener('resize', checkDeviceFormat);
    return () => {
      window.removeEventListener('resize', checkDeviceFormat);
    };
  }, []);
  return (
    <div className="flex max-w-full items-center justify-center bg-[#EBD5B3] md:h-screen md:overflow-hidden md:bg-[#ad936c] md:px-[5%]">
      <div className="h-full w-full">
        <Header />

        {isDesktop ? (
          <Cover>
            <Main />
          </Cover>
        ) : (
          <div className="h-full w-full bg-[#EBD5B3] md:hidden">
            <About />
            <Skills />
            <Education />
            <Portfolio />
          </div>
        )}

        <Popup popupVisible={popupVisible} setPopupVisible={() => dispatch(hidePortfolioPopup())}>
          <PortfolioModal />
        </Popup>
        <Footer />
      </div>
    </div>
  );
}

export default App;
