import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies, extraTechnologies } from '../constants';

const Tech = () => {
  return (
    <div
      className='flex flex-row flex-wrap justify-center gap-10'
      key='techs-div-1'
    >
      {technologies.map((tech, index) => (
        <div className='h-28 w-28 flex justify-center' key={tech.name}>
          <BallCanvas icon={tech.icon} technology={tech.name} />
        </div>
      ))}
    </div>
  );
};

//w-1/4 md:w-1/6 sm:w-1/3 xs:w-1/2 min-w-[8rem] max-w-[12rem] h-28

// h-28 w-28

export default SectionWrapper(Tech, '');
