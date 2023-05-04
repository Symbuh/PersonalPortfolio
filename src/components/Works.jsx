import { motion, useAnimation } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const controls = useAnimation();
  const githubIcon = useAnimation();

  const handleMouseEnter = async () => {
    controls.start({ scale: 1.1 });
    await githubIcon.start({ scale: 1.3, backgroundColor: 'FBBF24' });
    githubIcon.start({ scale: 1.2, backgroundColor: 'black' });
  };

  const handleMouseLeave = () => {
    controls.start({ scale: 1 });
    githubIcon.start({ scale: 1, backgroundColor: 'black' });
  };

  return (
    <div className='sm:w-[360px] w-full'>
      <motion.div
        variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
        animate={controls}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='bg-tertiary p-5 rounded-2xl sm:w[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end margin-3 card-img_hover'>
            <motion.div
              onClick={() => window.open(source_code_link, '_blank')}
              animate={githubIcon}
              className='w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              style={{ backgroundColor: 'black' }}
            >
              <img src={github} alt={github} className='w-1/2 h-1/2' />
            </motion.div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-24px'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects showcase my skill and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos if available (some projects
          aren't deployed). They demonstrate my abilities to solve complex
          problems, work with different technologies, and manage projects
          effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`Project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

//TODO: add 'works' section to your header.
export default SectionWrapper(Works, '');
