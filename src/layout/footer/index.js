import Link from "next/link";
import Image from "next/image";
import { socialIcons } from "@/src/components/aboutMe";


const Footer = () => {
    return (
        <div className="bg-[#111] py-3.5 footer-main">
            <div className="container mx-auto px-15">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[30px]">
                    <div className="my-2.5 flex items-center justify-center md:justify-start">
                        {socialIcons?.map((icons, index) =>
                            <Link href={icons?.href} key={index} className="mr-[17px]">
                                <Image src={icons?.icon} alt="social" width={icons?.width} height={icons?.height} className="opacity-40 hover:opacity-100" />
                            </Link>
                        )}
                    </div>
                    <div className="my-2.5 text-center md:text-right text-xs text-[#ffffff80]">
                        © 2023  copyright all right reserved
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;