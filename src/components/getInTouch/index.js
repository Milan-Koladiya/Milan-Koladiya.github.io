import Image from "next/image";
import SectionTitle from "../sectionTitle";

import location from "../../assets/images/location.svg";
import mobile from "../../assets/images/mobile.svg";
import envelope from "../../assets/images/envelope.svg";

const GetInTouch = () => {
    return (
        <div id="contactus" className="relative bg-[#eaedf2] py-[60px] md:py-[100px]">
            <div className="container mx-auto px-15">
                <SectionTitle title="Get in touch" desc="A Lead UX & UI designer based in Canada" />
                <div className="grid grid-cols-1 xmd:grid-cols-12 mt-[35px] xmd:gap-[30px]">
                    <div className="xmd:col-span-8 my-[15px] bg-white shadow-light rounded-[5px] p-6 md:p-9">
                        <h3 className="mb-5 uppercase text-lg font-semibold">Say Something</h3>
                        <form>
                            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[30px]">
                                <div className="relative field-input mb-5">
                                    <input type="text" placeholder="Name *" className="w-full border-b border-[#ccc] text-sm text-[#495057] bg-white pr-3 py-[6px] outline-none" />
                                    <span className="bg-primary h-[2px] w-0 absolute right-0 left-auto -bottom-[1px] duration-500 transition-all ease-in-out"></span>
                                </div>
                                <div className="relative field-input mb-5">
                                    <input type="email" placeholder="Email *" className="w-full border-b border-[#ccc] text-sm text-[#495057] bg-white pr-3 py-[6px] outline-none" />
                                    <span className="bg-primary h-[2px] w-0 absolute right-0 left-auto -bottom-[1px] duration-500 transition-all ease-in-out"></span>
                                </div>
                            </div>
                            <div className="grid grid-cols-1">
                                <div className="relative field-input mb-5">
                                    <input type="text" placeholder="Subject *" className="w-full border-b border-[#ccc] text-sm text-[#495057] bg-white pr-3 py-[6px] outline-none" />
                                    <span className="bg-primary h-[2px] w-0 absolute right-0 left-auto -bottom-[1px] duration-500 transition-all ease-in-out"></span>
                                </div>
                            </div>
                            <div className="grid grid-cols-1">
                                <div className="relative field-input mb-5">
                                    <textarea type="text" placeholder="Your message *" rows={3} className="w-full border-b border-[#ccc] text-sm text-[#495057] bg-white pr-3 py-[6px] outline-none" />
                                    <span className="bg-primary h-[2px] w-0 absolute right-0 left-auto bottom-[7px] duration-500 transition-all ease-in-out"></span>
                                </div>
                            </div>
                            <button type="submit" className="border-2 border-transparent bg-primary text-white text-sm font-medium min-w-[150px] uppercase h-[46px] flex items-center justify-center hover:bg-dark">send message</button>
                        </form>
                    </div>
                    <div className="xmd:col-span-4 my-[15px]">
                        <div className="bg-white px-5 py-[19px] shadow-light flex">
                            <div className="w-10 h-10 min-w-[40px] rounded-full text-white bg-primary text-[19px] flex items-center justify-center mr-5">
                                <Image src={location} alt="icon" />
                            </div>
                            <div>
                                <h3 className="text-[15px] font-medium mb-1">My Address</h3>
                                <p className="text-sm text-lighter-gray leading-relaxed">Nana Varachha, Surat, 395010</p>
                            </div>
                        </div>
                        <div className="bg-white px-5 py-[19px] shadow-light flex my-5">
                            <div className="w-10 h-10 min-w-[40px] rounded-full text-white bg-primary text-[19px] flex items-center justify-center mr-5">
                                <Image src={mobile} alt="icon" />
                            </div>
                            <div>
                                <h3 className="text-[15px] font-medium mb-1">My Phone Number</h3>
                                <p className="text-sm text-lighter-gray leading-relaxed">Office: +91 70696 80214</p>
                                <p className="text-sm text-lighter-gray leading-relaxed">Office: +91 94086 52165</p>
                            </div>
                        </div>
                        <div className="bg-white px-5 py-[19px] shadow-light flex">
                            <div className="w-10 h-10 min-w-[40px] rounded-full text-white bg-primary text-[19px] flex items-center justify-center mr-5">
                                <Image src={envelope} alt="icon" />
                            </div>
                            <div>
                                <h3 className="text-[15px] font-medium mb-1">Our Email</h3>
                                <p className="text-sm text-lighter-gray leading-relaxed">milankoladiya001@gmail.com</p>
                                <p className="text-sm text-lighter-gray leading-relaxed">developer.milankoladiya@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch;