import { motion } from "framer-motion";

import styles from "~/styles";
import { TypingText, TitleText } from "~/molecules/CustomText";
import { fadeIn, staggerContainer } from "~/utils/motion";

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`} id="whats-new">
      <motion.div
        variants={staggerContainer(0.2, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8`}
      >

      </motion.div>
    </section>
  );
};

export default World;
