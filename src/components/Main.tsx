import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Education from './Education';
import { FlippingPages } from 'flipping-pages';
import 'flipping-pages/dist/style.css';
import { useAppSelector } from 'app/hooks';
import { setPage } from 'app/actionsCreators/pageActionsCreators';
import { selectPage } from 'app/slices/pageSlice';

export default function Main() {
  const page = useAppSelector(selectPage);

  return (
    <div className="h-full w-full">
      <FlippingPages
        direction="right-to-left"
        disableSwipe={true}
        onSwipeEnd={setPage}
        selected={page}
        animationDuration={500}
      >
        <div className="flex h-full w-full bg-[#EBD5B3]">
          <About />
          <Skills />
        </div>
        <div className="flex h-full w-full bg-[#EBD5B3]">
          <Education />
          <Portfolio />
        </div>
      </FlippingPages>
    </div>
  );
}
