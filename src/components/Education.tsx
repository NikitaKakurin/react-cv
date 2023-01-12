import React from 'react';
import CustomScrollbar from './customScrollbar/CustomScrollbar';
import { selectDeviceFormat } from 'app/slices/deviceFormatSlice';
import { useAppSelector } from 'app/hooks';
import { selectLang } from 'app/slices/langSlice';
import i18n from 'i18n';
export default function Education() {
  const isDesktop = useAppSelector(selectDeviceFormat);
  const lang = useAppSelector(selectLang);
  return (
    <div id="Education" className="w-full px-[1px] md:w-[50%] md:shadow-leftPage">
      <CustomScrollbar isShow={isDesktop} side="left">
        <div className="p-4">
          <h2 className="text-center font-marck text-4xl">{i18n[lang].education}:</h2>

          <div>
            <h4 className="text-base font-medium">Высшее:</h4>
            <p className="pl-4 text-justify">2004-2009: {i18n[lang].univer}</p>
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
                <span className="text-blue-800 hover:text-blue-600">
                  ({i18n[lang].certificate})
                </span>
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
                <span className="text-blue-800 hover:text-blue-600">
                  ({i18n[lang].certificate})
                </span>
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
                <span className="text-blue-800 hover:text-blue-600">
                  ({i18n[lang].certificate})
                </span>
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
                <span className="text-blue-800 hover:text-blue-600">
                  ({i18n[lang].certificate})
                </span>
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
                <span className="text-blue-800 hover:text-blue-600">
                  ({i18n[lang].certificate})
                </span>
              </a>
            </p>
          </div>
        </div>
      </CustomScrollbar>
    </div>
  );
}
