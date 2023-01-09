import React from 'react';
import CustomScrollbar from './customScrollbar/CustomScrollbar';
import { selectDeviceFormat } from 'app/slices/deviceFormatSlice';
import { useAppSelector } from 'app/hooks';

export default function Education() {
  const isDesktop = useAppSelector(selectDeviceFormat);
  return (
    <div
      id="Education"
      className="w-full border-black px-[1px] md:w-[50%] md:border-x-[1px] md:shadow-leftPage"
    >
      <div className="p-4">
        <h2 className="text-center font-marck text-4xl">Образование:</h2>
        <CustomScrollbar isShow={isDesktop} side="left">
          <div>
            <h4 className="text-base font-medium">Высшее:</h4>
            <p className="pl-4 text-justify">
              2004-2009: Украина, Алчевск, Доннбасский Государственный Технический Университет -
              Инженер электронной техники.
            </p>
            <h4 className="text-base font-medium">Курсы:</h4>
            <p className="pl-4 text-justify">
              2021:
              <span>THE ROLLING SCOPES SCHOOL JS/FE PRE-SCHOOL (JAVASCRIPT)</span>
              <a
                target="_blank"
                href="https://app.rs.school/certificate/twna8f9d"
                className="pl-2 text-black no-underline hover:text-blue-500 active:text-black"
                rel="noreferrer"
              >
                <span className="text-blue-800 hover:text-blue-600">(сертификат)</span>
              </a>
            </p>
            <p className="pl-4 text-justify">
              2022:
              <span>THE ROLLING SCOPES SCHOOL JS/FE PRE-SCHOOL 2022 (JAVASCRIPT)</span>
              <a
                target="_blank"
                href="https://app.rs.school/certificate/1jafrdps"
                className="pl-2 text-black no-underline hover:text-blue-500 active:text-black"
                rel="noreferrer"
              >
                <span className="text-blue-800 hover:text-blue-600">(сертификат)</span>
              </a>
            </p>
            <p className="pl-4 text-justify">
              2022:
              <span>THE ROLLING SCOPES SCHOOL JAVASCRIPT/FRONT-END 2022Q1 (JAVASCRIPT)</span>
              <a
                target="_blank"
                href="https://app.rs.school/certificate/twna8f9d"
                className="pl-2 text-black no-underline hover:text-blue-500 active:text-black"
                rel="noreferrer"
              >
                <span className="text-blue-800 hover:text-blue-600">(сертификат)</span>
              </a>
            </p>
            <p className="pl-4 text-justify">
              2022:
              <span>THE ROLLING SCOPES SCHOOL JAVASCRIPT/FRONT-END 2022Q1 (JAVASCRIPT) </span>
              <a
                target="_blank"
                href="https://app.rs.school/certificate/twna8f9d"
                className="pl-2 text-black no-underline hover:text-blue-500 active:text-black"
                rel="noreferrer"
              >
                <span className="text-blue-800 hover:text-blue-600">(сертификат)</span>
              </a>
            </p>
            <p className="pl-4 text-justify">
              2022:
              <span>THE ROLLING SCOPES SCHOOL REACT 2022 Q3 (JAVASCRIPT)</span>
              <a
                target="_blank"
                href="https://app.rs.school/certificate/7ebfs519"
                className="pl-2 text-black no-underline hover:text-blue-500 active:text-black"
                rel="noreferrer"
              >
                <span className="text-blue-800 hover:text-blue-600">(сертификат)</span>
              </a>
            </p>
          </div>
        </CustomScrollbar>
      </div>
    </div>
  );
}
