import Link from "next/link";
import Image from "next/image";
import SectionTitle from "../sectionTitle";

import portfolio1 from "../../assets/images/portfolio-1.jpg";
import portfolio2 from "../../assets/images/portfolio-2.jpg";
import portfolio3 from "../../assets/images/portfolio-3.jpg";
import portfolio4 from "../../assets/images/portfolio-4.jpg";
import portfolio5 from "../../assets/images/portfolio-5.jpg";
import portfolio6 from "../../assets/images/portfolio-6.jpg";

const worksData = [
    { href: "#", img: portfolio1, title: "Our Photography", desc: "Design" },
    { href: "#", img: portfolio2, title: "Our Photography", desc: "Design" },
    { href: "#", img: portfolio3, title: "Our Photography", desc: "Design" },
    { href: "#", img: portfolio4, title: "Our Photography", desc: "Design" },
    { href: "#", img: portfolio5, title: "Our Photography", desc: "Design" },
    { href: "#", img: portfolio6, title: "Our Photography", desc: "Design" }
];

const LatestWorks = () => {
    return (
        <div id="work" className="relative py-[60px] md:py-[100px]">
            <div className="container mx-auto px-15">
                <SectionTitle title="LATEST WORKS" desc="A Lead UX & UI designer based in Canada" />
                <div className="grid grid-cols-1 xsm:grid-cols-2 xmd:grid-cols-3 gap-[30px] pt-15 mt-[35px]">
                    {worksData?.map((data, index) =>
                        <Link href={data?.href} key={index}>
                            <div className="group rounded-[5px] relative overflow-hidden">
                                <div className="w-full h-full">
                                    <Image src={data?.img} alt="works" className="rounded-[5px] duration-500 transition-all ease-in-out group-hover:scale-110 max-h-[350px]" />
                                </div>
                                <div className="absolute inset-0 bg-[#090a0c80] opacity-0 group-hover:opacity-100 flex items-center justify-center flex-col duration-500 transition-all ease-in-out">
                                    <h3 className="text-[25px] font-semibold text-white relative right-[25px] group-hover:right-0 duration-500 transition-all ease-in-out">{data?.title}</h3>
                                    <p className="text-[#ffffffcc] text-sm font-medium mt-1.5">{data?.desc}</p>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LatestWorks;