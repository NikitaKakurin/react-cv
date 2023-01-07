import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Education from './Education';
import { FlippingPages } from 'flipping-pages';
import 'flipping-pages/dist/style.css';
import './flip.css';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { setPage } from 'app/actionsCreators/pageActionsCreators';
import { selectPage } from 'app/slices/pageSlice';

export default function Main() {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectPage);

  return (
    <>
      <div className="pages">
        <FlippingPages
          direction="right-to-left"
          disableSwipe={true}
          onSwipeEnd={setPage}
          selected={page}
          animationDuration={700}
        >
          <div className="page page1 flex">
            <About />
            <Skills />
          </div>
          <div className="page page2 flex">
            <Education />
            <Portfolio />
          </div>
        </FlippingPages>
      </div>
    </>
  );
}
