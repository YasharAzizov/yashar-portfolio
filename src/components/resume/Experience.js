import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022-2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Təhsil Keyfiyyəti</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Kompüter Elmləri üzrə BSC"
            subTitle="DVI Universiteti (2023 - 2024)"
            result="AZE"
            des="İnsanları iqtisadiyyatın müxtəlif sahələrində və ya mədəniyyət sahələrində işləməyə hazırlamaq üçün universitetlər tərəfindən verilən təlimlər."
          />
          <ResumeCard
            title="AS - Elm və İnformasiya"
            subTitle="SuperKing Kolleci (2019 - 2022)"
            result="AZE"
            des="Ali təhsil elmi dərəcənin verilməsinə səbəb olan ali təhsildir. Ali təhsil, orta təhsildən sonrakı təhsil də deyilir."
          />
          <ResumeCard
            title="Orta məktəb təhsili"
            subTitle="Kingstar orta məktəbi (2017 - 2020)"
            result="AZE"
            des="Orta təhsil və ya ibtidai təhsildən sonrakı təhsil Təhsilin Beynəlxalq Standart Təsnifatı şkalası üzrə iki mərhələni əhatə edir."
          />
        </div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Təlimçi təcrübəsi</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="İdman zalı təlimatçısı"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="AZE"
            des="İnsanları iqtisadiyyatın müxtəlif sahələrində və ya mədəniyyət sahələrində işləməyə hazırlamaq üçün universitetlər tərəfindən verilən təlimlər."
          />
          <ResumeCard
            title="Veb Tərtibatçı və Təlimatçı"
            subTitle="SuperKing Kolleci (2010 - 2014)"
            result="AZE"
            des="Ali təhsil elmi dərəcənin verilməsinə səbəb olan ali təhsildir. Ali təhsil, orta təhsildən sonrakı təhsil də deyilir."
          />
          <ResumeCard
            title="Məktəb müəllimi"
            subTitle="Kingstar orta məktəbi (2001 - 2010)"
            result="AZE"
            des="Orta təhsil və ya ibtidai təhsildən sonrakı təhsil Təhsilin Beynəlxalq Standart Təsnifatı şkalası üzrə iki mərhələni əhatə edir."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
