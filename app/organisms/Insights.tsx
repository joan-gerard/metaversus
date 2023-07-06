import { motion } from "framer-motion";

import styles from "~/styles";
import { TypingText, TitleText } from "~/molecules/CustomText";
import { staggerContainer, fadeIn } from "~/utils/motion";
import { insights } from "~/constants";

function InsightCard({
  imgUrl,
  title,
  subtitle,
  idx,
}: {
  imgUrl: string;
  title: string;
  subtitle: string;
  idx: number;
}) {
  return (
    <motion.div
      variants={fadeIn("up", "spring", idx * 0.5, 1)}
      className="flex md:flex-row flex-col gap-4"
    >
      <img
        src={imgUrl}
        alt="planet"
        className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
      />
      <div className="w-full flex justify-between items-center">
        <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
          <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
            {title}
          </h4>
          <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
            {subtitle}
          </p>
        </div>
        <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
          <img
            src="arrow.svg"
            alt="arrow"
            className="w-[40%] h-[40%] object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
}

const Insights = () => {
  return (
    <section className={`${styles.paddings} relative z-10`} id="whats-new">
      <motion.div
        variants={staggerContainer(0.2, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Insights" textStyles="text-center" />
        <TitleText title="Insight about Metavserse" textStyles="text-center" />

        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((insight, idx) => (
            <InsightCard key={idx} {...insight} idx={idx + 1} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
