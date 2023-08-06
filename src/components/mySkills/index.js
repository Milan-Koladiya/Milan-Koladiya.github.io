import { useEffect, useState } from "react";
import Image from "next/image";
import ProgressBar from "../progressBar";
import SectionTitle from "../sectionTitle";

import disk from "../../assets/images/compact-disk.svg";
import trophy from "../../assets/images/trophy.svg";
import mug from "../../assets/images/mug.svg";
import flag from "../../assets/images/flag.svg";

const skillsData = [
    { icon: disk, title: "4+ Years of experience" },
    { icon: trophy, title: "Top rated Freelancer" },
    { icon: mug, title: "Worked on 70+ Projects" },
    { icon: flag, title: "Without any negative reviews in the last 3 years" }
];

const MySkills = () => {
    const [animateSkills, setAnimateSkills] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const skillsSection = document.getElementById("skills");
            if (skillsSection) {
                const rect = skillsSection.getBoundingClientRect();
                const isSkillsVisible = rect.top < window.innerHeight && rect.bottom >= 0;
                setAnimateSkills(isSkillsVisible);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div id="skills" className="relative py-[60px] md:py-[100px]">
                <div className="container mx-auto px-15">
                    <SectionTitle title="MY SKILLS" desc="A Lead Fullstack Developer based in India" />
                    <div className="grid grid-cols-1 xmd:grid-cols-2 mt-[35px] items-center justify-between">
                        <div className={`my-[15px] ${animateSkills ? "animate-skills" : ""}`}>
                            <ProgressBar title="React Development" pers={85} className="mt-[30px]" animateSkills={animateSkills} />
                            <ProgressBar title="Vue/Angular Development" pers={70} className="mt-[30px]" animateSkills={animateSkills} />
                            <ProgressBar title="Backend NodeJS Development" pers={85} className="mt-[30px]" animateSkills={animateSkills} />
                            <ProgressBar title="FullStack Stack Development" pers={80} className="mt-[30px]" animateSkills={animateSkills} />
                            <ProgressBar title="Amazon Web Service" pers={65} className="mt-[30px]" animateSkills={animateSkills} />
                            <ProgressBar title="React Native Development" pers={80} className="mt-[30px]" animateSkills={animateSkills} />
                        </div>
                        <div className="my-[15px] xmd:pl-[80px] xl:pl-[100px] pt-4 xmd:pt-0">
                            <div className="grid grid-cols-2 gap-2.5 xsm:gap-[30px]">
                                {skillsData?.map((data) =>
                                    <div key={data?.title} className="min-h-[90px] py-[18px] px-15 rounded-[5px] bg-white border-2 border-primary shadow-light-dark flex items-center">
                                        <Image src={data?.icon} alt="skills" width={30} height={30} className="min-w-[30px] min-h-[30px] max-h-[30px]" />
                                        <h5 className="text-base font-medium ml-3 xsm:ml-5">{data?.title}</h5>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MySkills;