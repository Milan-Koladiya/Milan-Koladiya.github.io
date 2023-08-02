import SectionTitle from "../sectionTitle";
import { ChatIcon, DesktopIcon, MobileIcon, PriceTagIcon, TargetIcon, ToolsIcon } from "../../assets/svgFiles.js"

const featuresData = [
    { icon: <DesktopIcon />, title: "Unique design", desc: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites." },
    { icon: <PriceTagIcon />, title: "Different Layout", desc: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites." },
    { icon: <ChatIcon />, title: "Make it Simple", desc: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites." },
    { icon: <MobileIcon />, title: "Responsiveness", desc: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites." },
    { icon: <TargetIcon />, title: "Testing for Perfection", desc: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites." },
    { icon: <ToolsIcon />, title: "Advanced Options", desc: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites." }
];

const MyServices = () => {
    return (
        <div id="services" className="relative bg-[#eaedf2] py-[60px] md:py-[100px]">
            <div className="container mx-auto px-15">
                <SectionTitle title="MY SERVICES" desc="A Lead UX & UI designer based in Canada" />
                <div className="grid grid-cols-1 xsm:grid-cols-2 xmd:grid-cols-3 gap-[30px] pt-15 mt-[35px]">
                    {featuresData?.map((data) =>
                        <div key={data?.title} className="group feature-grp border border-[#eee] hover:border-primary rounded-[5px] bg-white shadow-light px-[30px] py-10 hover:bg-primary relative top-0 hover:top-[-10px] duration-500 transition-all ease-in-out">
                            <div className="w-20 h-20 rounded-full leading-[80px] text-center border-2 border-dotted border-primary group-hover:border-white text-[32px] flex items-center justify-center">
                                {data?.icon}
                            </div>
                            <h3 className="text-base font-medium mt-[22px] mb-3 group-hover:text-white">{data?.title}</h3>
                            <p className="text-lighter-gray text-[15px] leading-relaxed group-hover:text-[#ffffff99]">{data?.desc}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MyServices;