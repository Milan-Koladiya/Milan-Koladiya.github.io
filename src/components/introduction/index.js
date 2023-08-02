import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import homeAbout from "../../assets/images/home-about.png";

const Introduction = () => {
    return (
        <div id="home" className="relative">
            <div className="container mx-auto">
                <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 py-[100px] items-center">
                    <div className="px-15">
                        <h6 className="text-[15px] xmd:text-lg font-medium">Hello there...</h6>
                        <h1 className="text-[40px] xmd:text-6xl font-semibold py-1.5 xmd:py-15">Milan Koladiya</h1>
                        <h2 className="text-lg xmd:text-xl font-medium">
                            I Am Passionate
                            <TypeAnimation
                                sequence={['Custom Creative UI Designer', 200, ' ', 200, 'Custom Web/Mobile Developer', 200]}
                                wrapper="span"
                                speed={250}
                                className="text-lg xmd:text-xl font-medium inline-block border-b border-[#000] ml-1.5"
                                repeat={Infinity}
                            />
                        </h2>
                        <p className="text-light-gray text-[15px] pt-15 mb-6 leading-[1.6]">Unlock the potential of your business with our tailored software solutions. We turn your challenges into opportunities with innovative, scalable, and efficient custom software crafted to your unique needs.</p>
                        <div className="flex align-items-center">
                            <Link href="#work" className="border-2 border-transparent bg-primary text-white text-sm font-medium min-w-[120px] mr-3 uppercase h-[46px] flex items-center justify-center hover:bg-dark">my work</Link>
                            <Link href="#contactus" className="border-2 border-primary bg-white text-primary text-sm font-medium min-w-[120px] mr-3 uppercase h-[46px] flex items-center justify-center hover:bg-primary hover:text-white">hire me</Link>
                        </div>
                    </div>
                    <div className="px-15 mt-6 md:mt-0">
                        <Image src={homeAbout} alt="profile" />
                    </div>
                </div>
            </div>
            <div className="absolute left-0 right-0 bottom-[30px] w-[35px] mx-auto z-10 text-center">
                <Link href="#about" className="relative flex items-center justify-center bg-primary rounded-full w-[35px] h-[35px] custom-bouncedown">
                    <ChevronDownIcon className="w-5 h-5 mx-auto text-white" />
                </Link>
            </div>
        </div>
    )
}

export default Introduction;