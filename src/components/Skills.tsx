import { skillsLevel } from 'data/skills';
import React, { useEffect, useState } from 'react';
import CustomScrollbar from './customScrollbar/CustomScrollbar';
import SkillsItem from './SkillsItem';
import { selectDeviceFormat } from 'app/slices/deviceFormatSlice';
import { useAppSelector } from 'app/hooks';
import { selectLang } from 'app/slices/langSlice';
import i18n from 'i18n';

export default function Skills() {
  const isDesktop = useAppSelector(selectDeviceFormat);
  const lang = useAppSelector(selectLang);

  const skillsData = Object.entries(skillsLevel);
  const skillsCount = skillsData.length;
  const [indexShowTooltip, setIndexShowTooltip] = useState(0);
  useEffect(() => {
    const showTooltipInterval = setInterval(() => {
      setIndexShowTooltip(Math.floor(Math.random() * skillsCount));
    }, 3000);
    return () => {
      clearInterval(showTooltipInterval);
    };
  }, []);

  return (
    <section id="Skills" className="w-full px-[1px] md:w-[50%] md:shadow-rightPage">
      <CustomScrollbar isShow={isDesktop}>
        <div className="p-4">
          <h2 className="text-center font-marck text-4xl">{i18n[lang].skills}:</h2>
          <div className="flex flex-wrap items-center justify-evenly gap-2 pb-2 pt-4">
            {skillsData.map(([skill, stars], index) => (
              <SkillsItem stars={stars} key={index} isShow={index === indexShowTooltip}>
                {skill}
              </SkillsItem>
            ))}
          </div>
          <div className="pt-3 text-center font-marck text-xl">to be continued...</div>
        </div>
      </CustomScrollbar>
    </section>
  );
}
