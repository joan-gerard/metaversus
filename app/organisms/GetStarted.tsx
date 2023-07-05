import { motion } from "framer-motion";

import styles from "~/styles";
import { TypingText, TitleText } from "~/molecules/CustomText";
import { fadeIn, planetVariants, staggerContainer } from "~/utils/motion";
import { getStartedInstructions } from "~/constants";

const GetStarted = () => {
  return (
    <section className={`${styles.paddings} relative z-10`} id="get-started">
      <motion.div
        variants={staggerContainer(0.2, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8`}
      >
        {/* Planet */}
        <motion.div
          variants={planetVariants("left")}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img
            src="/get-started.png"
            alt="planet"
            className=" w-[90%] h-[90%] object-contain"
          />
        </motion.div>

        {/* Data */}
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| How Metaversus Works" textStyles="text-start" />
          <TitleText
            title={
              <>
                Get started with <br className="md:block hidden" /> just a few
                clicks
              </>
            }
            textStyles="text-start"
          />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {getStartedInstructions.map((instruction) => (
              <div
                key={instruction.id}
                className={`${styles.flexCenter} flex-row`}
              >
                <div
                  className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
                >
                  <p className="text-white font-bold text-[20px]">
                    {instruction.number}
                  </p>
                </div>
                <p className="flex-1 ml-[30px] font-norml text-[18px] text-[#B0B0B0] leading-[32px]">
                  {instruction.details}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
