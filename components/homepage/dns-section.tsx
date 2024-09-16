import HyperText from "../magicui/hyper-text";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export default function DNSSection() {
    return (
        <div className="max-w-7xl p-2 mx-auto py-20">
            <h3 className="text-red_branding font-semibold text-4xl tracking-tight text-center">Private DNS</h3>
            <div className="flex justify-center items-center">
                <HyperText text="Fast. Free. Private." className="text-[#BCBCBC] text-4xl md:text-6xl font-bold tracking-tighter  mt-4 mb-10" />
            </div>
            <div className="flex flex-wrap-reverse justify-center items-center gap-4 mt-6">
                <div className="max-w-md  leading-6">
                    <p className="mb-4">
                        Your ISP can see every site and app you use, even if they&apos;re encrypted. Some providers even sell this data, or use it to target you with ads.
                    </p>
                    <p>
                        Prokits DNS prevents anyone from snooping on you by encrypting more of the traffic leaving your device. We believe privacy is a right. We won&apos;t sell your data, ever.
                    </p>
                </div>
                <HeroVideoDialog
                    className="w-full max-w-xl"
                    animationStyle="from-center"
                    videoSrc="https://www.youtube.com/embed/Rck3BALhI5c"
                    thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                    thumbnailAlt="Hero Video"
                />
            </div>
        </div>
    )
}