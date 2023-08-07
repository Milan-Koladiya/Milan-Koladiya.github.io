import Image from "next/image";
import SectionTitle from "../sectionTitle";

import doorToken from "../../assets/images/Portfolio/door-token.png";
import doorToken2 from "../../assets/images/Portfolio/door-token2.png";
import doorToken3 from "../../assets/images/Portfolio/door-token3.png";
import doorToken4 from "../../assets/images/Portfolio/door-token4.png";
import doorToken5 from "../../assets/images/Portfolio/door-token5.png";
import onlineLearning from "../../assets/images/Portfolio/online-learning.jpg";
import onlineLearning2 from "../../assets/images/Portfolio/online-learning2.jpg";
import onlineLearning3 from "../../assets/images/Portfolio/online-learning3.jpg";
import eCommarceJaime from "../../assets/images/Portfolio/E-commarce-Jaime.jpg";
import eCommarceJaime2 from "../../assets/images/Portfolio/E-commarce-Jaime2.jpg";
import eCommarce from "../../assets/images/Portfolio/E-commarce.jpg";
import eCommarce2 from "../../assets/images/Portfolio/E-commarce2.jpg";
import Afordel from "../../assets/images/Portfolio/Afordel.png";
import Afordel2 from "../../assets/images/Portfolio/Afordel2.png";
import Afordel3 from "../../assets/images/Portfolio/Afordel3.png";
import Afordel4 from "../../assets/images/Portfolio/Afordel4.png";
import Afordel5 from "../../assets/images/Portfolio/Afordel5.png";
import Afordel6 from "../../assets/images/Portfolio/Afordel6.png";
import Afordel7 from "../../assets/images/Portfolio/Afordel7.png";
import imageLarge from "../../assets/images/Portfolio/imageLarge.png";
import imageLarge2 from "../../assets/images/Portfolio/imageLarge2.png";
import imageLarge3 from "../../assets/images/Portfolio/imageLarge3.png";
import imageLarge4 from "../../assets/images/Portfolio/imageLarge4.png";
import nftPlateform from "../../assets/images/Portfolio/NFT-plateform.png";
import nftPlateform2 from "../../assets/images/Portfolio/NFT-plateform2.png";
import nftPlateform3 from "../../assets/images/Portfolio/NFT-plateform3.png";
import PortfolioDialog from "./PortfolioDialog";
import { useState } from "react";

const worksData = [
    { href: "https://mydoorwallet.com/#/auth/register", img: [doorToken, doorToken2, doorToken3, doorToken4, doorToken5], title: "Crypto Exchanger", desc: "Fullstack Development", techStack: ['React', 'Redux', 'Node', 'Typescript', 'MySQL', 'AWS'], fullDes: "<p>With this product, user can purchase door coins and other coins and also user can exchange their coins with other coins</p>" },
    { href: "#", img: [onlineLearning, onlineLearning2, onlineLearning3], title: "Online Learning Platform", desc: "Fullstack Development", techStack: ['React', 'Redux-saga', 'Node', 'Typescript', 'MongoDB', 'Jest'], fullDes: `<p>General User Functionalities:</p>
    <ol>
        <li><b>1.</b> Login, Signup, Reset Password.</li>
        <li><b>2.</b> Update Profile.</li>
        <li><b>3.</b> Add multiple companies.</li>
        <li><b>4.</b> View, update, delete the company.</li>
        <li><b>5.</b> Add, view, update, delete multiple vocational programs.</li>
        <li><b>6.</b> Search vocational program.</li>
        <li><b>7.</b> Survey sheet for finding a program.</li>
        <li><b>8.</b> Location-based search.</li>
        <li><b>9.</b> Paypal payment Method.</li>
    </ol>
    ` },
    { href: "#", img: [eCommarceJaime, eCommarceJaime2], title: "E-Commarce For Food", desc: "Fullstack Development", techStack: ['React', 'Redux', 'Node', 'GraphQL', 'MongoDB', 'Typescript', 'OpenAI', 'AWS'], fullDes: `<p>Backend:- <b>(Node.js, GraphQL, Typescript, MongoDB, OpenAI, AWS)</b></p>
    <p>---------------------------------------------------------------</p>
    <p>-environment setup and create a structured folder.</p>
    <p>-create an API for the cart.</p>
    <p>-create an API of Category and subCategory</p>
    <p>-Create an API for Adding a product and other APIs</p>
    <p></p>
    <p>Frontend:- <b>(React.js, Typescript, and Redux)</b></p>
    <p>---------------------------------------------------------------</p>
    <p>-create a UI/UX design and tablet and mobile responsive.</p>
    <p>-create a design from mockup design.</p>
    <p>-Integrated a API and created modules.</p>
    <p>-integrated the Paypal Payment Gateway</p>` },
    { href: "https://www.gyapu.com/", img: [eCommarce, eCommarce2], title: "E-Commarce", desc: "Fullstack Development", techStack: ['React', 'React-Native', 'Redux', 'Node', 'Typescript', 'MySQL', 'AWS'], fullDes: "<p>This is a complete E-Commerce site where user can buy any product like Mobile-Accessories, Sports, Books, Groceries, and also user can search any product with product-name OR category and filter it.</p>" },
    { href: "https://afordel.com/", img: [Afordel, Afordel2, Afordel3, Afordel4, Afordel5, Afordel6, Afordel7], title: "Real-Estate Site for Buy and Sell Property", desc: "Fullstack Development", techStack: ['React', 'Redux-thunk', 'Node', 'Typescript', 'PostgreSQL', 'Firebase'], fullDes: "<p>With this product, buyers can buy homes and sellers can sell their homes at the best price, and buyers and sellers can get a consultant from customer care in that area</p>" },
    { href: "#", img: [imageLarge, imageLarge2, imageLarge3, imageLarge4], title: "Enterprise Pramotion Site", desc: "Fullstack Development", techStack: ['Vue', 'Vuex', 'Node', 'GraphQL', 'MicroService', 'AWS'], fullDes: "<p>This is a complete solution for digital sales and promotions.</p>" },
    { href: "#", img: [nftPlateform, nftPlateform2, nftPlateform3], title: "NFT Exchanger", desc: "UI/UX Design", techStack: ['React', 'Figma', 'MUI', 'SASS'], fullDes: "" }
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