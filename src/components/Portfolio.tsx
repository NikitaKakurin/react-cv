import Slider from './slider/Slider';

export default function Portfolio() {
  return (
    <div className="w-[50%] border-x-[1px] border-black px-[1px] shadow-rightPage">
      <div className="p-4">
        <h2 className="text-center font-marck text-4xl">Портфолио:</h2>
        <div className="relative flex h-[70vh] w-full items-center justify-center">
          <div className="w-full rounded-lg">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
}
