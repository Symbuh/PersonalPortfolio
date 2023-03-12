import { motion } from 'framer-motion';

import { styles } from '../styles';
import { StaggerContainer } from '../utils/motion';

const SectionWrapper = (component, idName) => {
  function HOC() {
    return (
      <motion.section>
        <Component />
      </motion.section>
    );
  }
};
