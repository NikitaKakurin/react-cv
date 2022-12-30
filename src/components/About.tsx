import React from 'react';
import myFoto from 'assets/img/me.jpg';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineHome, AiOutlineMail, AiFillGithub } from 'react-icons/ai';

export default function About() {
  return (
    <div className="w-[50%] border-x-[1px] border-black px-[1px] shadow-leftPage">
      <div className="flex items-center sm:flex-col md:flex-row md:justify-evenly md:p-2 lg:p-3 2xl:mx-auto 2xl:w-[600px]">
        <div className="w-[40%] border-2 border-black/20 p-1">
          <div className="rotate-1 rounded-lg bg-slate-100 p-3">
            <img src={myFoto} alt="my foto" className="object-contain" />
          </div>
        </div>
        <div className="w-[60%]">
          <h2 className="text-center font-medium xs:text-xl sm:my-0 lg:text-2xl">Какурин Никита</h2>
          <h3 className="text-center font-medium xs:text-lg sm:my-0 lg:text-xl">
            frontend developer
          </h3>
          <div className="text-center font-medium xs:text-base lg:text-lg">1987 г.р.</div>
          <div className="text-center font-medium xs:text-base lg:text-lg">женат</div>
        </div>
      </div>
      <address className="px-4">
        <h5 className="w-full text-lg">Контакты:</h5>
        <div className="xs:pl-4 xl:flex xl:flex-wrap xl:items-center xl:justify-center xl:gap-x-3">
          <ul className="m-0 px-2 xs:px-4">
            <li className="flex items-center gap-x-2 xs:pl-2 xl:pl-0">
              <AiOutlineHome size={18} />
              <span> Voronezh, Russia;</span>
            </li>
            <li className="group xs:pl-2 xl:pl-0">
              <a
                className="flex items-center gap-x-2 text-black no-underline"
                href="tel:+79515614387"
              >
                <BsTelephone
                  size={18}
                  className="duration-700 group-hover:rotate-[720deg] group-hover:text-blue-500"
                />
                <span>+7(951)-561-43-87;</span>
              </a>
            </li>
          </ul>
          <ul className="m-0 px-2 xs:px-4">
            <li className="group xs:pl-2 xl:pl-0">
              <a
                className="flex items-center gap-x-2 text-black no-underline"
                href="mailto:Kakurinn.v@yandex.ru"
              >
                <AiOutlineMail
                  size={18}
                  className="duration-700 group-hover:rotate-[720deg] group-hover:text-blue-500"
                />
                <span>KakurinN.V@yandex.ru;</span>
              </a>
            </li>
            <li className="group xs:pl-2 xl:pl-0">
              <a
                className="group flex items-center gap-x-2 text-black no-underline"
                href="https://github.com/NikitaKakurin"
              >
                <AiFillGithub
                  size={18}
                  className="duration-700 group-hover:rotate-[720deg] group-hover:text-blue-500"
                />
                <span>NikitaKakurin;</span>
              </a>
            </li>
          </ul>
        </div>
      </address>
      <div className="px-4">
        <h5 className="w-full text-lg">Языки:</h5>
        <ul className="p-x-4 m-0">
          <li className="">English (pre-intermediate)</li>
          <li className="">Russian (native)</li>
        </ul>
      </div>
      <div className="px-4">
        <h5 className="w-full text-lg ">Обо мне:</h5>
        <p className="text-justify indent-6">
          Добрый день. У меня высшее образование в области автоматизации производственных систем, но
          я хочу стать фронтенд-разработчиком и я надеюсь вы поможете мне в этом.
        </p>
      </div>
    </div>
  );
}
