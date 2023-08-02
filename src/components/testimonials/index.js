import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SectionTitle from "../sectionTitle";

import team1 from "../../assets/images/team-1.jpg";
import team2 from "../../assets/images/team-2.jpg";
import team3 from "../../assets/images/team-3.jpg";
import team4 from "../../assets/images/team-4.jpg";
import 'swiper/css';

const testimonialItems = [
    { img: team1, detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", title: "Nancy Bayers", subTitle: "Co-founder" },
    { img: team2, detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", title: "Nancy Bayers", subTitle: "Co-founder" },
    { img: team3, detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", title: "Nancy Bayers", subTitle: "Co-founder" },
    { img: team4, detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", title: "Nancy Bayers", subTitle: "Co-founder" },
];

const Testimonials = () => {
    return (
        <div id="testimonials" className="relative bg-[#eaedf2] py-[60px] md:py-[100px]">
            <div className="container mx-auto px-15">
                <SectionTitle title="TESTIMONIALS" desc="A Lead UX & UI designer based in Canada" />
                <Swiper
                    spaceBetween={30}
                    slidesPerView={2}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                    }}
                    className='mt-[50px] mb-[25px]'
                >
                    {testimonialItems?.map((item, index) =>
                        <SwiperSlide key={index}>
                            <div className='bg-white p-5 border border-[#edd] flex'>
                                <Image src={item?.img} alt="testimonials" width={120} height={120} className='w-[60px] md:w-[120px] h-[60px] md:h-[120px] rounded-b-[50%] rounded-tl-[50%] max-h-[120px]' />
                                <div className='pl-[25px]'>
                                    <p className='text-lighter-gray text-[15px] leading-relaxed'>{item?.detail}</p>
                                    <h1 className='text-lg font-semibold mt-4 mb-2'>{item?.title}</h1>
                                    <h2 className='text-lighter-gray text-[15px] leading-relaxed'>{item?.subTitle}</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials;