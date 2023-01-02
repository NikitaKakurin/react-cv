import { skillsLevel } from 'data/skills';
import React, { useEffect, useState } from 'react';
import SkillsItem from './SkillsItem';

export default function Skills() {
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
    <div className="w-[50%] border-x-[1px] border-black px-[1px] shadow-rightPage">
      <div className="p-4">
        <h2 className="text-center font-marck text-4xl">Навыки:</h2>
        <div className="flex flex-wrap items-center justify-evenly gap-2">
          {skillsData.map(([skill, stars], index) => (
            <SkillsItem stars={stars} key={index} isShow={index === indexShowTooltip}>
              {skill}
            </SkillsItem>
          ))}
        </div>
      </div>
    </div>
  );
}
