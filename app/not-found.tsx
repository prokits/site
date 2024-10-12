import { Page, PageTitle } from "@/components/page/page";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Page not found",
    description: "404 Page",
}

export default function NotFound() {
    return (
        <Page>
            <div className="flex gap-2 flex-wrap items-center justify-center mt-6">
                <Image src="/images/404.png" alt="404" width={400} height={400} className="" />
                <h1 className="text-6xl md:text-[20rem] font-bold">404</h1>
            </div>
            <PageTitle className="mt-6 md:mt-12 text-center">We couldn't find what you're looking for, but it's probably in here somewhere!</PageTitle>
        </Page>
    )
}