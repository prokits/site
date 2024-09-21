import HyperText from "../magicui/hyper-text";
import { DNSEncryptedCard } from "./_local_components/dns-encrypted-card";
import { DNSFeatures } from "./_local_components/dns-features";
import { ISPHoverEffect } from "./_local_components/isp-hover-effect";
function DNSExplanation() {
    return (
        <div className="border border-white/[0.2] p-4 px-8 w-full rounded-md bg-black flex justify-between items-center">
            <div className="max-w-md my-10 leading-6">
                <p className="mb-4">
                    Your ISP can see every site and app you use, even if they&apos;re encrypted. Some providers even sell this data, or use it to target you with ads.
                </p>
                <p>
                    Prokits DNS prevents anyone from snooping on you by encrypting more of the traffic leaving your device. We believe privacy is a right. We won&apos;t sell your data, ever.
                </p>
            </div>
            <ISPHoverEffect />
        </div>
    )

}


export default function DNSSection() {
    return (
        <div className="max-w-7xl p-2 mx-auto py-20">
            {/* <h3 className="text-red_branding tracking-tight text-centerpy-4x border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">Private DNS</h3> */}
            <div className="flex justify-center items-center">
                <span className="absolute mx-auto py-2 flex border w-fit bg-gradient-to-r blur-xl from-red_branding via-red-500 to-red-300 bg-clip-text text-4xl box-content font-extrabold text-transparent text-center select-none">
                    Prokits DNS
                </span>
                <h1
                    className="relative top-0 w-fit h-auto py-2 justify-center flex bg-gradient-to-r items-center from-red_branding via-red-500 to-red-300 bg-clip-text text-4xl font-extrabold text-transparent text-center select-auto">
                    Prokits DNS
                </h1>
            </div>

            <div className="flex justify-center items-center">
                <HyperText text="Fast. Free. Private." className="text-[#BCBCBC] text-4xl md:text-6xl font-bold tracking-tighter  mt-4 mb-10" />
            </div>

            <div className="flex flex-wrap justify-center items-center gap-2 mt-6">
                <div className="flex flex-col justify-center items-center gap-4 mt-6">
                    <DNSExplanation />
                    <DNSFeatures />
                </div>
                <DNSEncryptedCard />
            </div>
        </div>
    )
}