import {
    Page,
    PageContent,
    PageSubtitle,
    PageTitle,
    Paragraph
} from "@/components/page/page";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy - Prokits Digital",
    description: "Prokits Digital's Privacy Policy",
}

export default function PrivacyPolicyPage() {
    return (
        <Page>
            <PageTitle>
                Privacy Policy
            </PageTitle>
            <h1 className="mt-6 text-2xl md:text-4xl font-bold text-zinc-400 text-center">yes, we're complying to this GDPR thing.</h1>
            <PageContent className="mt-10">
                <Paragraph>
                    Here's your superfluous notice letting you know that we're not selling your info, you're free to use our service without worry, yada yada.
                    We're <span className="font-bold hover:cursor-not-allowed">"GDPR compliant."</span>
                    {" "}We do this whole infra and internet services thing to make your life easier and secure, not to make money off of your data.
                </Paragraph>
                <Paragraph>
                    If you want an official "privacy policy," just scroll down and read the boring stuff below. We promise it’s there.
                </Paragraph>

                <Paragraph>
                    <PageSubtitle className="text-lg font-semibold mb-6 mt-8">Privacy Policy for Prokits Digital</PageSubtitle>
                    At Prokits Digital, we value your privacy and are committed to protecting your personal information.
                    This Privacy Policy outlines how we collect, use, and safeguard the information you provide when using our internet infrastructure services.
                </Paragraph>
                <Paragraph>
                    <span className="font-bold mr-1">1. Information We Collect</span> We may collect personal and business-related data, such as contact details, network preferences, and usage patterns,
                    to ensure the smooth delivery of our services.
                    This data helps us manage your company’s internet and digital infrastructure effectively.
                </Paragraph>
                <Paragraph>
                    <span className="font-bold mr-1">2. How We Use Your Information</span>
                    The information we collect is used to:
                    <ul className="list-disc pl-6">
                        <li>Deliver and maintain our internet services.</li>
                        <li>Improve and customize our offerings.</li>
                        <li>Respond to service requests and inquiries.</li>
                        <li>Ensure network security and compliance with legal requirements.</li>
                    </ul>
                </Paragraph>
                <Paragraph>
                    <span className="font-bold mr-1">3. Data Protection</span>
                    We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or modification. We only share information with third-party providers when necessary for service provision, under strict confidentiality agreements.
                </Paragraph>
                <Paragraph>
                    <span className="font-bold mr-1">4. Your Rights</span>
                    You have the right to access, modify, or request deletion of your personal information.
                    You can also opt out of non-essential communications at any time.
                </Paragraph>
                <Paragraph>
                    <span className="font-bold mr-1">5. Updates to This Policy</span>
                    We may update this Privacy Policy periodically.
                    Any changes will be posted on our website, and we encourage you to review it regularly.
                </Paragraph>
                If you have any questions or concerns, please contact us at <Link href="mailto:iamtushgaurav@gmail.com" target="new">iamtushgaurav@gmail.com</Link>.

                <Image src="/images/shit_on_fire.png" alt="Privacy Policy" width={400} height={400} className="mt-10" />
            </PageContent>
        </Page >
    )
}