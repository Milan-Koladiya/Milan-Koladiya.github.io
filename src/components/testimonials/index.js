import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SectionTitle from "../sectionTitle";

import team1 from "../../assets/images/team-1.jpeg";
import team2 from "../../assets/images/team-2.jpeg";
import team3 from "../../assets/images/team-3.jpeg";
import team4 from "../../assets/images/team-4.jpeg";
import 'swiper/css';

const testimonialItems = [
    { img: team1, detail: "Milan is a very professional and knowledgeable react developer. He understood the requirements quickly to implement them to my expectations. He's very prompt in communication and his ways of working helped me to get deily updates on the progress.", title: "Bhusan Kalse", subTitle: "Co-founder" },
    { img: team2, detail: "I hired Milan K. to help with our company's programming needs. He was reliable, flexible, and very responsive. Highly recommend! Milan K. was an invaluable asset to our programming team. His expertise and attention to detail were evident in every project he worked on, and the ability to adapt to changing needs and timelines was impressive. He was always available to answer questions or provide updates, and his work was consistently high-quality.", title: "Thijmen Hendrikx", subTitle: "Technical Director at Ogerion B.V" },
    { img: team3, detail: `<p>I am working with Milan for prolonged periods, We have worked on many projects and multiple tech stacks, Like Node.js, React.js, Typescript, AWS cloud service, and a lot more. I always observed great hard work and dedication in his work.</p>
    <br/><p>Apart, from it, Milan is a very productive person and is a hardworking, broad-minded, and forward-thinking individual. Intelligent, ambitious, energetic, and proactive perfectionist. A desire for proficiency and education makes milan a valuable person to the team.</p>`, title: "Katsuya Fujii", subTitle: "Co-founder at Hubble inc" },
    { img: team4, detail: "Working with Milan was a very good experience. He did an excellent job, finished faster than the set deadline, and answered very quickly at any time of the day. I will definitely hire him in the future. Thank you very much, Milan!", title: "Waheed Asghar", subTitle: "Project Manager" },
];

const Testimonials = () => {
    return (
        <div id="testimonials" className="relative bg-[#eaedf2] py-[60px] md:py-[100px]">
            <div className="container mx-auto px-15">
                <SectionTitle title="TESTIMONIALS" desc="A LEAD FULLSTACK DEVELOPER BASED IN INDIA" />
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
                    onSwiper={(swiper) => {
                        swiper.el.onmouseover = () => {
                          swiper.autoplay.stop();
                        };
                    
                        swiper.el.onmouseout = () => {
                          swiper.autoplay.start();
                        };
                      }}
                >
                    {testimonialItems?.map((item, index) =>
                        <SwiperSlide key={index}>
                            <div className='bg-white p-5 border border-[#edd] flex'>
                                <Image src={item?.img} alt="testimonials" width={120} height={120} className='w-[60px] md:w-[120px] h-[60px] md:h-[120px] rounded-b-[50%] rounded-tl-[50%] max-h-[120px]' />
                                <div className='pl-[25px]'>
                                    <div className='text-lighter-gray text-[15px] leading-relaxed' dangerouslySetInnerHTML={{ __html: item?.detail }} />
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