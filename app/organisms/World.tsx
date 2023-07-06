import { motion } from "framer-motion";

import styles from "~/styles";
import { TypingText, TitleText } from "~/molecules/CustomText";
import { fadeIn, staggerContainer } from "~/utils/motion";
import { mapAvatars } from "~/constants";

function AvatarCard({
  imgUrl,
  position,
  idx,
}: {
  imgUrl: string;
  position: string;
  idx: number;
}) {
  return (
    <motion.div
      variants={fadeIn("down", "spring", idx * 0.4, 0.25)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className={`${styles.avatarStyle} ${position}`}
    >
      <img src={imgUrl} alt="people" className="w-full h-full" />
    </motion.div>
  );
}

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`} id="whats-new">
      <motion.div
        variants={staggerContainer(0.2, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| People on the World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world
            </>
          }
          textStyles="text-center"
        />

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[55opx]"
        >
          <img
            src="/map.png"
            alt="map"
            className="w-full f-full object-cover"
          />

          {mapAvatars.map((avatar, idx) => (
            <AvatarCard key={idx} idx={idx + 1} {...avatar} />
          ))}
          {/* <div className={`${styles.avatarStyle} ${styles.people01}`}>
            <img src="/people-01.png" alt="people" className="w-full h-full" />
          </div>
          <div className={`${styles.avatarStyle} ${styles.people02}`}>
            <img src="/people-02.png" alt="people" className="w-full h-full" />
          </div>
          <div className={`${styles.avatarStyle} ${styles.people03}`}>
            <img src="/people-03.png" alt="people" className="w-full h-full" />
          </div> */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
