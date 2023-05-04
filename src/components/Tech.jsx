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
        <div className='w-28 h-28 hover:' key={tech.name}>
          <BallCanvas icon={tech.icon} technology={tech.name} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
