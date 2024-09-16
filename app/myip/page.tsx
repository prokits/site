import { Page, PageContent, PageTitle } from "@/components/page/page";
import type { Metadata } from "next";
import IPCore from "./core";

export const metadata: Metadata = {
    title: "IP Address Lookup | Prokits",
    description: "Lookup your IP address and other details",
};

export default function MyIP() {
    return (
        <Page>
            <PageTitle>IP Address Lookup</PageTitle>
            <PageContent>
                <IPCore color="fuchsia-500" />
            </PageContent>
        </Page>
    )
}