"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";

export default function WebDesignSection() {
    return <HeroParallax products={products} />;
}

export const products = [
    {
        title: "Fasttkd",
        link: "https://fasttkd.vercel.com",
        thumbnail:
            "/images/webdesign/fasttkd.png",
    },
    {
        title: "Orangewood Labs",
        link: "https://orangewood.co",
        thumbnail:
            "/images/webdesign/orangewood.png",
    },
    {
        title: "Tushar Gaurav",
        link: "https://tushgaurav.in",
        thumbnail:
            "/images/webdesign/tushgaurav.png",
    },

    {
        title: "SpeedyUploads",
        link: "https://speedyuploads.com",
        thumbnail:
            "/images/webdesign/speedyuploads.png",
    },
    {
        title: "tudox",
        link: "https://tudox-tushgaurav.vercel.app/",
        thumbnail:
            "/images/webdesign/tudox.png",
    },
    {
        title: "Aniket Aman",
        link: "https://hi-aniket.vercel.app/",
        thumbnail:
            "/images/webdesign/aniket_aman.png",
    },
    {
        title: "xRobotics",
        link: "https://x-logic-labs.vercel.app/",
        thumbnail:
            "/images/webdesign/xrobotics.png",
    },
    {
        title: "old.tushgaurav",
        link: "https://old.tushgaurav.in/",
        thumbnail:
            "/images/webdesign/old_tushgaurav.png",
    },
    {
        title: "cclick",
        link: "https://cclick.vercel.app/",
        thumbnail: "/images/webdesign/cclick.png",
    },
    {
        title: "Shivam Yadav",
        link: "https://iamshivam.netlify.app/",
        thumbnail: "/images/webdesign/shivam_yadav.png",
    }

];
