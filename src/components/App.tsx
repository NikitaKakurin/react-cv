import Header from 'components/Header';
import Main from 'components/Main';
import Cover from 'components/Cover';
import { AiFillGithub } from 'react-icons/ai';
import Popup from 'components/popup/popup';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { portfolioWorks } from 'data/portfolioWorks';
import { hidePortfolioPopup } from 'app/actionsCreators/portfolioActionsCreators';

function App() {
  const { indexWork, popupVisible } = useAppSelector((state) => state.portfolio);
  const dispatch = useAppDispatch();
  return (
    <div className="container flex h-screen items-center justify-center overflow-hidden">
      <div className="w-full">
        <Header />
        <Cover>
          <Main />
        </Cover>
        <Popup popupVisible={popupVisible} setPopupVisible={() => dispatch(hidePortfolioPopup())}>
          <div className="p w-full max-w-[500px] rounded-lg bg-neutral-100 pb-3">
            <img
              src={portfolioWorks[indexWork].imageSrc}
              className="rounded-t-lg"
              alt={portfolioWorks[indexWork].name}
            />
            <h4 className="m-0 text-center text-lg">{portfolioWorks[indexWork].name}</h4>
            <div className="text-md text-center">{portfolioWorks[indexWork].skills}</div>
            <div className="flex items-center justify-center gap-5 py-2">
              <a
                href={portfolioWorks[indexWork].githubSrc}
                className="underline-none text-lg text-black hover:text-blue-500"
              >
                <AiFillGithub className="hover:text-blue-500" size={25} />
              </a>
              <a
                href={portfolioWorks[indexWork].deploySrc}
                className="underline-none text-lg text-black "
              >
                <span className="hover:text-blue-500">deploy</span>
              </a>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={() => dispatch(hidePortfolioPopup())}
                className="rounded-lg border-2 border-slate-900/40 bg-black/40 px-5 py-1 text-center text-slate-200 hover:bg-slate-900/60"
              >
                close
              </button>
            </div>
          </div>
        </Popup>
      </div>
    </div>
  );
}

export default App;
