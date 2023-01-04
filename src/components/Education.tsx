import React from 'react';
import CustomScrollbar from './customScrollbar/CustomScrollbar';

export default function Education() {
  return (
    <div className="w-[50%] border-x-[1px] border-black px-[1px] shadow-leftPage">
      <div className="p-4">
        <h2 className="text-center font-marck text-4xl">Образование:</h2>
        <CustomScrollbar side="left">
          <div>
            <h4 className="text-base font-medium">Высшее:</h4>
            <p className="pl-4 text-justify">
              2004-2009: Украина, Алчевск, Доннбасский Государственный Технический Университет -
              Инженер электронной техники.
            </p>
            <h4 className="text-base font-medium">Курсы:</h4>
            <p className="pl-4 text-justify">
              2021:
              <a
                target="_blank"
                href="https://app.rs.school/certificate/twna8f9d"
                className="pl-2 text-black no-underline hover:text-blue-500 active:text-black"
                rel="noreferrer"
              >
                <span className="hover:text-blue-700">
                  THE ROLLING SCOPES SCHOOL JS/FE PRE-SCHOOL (JAVASCRIPT)(сертификат)
                </span>
              </a>
            </p>
            <p className="pl-4 text-justify">
              2022:
              <a
                target="_blank"
                href="https://app.rs.school/certificate/1jafrdps"
                className="pl-2 text-black no-underline hover:text-blue-500 active:text-black"
                rel="noreferrer"
              >
                <span className="hover:text-blue-700">
                  THE ROLLING SCOPES SCHOOL JS/FE PRE-SCHOOL 2022 (JAVASCRIPT)(сертификат)
                </span>
              </a>
            </p>
            <p className="pl-4 text-justify">
              2022:
              <a
                target="_blank"
                href="https://app.rs.school/certificate/twna8f9d"
                className="pl-2 text-black no-underline hover:text-blue-500 active:text-black"
                rel="noreferrer"
              >
                <span className="hover:text-blue-700">
                  THE ROLLING SCOPES SCHOOL JAVASCRIPT/FRONT-END 2022Q1 (JAVASCRIPT) (сертификат)
                </span>
              </a>
            </p>
            <p className="pl-4 text-justify">
              2022:
              <a
                target="_blank"
                href="https://app.rs.school/certificate/twna8f9d"
                className="pl-2 text-black no-underline hover:text-blue-500 active:text-black"
                rel="noreferrer"
              >
                <span className="hover:text-blue-700">
                  THE ROLLING SCOPES SCHOOL JAVASCRIPT/FRONT-END 2022Q1 (JAVASCRIPT) (сертификат)
                </span>
              </a>
            </p>
            <p className="pl-4 text-justify">
              2022:
              <a
                target="_blank"
                href="https://app.rs.school/certificate/7ebfs519"
                className="pl-2 text-black no-underline hover:text-blue-500 active:text-black"
                rel="noreferrer"
              >
                <span className="hover:text-blue-700">
                  THE ROLLING SCOPES SCHOOL REACT 2022 Q3 (JAVASCRIPT) (сертификат)
                </span>
              </a>
            </p>
          </div>
        </CustomScrollbar>
      </div>
    </div>
  );
}
