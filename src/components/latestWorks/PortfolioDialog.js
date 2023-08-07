import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import linkIcon from "../../assets/images/link.svg";
import 'swiper/css';
import 'swiper/css/navigation';

const PortfolioDialog = ({ isOpen, setIsOpen, selectedPortfolio }) => {
    const { href, img, title, techStack, fullDes } = selectedPortfolio;
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-[99]" onClose={() => setIsOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full md:max-w-[730px] xmd:max-w-[800px] h-screen md:h-[90vh] transform rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-semibold leading-[1.2] flex items-center justify-between px-6 py-8"
                                >
                                    {title}
                                    <a href={href} target='_blank' className='relative group cursor-pointer outline-none mx-6'>
                                        <Image src={linkIcon} alt="move" />
                                        <span className='tooltip-text py-1 px-3 absolute left-[50%] -translate-x-2/4 -bottom-[26px] bg-[#555] text-white font-semibold text-[11px] opacity-0 group-hover:opacity-100 rounded-[6px] whitespace-nowrap'>Go to live site</span>
                                    </a>
                                </Dialog.Title>
                                <div className="h-[calc(100vh-100px)] md:h-[calc(90vh-100px)] overflow-auto px-6">
                                    <Swiper navigation={true} modules={[Navigation]} onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} className="portfolio-swiper">
                                        {img?.map((image, index) =>
                                            <SwiperSlide key={index}>
                                                <Image src={image} alt="portfolio" width={image?.img?.width} height={image?.img?.height} className='mx-auto max-h-[500px] w-full' />
                                            </SwiperSlide>
                                        )}
                                        <div className='text-right'>
                                            <span className='bg-dark text-white font-semibold text-[13px] py-[3px] px-8'>{activeIndex + 1} of {img?.length}</span>
                                        </div>
                                    </Swiper>
                                    <div className='pt-5'>
                                        {techStack?.length ? <div className='mb-5'>
                                            <h5 className="font-semibold text-[15px] mt-[7px]">Skills and deliverables</h5>
                                            <div className='flex items-center flex-wrap mt-2'>
                                                {techStack?.map((skills, idx) =>
                                                    <span key={idx} className='mr-2 mb-2 text-secondary hover:text-white hover:bg-dark bg-gray-200 text-xs font-semibold rounded-[30px] py-[3px] px-3'>
                                                        {skills}
                                                    </span>
                                                )}
                                            </div>
                                        </div> : <></>}
                                        {fullDes !== '' ? <div className='mb-5'>
                                            <h5 className="font-semibold text-[15px] mt-[7px]">Project description</h5>
                                            <div className="mt-1 pl-[2px] text-light-gray font-medium text-[13px] leading-[1.5]" dangerouslySetInnerHTML={{ __html: fullDes }} />
                                        </div> : <></>}
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default PortfolioDialog
