import myFoto from 'assets/img/me.jpg';
import { BsTelephone, BsTelegram } from 'react-icons/bs';
import { AiOutlineHome, AiOutlineMail, AiFillGithub } from 'react-icons/ai';
import CustomScrollbar from './customScrollbar/CustomScrollbar';
import { useAppSelector } from 'app/hooks';
import { selectDeviceFormat } from 'app/slices/deviceFormatSlice';
import { selectLang } from 'app/slices/langSlice';
import i18n from 'i18n';
export default function About() {
  const isDesktop = useAppSelector(selectDeviceFormat);
  const lang = useAppSelector(selectLang);
  return (
    <div
      id="About"
      className="h-full border-black px-[1px] md:w-[50%] md:border-x-[1px] md:shadow-leftPage"
    >
      <CustomScrollbar isShow={isDesktop} side="left">
        <>
          <div className="flex flex-col items-center md:flex-row md:justify-evenly md:p-2 lg:p-3 2xl:mx-auto 2xl:w-[600px]">
            <div className="mt-2 w-[250px] border-2 border-black/20 p-1 md:mt-0 md:w-[40%]">
              <div className="rotate-1 rounded-lg bg-slate-100 p-[8%]">
                <img src={myFoto} alt="my foto" className="object-contain" />
              </div>
            </div>
            <div className="w-[60%]">
              <h2 className="text-center text-xl font-medium lg:text-2xl">{i18n[lang].FIO}</h2>
              <h3 className="text-center text-lg font-medium lg:text-xl">frontend developer</h3>
              <div className="text-center font-medium xs:text-base lg:text-lg">
                {i18n[lang].year}
              </div>
              <div className="text-center font-medium xs:text-base lg:text-lg">
                {i18n[lang].status}
              </div>
            </div>
          </div>

          <address className="px-4">
            <h5 className="w-full text-lg">{i18n[lang].contacts}:</h5>
            <div className="xs:pl-4 xl:flex xl:flex-wrap xl:items-center xl:justify-center xl:gap-x-3">
              <ul className="m-0 px-2 xs:px-4">
                <li className="flex items-center gap-x-2 xs:pl-2 xl:pl-0">
                  <AiOutlineHome size={18} />
                  <span> {i18n[lang].place}</span>
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
                <li className="group xs:pl-2 xl:pl-0">
                  <a
                    className="group flex items-center gap-x-2 text-black no-underline"
                    href="https://t.me/NikitaKFromVRN"
                  >
                    <BsTelegram
                      size={18}
                      className="duration-700 group-hover:rotate-[720deg] group-hover:text-blue-500"
                    />
                    <span>@NikitaKFromVRN</span>
                  </a>
                </li>
              </ul>
            </div>
          </address>
          <div className="px-4">
            <h5 className="w-full text-lg">{i18n[lang].lang}:</h5>
            <ul className="p-x-4 m-0">
              <li className="">{i18n[lang].en};</li>
              <li className="">{i18n[lang].ru};</li>
            </ul>
          </div>
          <div className="px-4">
            <h5 className="w-full text-lg ">{i18n[lang].about}:</h5>
            <p className="text-justify indent-6">{i18n[lang].aboutText}</p>
          </div>
          <div className="flex flex-col items-center justify-center py-2">
            <a href="./assets/doc/NikitaKakurin.pdf" download>
              {i18n[lang].print}
            </a>
            <a href="https://voronezh.hh.ru/resume/f6d4fa8bff0949282a0039ed1f74443166524c">hh.ru</a>
          </div>
        </>
      </CustomScrollbar>
    </div>
  );
}
