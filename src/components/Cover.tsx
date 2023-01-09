import React from 'react';
interface IProps {
  children: JSX.Element;
}

export default function Cover({ children }: IProps) {
  return (
    <div className=" hidden h-[90vh] w-full items-center justify-center bg-neutral-700 px-[6px] py-[2px] md:flex">
      <div className="h-full w-full bg-[#EBD5B3] px-[2px]">
        <div className=" h-full w-full border-x-[1px] border-black px-[1px]">
          <div className="h-full w-full border-x-[1px] border-black  px-[1px]">
            <div className="h-full w-full border-x-[1px] border-black  px-[1px]">
              <div className="h-full w-full border-x-[1px] border-black  px-[1px]">
                <div className="h-full w-full border-x-[1px] border-black  px-[1px]">
                  <div className="flex h-full w-full border-x-[1px]  border-black px-[1px]">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
