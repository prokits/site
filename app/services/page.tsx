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

           
        </Page>
    )
}

