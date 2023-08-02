import Link from "next/link";
import Image from "next/image";
import SectionTitle from "../sectionTitle";

import blog1 from "../../assets/images/blog-1.jpg";
import blog2 from "../../assets/images/blog-2.jpg";
import blog3 from "../../assets/images/blog-3.jpg";

const blogsData = [
    { href: "#", img: blog1, date: "02 Mar 2023", tag: "Design", title: "Make your Marketing website", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { href: "#", img: blog2, date: "02 Mar 2023", tag: "Design", title: "Make your Marketing website", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { href: "#", img: blog3, date: "02 Mar 2023", tag: "Design", title: "Make your Marketing website", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
];

const LatestBlogs = () => {
    return (
        <div id="blog" className="relative py-[60px] md:py-[100px]">
            <div className="container mx-auto px-15">
                <SectionTitle title="LATEST BLOGS" desc="A Lead UX & UI designer based in Canada" />
                <div className="grid grid-cols-1 xmd:grid-cols-3 gap-[30px] py-15 mt-[35px]">
                    {blogsData?.map((data, index) =>
                        <div key={index}>
                            <Link href={data?.href}>
                                <Image src={data?.img} alt="blogs" className="max-h-[262px]" />
                            </Link>
                            <div className="shadow-light bg-white p-[18px] relative mx-2.5 -mt-[30px]">
                                <span className="absolute left-0 -top-7 bg-primary text-xs text-white py-1.5 px-[22px]">{data?.date}</span>
                                <span className="text-lighter-gray capitalize bg-white border border-[#ddd] rounded-[3px] text-xs px-3.5 py-0.5">{data?.tag}</span>
                                <h5 className="my-2"><Link href={data?.href} className="font-medium text-[17px]">{data?.title}</Link></h5>
                                <p className="text-lighter-gray text-[15px] leading-relaxed mb-4">{data?.desc}</p>
                                <Link href={data?.href} className="pb-1 uppercase text-primary border-b-2 border-primary font-semibold text-sm hover:text-dark hover:border-dark">read more</Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LatestBlogs;