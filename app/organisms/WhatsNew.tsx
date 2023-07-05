import { motion } from "framer-motion";

import styles from "~/styles";
import { TypingText, TitleText } from "~/molecules/CustomText";
import { fadeIn, planetVariants, staggerContainer } from "~/utils/motion";
import { newFeatures } from "~/constants";

const GetStarted = () => {
  return (
    <section className={`${styles.paddings} relative z-10`} id="whats-new">
      <motion.div
        variants={staggerContainer(0.2, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8`}
      >
        {/* Data */}
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| What's new?" textStyles="text-start" />
          <TitleText
            title={
              <>
                What's new about <br className="md:block hidden" /> Metaversus
              </>
            }
            textStyles="text-start"
          />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]"
              >
                <div
                  className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
                >
                  <img
                    className="w-1/2 h-1/2 object-contain"
                    src={feature.imgUrl}
                    alt="planet"
                  />
                </div>
                <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">{feature.title}</h1>
                <p className="flex-1 mt-[30px] font-norml text-[18px] text-[#B0B0B0] leading-[32px]">
                  {feature.subtitle}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Planet */}
        <motion.div
          variants={planetVariants("right")}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img
            src="/whats-new.png"
            alt="planet"
            className=" w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
