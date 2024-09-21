import type { Metadata } from "next";
import { Page, PageTitle, PageContent, Paragraph } from "@/components/page/page";
import { CardHoverEffectDemo } from "./_components/cards";
export const metadata: Metadata = {
    title: "Docs | Prokits",
    description: "Documentation",
}

export default function DocsPage() {

    return (
        <Page>
            <PageTitle>Welcome to Prokits' Documentation Hub</PageTitle>
            <PageContent>
                <Paragraph>
                    Dive into the world of networking with our comprehensive documentation and resources.
                    Whether you're a beginner looking to understand the basics or an expert seeking advanced insights, we've got you covered.
                </Paragraph>
                <CardHoverEffectDemo />
            </PageContent>
        </Page>

    );
}