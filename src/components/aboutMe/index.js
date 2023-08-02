import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../sectionTitle";

import aboutUs from "../../assets/images/about-us.jpg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import linkedin from "../../assets/images/linkedin.svg";

export const socialIcons = [
    { href: "https://www.upwork.com/freelancers/~01ef5c2f98cbf17208", icon: facebook, width: 9, height: 16 },
    { href: "https://www.freelancer.in/u/milankoladiya001", icon: facebook, width: 9, height: 16 },
    { href: "https://github.com/Milan-Koladiya", icon: twitter, width: 15, height: 15 },
    { href: "https://www.linkedin.com/in/milan-koladiya", icon: linkedin, width: 14, height: 14 },
];

const myInfo = [
    { title: "Birthday", desc: "17 March 2000" },
    { title: "E-mail", desc: "milankoladiya001@gmail.com" },
    { title: "Age", desc: "23 Yr" },
    { title: "Phone", desc: "+91 70696 80214" },
    { title: "Residence", desc: "India" },
    { title: "Skype", desc: "live:.cid.6a0596c2d21f6402" },
    { title: "Address", desc: "Nana Varachha, Surat" },
    { title: "Freelance", desc: "Always Available" }
];

const AboutMe = () => {
    return (
        <div id="about" className="relative bg-[#eaedf2] py-[60px] md:py-[100px]">
            <div className="container mx-auto px-15">
                <SectionTitle title="about me" desc="A Lead UX & UI designer based in Canada" />
                <div className="grid grid-cols-1 xmd:grid-cols-12 mt-[35px] items-center">
                    <div className="xmd:col-span-5 my-[15px]">
                        <div className="shadow-light rounded-[5px] relative bg-white p-[14px]">
                            <Image src={aboutUs} alt="about" />
                            <div className="absolute top-8 left-[6px] bg-white p-2 flex flex-col">
                                {socialIcons?.map((icons, index) =>
                                    <Link href={icons?.href} key={index} className="w-[34px] h-[34px] bg-primary text-white hover:bg-dark flex items-center justify-center my-[3px]">
                                        <Image src={icons?.icon} alt="social" width={icons?.width} height={icons?.height} />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="xmd:col-span-7 my-[15px] xmd:pl-[70px]">
                        <h2 className="text-[30px] font-semibold mb-0.5">I'M Milan Koladiya</h2>
                        <h6 className="text-lg font-normal">Customized <span className="text-primary">Web & Mobile</span> Software Developer based in <span className="text-primary">India</span></h6>
                        <p className="text-lighter-gray text-[15px] leading-relaxed mt-5 mb-4">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions. Check out my Portfolio</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 pt-2.5">
                            {myInfo?.map((info) =>
                                <div key={info?.title} className="flex items-center py-[6px]">
                                    <label className="font-medium text-sm border-r border-[#c1c1c1] min-w-[90px]">{info?.title}</label>
                                    <p className="text-sm pl-15 text-lighter-gray">{info?.desc}</p>
                                </div>
                            )}
                        </div>
                        <Link href="#work" className="w-[150px] mt-[30px] border-2 border-transparent bg-primary text-white text-sm font-medium min-w-[120px] mr-3 uppercase h-[46px] flex items-center justify-center hover:bg-dark">download cv</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;