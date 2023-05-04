import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies, extraTechnologies } from '../constants';

const Tech = () => {
  return (
    <div
      className='flex flex-row flex-wrap justify-center gap-10 mb-1'
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

export default SectionWrapper(Tech, '');
