import Slider from './slider/Slider';

export default function Portfolio() {
  return (
    <div
      id="Portfolio"
      className="w-full border-black px-[1px] md:w-[50%] md:border-x-[1px] md:shadow-rightPage"
    >
      <div className="p-4">
        <h2 className="text-center font-marck text-4xl">Портфолио:</h2>
        <div className="relative flex w-full items-center justify-center md:h-[70vh]">
          <div className="w-full rounded-lg">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
}
