import { useAppSelector } from 'app/hooks';
import { selectLang } from 'app/slices/langSlice';
import i18n from 'i18n';
import Slider from './slider/Slider';

export default function Portfolio() {
  const lang = useAppSelector(selectLang);
  return (
    <div
      id="Portfolio"
      className="w-full border-black px-[1px] md:w-[50%] md:border-x-[1px] md:shadow-rightPage"
    >
      <div className="p-4">
        <h2 className="text-center font-marck text-4xl">{i18n[lang].portfolio}:</h2>
        <div className="relative flex w-full flex-col items-center justify-center md:h-[70vh]">
          <div className="w-full rounded-lg">
            <Slider />
          </div>
          <a href="https://www.codewars.com/users/NikitaKakurin/">
            <img src="https://www.codewars.com/users/NikitaKakurin/badges/small" alt="codewars" />
          </a>
        </div>
      </div>
    </div>
  );
}
