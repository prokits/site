import {
    Page,
    PageContent,
    PageSubtitle,
    PageTitle,
    Paragraph
} from "@/components/page/page";
import { Metadata } from "next";
import ServicesGrid from "./_components/services-grid";

export const metadata: Metadata = {
    title: "Our Services | Prokits",
    description: "Learn more about the services we offer at Prokits.",
}

export default function ServicesPage() {
    return (
        <Page>
            <PageTitle>
                Services
            </PageTitle>

            <ServicesGrid className="mx-0 ml-6" />

            <PageContent className="mt-10">
                <h1>DNS.Prokits is a Free and Fast Public DNS Server for Indian users.</h1>
                <Paragraph>
                    DNS.Prokits offers a free service that replaces your default ISP's DNS configuration.
                    We prioritize speed and privacy without implementing any blocking services.
                    This means we don't block any ads or trackers, allowing you full access to the internet.
                </Paragraph>
                <PageSubtitle>Why use DNS.Prokits?</PageSubtitle>
            </PageContent>
        </Page>
    )
}

