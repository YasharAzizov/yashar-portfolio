import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
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
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">İş təcrübəsi</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Proqram Mühəndisi"
            subTitle="Google Out Tech - (2017 - indiki)"
            result="AZE"
            des="Google-un işə qəbul prosesi mədəniyyətimizin vacib hissəsidir. Google işçiləri öz komandalarına və onları təşkil edən insanlara böyük əhəmiyyət verirlər."
          />
          <ResumeCard
            title="Veb Tərtibatçı və Təlimçi"
            subTitle="333 Komandası - (2012 - 2016)"
            result="AZE"
            des="Yüksək ixtisaslı yerli məzunların sayının artması ilə məşhur bir yer, doğrudur ki, Malayziyada rolu təmin etmək asan deyil."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nİcat - (2021 - 2024)"
            result="AZE"
            des="Oman iqtisadiyyatı son illərdə özünü istehsalçı və innovasiyaya əsaslanan iqtisadiyyatdan çevirərək güclü şəkildə böyüdü."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
