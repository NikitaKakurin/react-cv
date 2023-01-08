import Header from 'components/Header';
import Main from 'components/Main';
import Cover from 'components/Cover';
import Popup from 'components/popup/popup';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { hidePortfolioPopup } from 'app/actionsCreators/portfolioActionsCreators';
import PortfolioModal from './PortfolioModal';

function App() {
  const { popupVisible } = useAppSelector((state) => state.portfolio);
  const dispatch = useAppDispatch();
  return (
    <div className="container flex h-screen items-center justify-center overflow-hidden">
      <div className="w-full">
        <Header />
        <Cover>
          <Main />
        </Cover>
        <Popup popupVisible={popupVisible} setPopupVisible={() => dispatch(hidePortfolioPopup())}>
          <PortfolioModal />
        </Popup>
      </div>
    </div>
  );
}

export default App;
