import Image from "next/image";
import SectionTitle from "../sectionTitle";

import doorToken from "../../assets/images/Portfolio/door-token.png";
import doorToken2 from "../../assets/images/Portfolio/door-token2.png";
import doorToken3 from "../../assets/images/Portfolio/door-token3.png";
import doorToken4 from "../../assets/images/Portfolio/door-token4.png";
import doorToken5 from "../../assets/images/Portfolio/door-token5.png";
import portfolio2 from "../../assets/images/Portfolio/online-learning.jpg";
import portfolio2 from "../../assets/images/Portfolio/online-learning2.jpg";
import portfolio2 from "../../assets/images/Portfolio/online-learning3.jpg";
import portfolio3 from "../../assets/images/Portfolio/E-commarce.jpg";
import portfolio4 from "../../assets/images/Portfolio/E-commarce2.jpg";
import portfolio5 from "../../assets/images/Portfolio/Afordel.png";
import portfolio6 from "../../assets/images/Portfolio/image_large.png";
import portfolio7 from "../../assets/images/Portfolio/NFT-plateform.png";
import PortfolioDialog from "./PortfolioDialog";
import { useState } from "react";

const worksData = [
    { href: "https://mydoorwallet.com/#/auth/register", img: [doorToken, doorToken2, doorToken3, doorToken4, doorToken5], title: "Crypto Exchanger", desc: "Fullstack Development", techStack: ['React', 'Redux', 'Node', 'Typescript', 'MySQL', 'AWS'], fullDes: "<p>With this product, user can purchase door coins and other coins and also user can exchange their coins with other coins</p>" },
    { href: "#", img: [portfolio2], title: "Online Learning Platform", desc: "Fullstack Development", techStack: ['React', 'Node'], fullDes: "<p>dfsdfsd</p>" },
    { href: "#", img: [portfolio3], title: "E-Commarce For Food", desc: "Fullstack Development", techStack: ['React', 'Node'], fullDes: "<p>dfsdfsd</p>" },
    { href: "https://www.gyapu.com/", img: [portfolio4], title: "E-Commarce", desc: "Fullstack Development", techStack: ['React', 'Node'], fullDes: "<p>dfsdfsd</p>" },
    { href: "https://afordel.com/", img: [portfolio5], title: "Real-Estate Site for Buy and Sell Property", desc: "Fullstack Development", techStack: ['React', 'Node'], fullDes: "<p>dfsdfsd</p>" },
    { href: "#", img: [portfolio6], title: "Enterprise Pramotion Site", desc: "Fullstack Development", techStack: ['React', 'Node'], fullDes: "<p>dfsdfsd</p>" },
    { href: "#", img: [portfolio7], title: "NFT Exchanger", desc: "UI/UX Design", techStack: ['React', 'Node'], fullDes: "<p>dfsdfsd</p>" }
];

const LatestWorks = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPortfolio, setselectedPortfolio] = useState({});

    return (
        <>
            <div id="work" className="relative py-[60px] md:py-[100px]">
                <div className="container mx-auto px-15">
                    <SectionTitle title="LATEST WORKS" desc="A Lead Fullstack Developer based in India" />
                    <div className="grid grid-cols-1 xsm:grid-cols-2 xmd:grid-cols-3 gap-[30px] pt-15 mt-[35px]">
                        {worksData?.map((data, index) =>
                            <div style={{ cursor: "pointer" }} onClick={() => { setIsOpen(!isOpen); setselectedPortfolio(data) }} key={index}>
                                <div className="group rounded-[5px] relative overflow-hidden">
                                    <div className="w-full h-full">
                                        <Image src={data?.img?.[0]} alt="works" className="rounded-[5px] duration-500 transition-all ease-in-out group-hover:scale-110 max-h-[350px]" />
                                    </div>
                                    <div className="absolute inset-0 bg-[#090a0c80] opacity-0 group-hover:opacity-100 flex items-center justify-center flex-col duration-500 transition-all ease-in-out">
                                        <h3 className="text-[25px] font-semibold text-white relative right-[25px] group-hover:right-0 duration-500 transition-all ease-in-out">{data?.title}</h3>
                                        <p className="text-[#ffffffcc] text-sm font-medium mt-1.5">{data?.desc}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <PortfolioDialog isOpen={isOpen} setIsOpen={setIsOpen} selectedPortfolio={selectedPortfolio} />
        </>
    )
};

export default LatestWorks;