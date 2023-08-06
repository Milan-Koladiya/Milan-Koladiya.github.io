import SectionTitle from "../sectionTitle";
import { ChatIcon, DesktopIcon, MobileIcon, PriceTagIcon, TargetIcon, ToolsIcon } from "../../assets/svgFiles.js"

const featuresData = [
    // { icon: <DesktopIcon />, title: "UI/UX Design", desc: "<p>On a website/Mobile user can constanly intract with element</p><br/><p>. where good interface ensure that user can esily do his work and while user experience ensures that the design is intuitive and evokes the right emotions and empowers the user. and when both work good together then user engagement happens</p>" },
    { icon: <DesktopIcon />, title: "UI/UX Design", desc: "<p>In today's digital landscape, exceptional UI/UX is key to engaging and retaining users. My expertise in crafting unique, intuitive interfaces aligns with your vision, propelling your business to new heights.</p>" },
    { icon: <PriceTagIcon />, title: "Web Development", desc: "<p>In the digital age, a standout website is your ladder to growth. Leveraging my web development expertise, I deliver solutions mirroring your vision, enabling seamless user engagement and business scaling so let's build your vision together.</p>" },
    { icon: <ChatIcon />, title: "Mobile App Development", desc: "<p>In the realm of 3 billion Android users, the right app makes the difference. I employ advanced development practices to design high-performance, user-centric mobile apps, propelling your business to unparalleled growth and distinctive market standing.</p>" },
    { icon: <MobileIcon />, title: "AI/ML", desc: "<p>Empower your business with my AI solutions. I am specialize in leveraging artificial intelligence and machine learning technologies to drive automation, enhance decision-making, and uncover actionable insights.</p>" },
    { icon: <TargetIcon />, title: "Could Service", desc: "<p>Every business needs cloud service to drive their business to the next level in terms of scaling, seamless migration, and effective management. so let's build next-level software with your vision and my expertise in cloud service.</p>" },
    { icon: <ToolsIcon />, title: "Support And Mainenance", desc: "<p>Ensure smooth operations with our Support and Maintenance services. We provide proactive monitoring, regular updates, and swift troubleshooting for your digital assets, guaranteeing minimal downtime and optimal performance.</p>" }
];

const MyServices = () => {
    return (
        <div id="services" className="relative bg-[#eaedf2] py-[60px] md:py-[100px]">
            <div className="container mx-auto px-15">
                <SectionTitle title="MY SERVICES" desc="A Lead Fullstack Developer based in India" />
                <div className="grid grid-cols-1 xsm:grid-cols-2 xmd:grid-cols-3 gap-[30px] pt-15 mt-[35px]">
                    {featuresData?.map((data) =>
                        <div key={data?.title} className="group feature-grp border border-[#eee] hover:border-primary rounded-[5px] bg-white shadow-light px-[30px] py-10 hover:bg-primary relative top-0 hover:top-[-10px] duration-500 transition-all ease-in-out">
                            <div className="w-20 h-20 rounded-full leading-[80px] text-center border-2 border-dotted border-primary group-hover:border-white text-[32px] flex items-center justify-center">
                                {data?.icon}
                            </div>
                            <h3 className="text-base font-medium mt-[22px] mb-3 group-hover:text-white">{data?.title}</h3>
                            <div className="text-lighter-gray text-[15px] leading-relaxed group-hover:text-[#ffffff99]" dangerouslySetInnerHTML={{ __html: data?.desc }}></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MyServices;