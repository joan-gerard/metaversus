import { motion } from "framer-motion";
import { useState } from "react";

import styles from "~/styles";
import { TypingText, TitleText } from "~/molecules/CustomText";
import { ExploreCard } from "~/molecules/ExploreCard";
import { staggerContainer } from "~/utils/motion";
import { exploreWorlds } from "~/constants";

const Explore = () => {
  const [active, setActive] = useState('world-1');
  return (
    <section className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer(0.2, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidden" /> to
              explore
            </>
          }
          textStyles="text-center"
        />

        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
