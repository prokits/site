import { Page, PageContent, PageTitle, Paragraph } from "@/components/page/page";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "dns.prokits - Fast. Free. Private. | Prokits",
    description: "Prokits DNS service",
}

export default function DNSPage() {
    return (
        <Page>
            <PageTitle>Prokits DNS</PageTitle>
            <PageContent>
                <Paragraph>
                    dns.prokits is a free service that replaces your default ISP’s DNS configuration. We don’t run any blocking service i.e. we don’t block any ads or trackers.
                </Paragraph>
                <Paragraph>
                    We run a public recursive DNS resolver at dns.prokits.digital that anyone can use. We don’t log any data currently. However, in the future, we might plan to log some completely anonymous data, data that contains your IP address will never logged in our system. We have been designed to be GDPR-complaint.
                </Paragraph>
            </PageContent>
        </Page>
    )
}