import { useEffect, useState } from "react";
import Link from "next/link";
import { Bars3Icon } from '@heroicons/react/24/solid';

const menuItems = [
    { href: "#home", link: "home" },
    { href: "#about", link: "about us" },
    { href: "#services", link: "services" },
    { href: "#work", link: "portfolio" },
    // { href: "#blog", link: "blog" },
    { href: "#contactus", link: "contact" }
];

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [activeLink, setActiveLink] = useState("home");

    const handleSmoothScroll = (event, target) => {
        event.preventDefault();
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const observerOptions = {
                rootMargin: "-70px 0px 0px 0px",
                threshold: 0.5,
            };

            const handleIntersect = (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const activeMenuItem = menuItems.find((item) => item.href === `#${entry.target.id}`);
                        if (activeMenuItem) {
                            setActiveLink(activeMenuItem.link);
                        }
                    }
                });
            };

            const observer = new IntersectionObserver(handleIntersect, observerOptions);
            const targets = menuItems.map((item) => document.querySelector(item.href));
            targets.forEach((target) => observer.observe(target));

            return () => {
                targets.forEach((target) => observer.unobserve(target));
            };
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="bg-white fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-15 xsm:px-0 xmd:px-15 py-3.5 flex items-center justify-between relative">
                <Link href={"/"} className="font-semibold text-2xl uppercase">MilanK.</Link>
                <button className="bg-primary text-white w-10 h-10 block xmd:hidden" onClick={() => setShowMenu(!showMenu)}>
                    <Bars3Icon className="h-8 w-8 text-white mx-auto" />
                </button>
                <div className={`${showMenu ? 'max-h-[236px] opacity-100 pointer-events-auto' : 'max-h-[initial] opacity-0 pointer-events-none xmd:opacity-100 xmd:pointer-events-auto'} duration-500 transition-max-height ease-in-out absolute xmd:relative top-[58px] xmd:top-[initial] left-[15px] xsm:left-0 xmd:left-[initial] right-[15px] xsm:right-0 xmd:right-[initial] bg-white border-[#ddd] border xmd:border-0 py-2 xmd:py-0 px-15 xmd:px-0`}>
                    {menuItems?.map((items) =>
                        <Link
                            href={items?.href}
                            key={items?.link}
                            onClick={(event) => handleSmoothScroll(event, items.href)}
                            className={`${activeLink === items.link ? 'text-primary' : ''} block xmd:inline-block first:border-0 border-t xmd:border-0 border-[#ddd] font-medium text-[13px] uppercase py-2 xmd:py-0 xmd:ml-2.5 xmd:px-2.5 tracking-[0.035rem] hover:text-primary`}
                        >
                            {items?.link}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header;
