import {
    Page,
    PageContent,
    PageSubtitle,
    PageTitle,
    Paragraph
} from "@/components/page/page";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Metadata } from "next";
import { CopyToClipboard } from "@/components/ui/copy-to-clipboard";
export const metadata: Metadata = {
    title: "DNS.Prokits - Fast. Free. Private. | Prokits",
    description: "Prokits DNS service",
}
import { Cover } from "@/components/ui/cover";


export default function DNSPage() {
    return (
        <Page>
            <PageTitle>
                DNS.Prokits
                <br />
                <h2 className="text-2xl font-bold my-2">
                    <Cover>lightning fast</Cover> DNS for Every Indian
                </h2>
            </PageTitle>

            <PageContent className="mt-12">
                <h1>DNS.Prokits is a Free and Fast Public DNS Server for Indian users.</h1>
                <Paragraph>
                    DNS.Prokits offers a free service that replaces your default ISP's DNS configuration.
                    We prioritize speed and privacy without implementing any blocking services.
                    This means we don't block any ads or trackers, allowing you full access to the internet.
                </Paragraph>
                <Paragraph>
                    Our public recursive DNS resolver is available at dns.prokits.digital and is open for anyone to use.
                    Currently, we don't log any data, ensuring maximum privacy for our users.
                    While we may consider logging some completely anonymous data in the future, we want to assure our users that data containing IP addresses will never be logged in our system.
                    Our service has been designed with GDPR compliance in mind, prioritizing user privacy and data protection.
                </Paragraph>
                <Paragraph>
                    <PageSubtitle>Technical Details</PageSubtitle>
                    We run this DNS service on an Azure Virtual Machine (Standard D2s v5) located in Central India (Zone 1).
                    This strategic location ensures fast response times for Indian users.

                    <Table className="mt-4 w-fit">
                        <TableCaption>
                            DNS.Prokits server information and IP address.
                        </TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Server</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Service</TableHead>
                                <TableHead>Address</TableHead>
                            </TableRow>
                        </TableHeader>


                        <TableBody>
                            <TableRow>
                                <TableCell>Hydrogen</TableCell>
                                <TableCell>Pune</TableCell>
                                <TableCell>DNS</TableCell>
                                <TableCell>
                                    <CopyToClipboard text="20.244.105.117">20.244.105.117</CopyToClipboard>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Hydrogen</TableCell>
                                <TableCell>Pune</TableCell>
                                <TableCell>DoH</TableCell>
                                <TableCell>https://dns.prokits.digital/dns-query</TableCell>
                            </TableRow>

                        </TableBody>


                    </Table>
                </Paragraph>

                <Paragraph>
                    <PageSubtitle>Blocking and Content Filtering</PageSubtitle>
                    At dns.prokits, we don't block any DNS records.
                    Our philosophy is to provide unrestricted access to the internet.
                    We believe in a transparent and all-accessible web, allowing users to make their own choices about content.
                    <br />
                    If you desire content filtering, we recommend setting up a local DNS server such as AdGuard Home or Pi-hole on your network.
                    You can then configure Prokits DNS as an upstream server, giving you the best of both worlds: our fast, reliable service combined with your preferred filtering options.
                </Paragraph>

                <Paragraph>
                    <PageSubtitle>Configuration Instructions</PageSubtitle>
                    At dns.prokits, we don't block any DNS records.
                    Our philosophy is to provide unrestricted access to the internet.
                    We believe in a transparent and all-accessible web, allowing users to make their own choices about content.
                    <br />
                    If you desire content filtering, we recommend setting up a local DNS server such as AdGuard Home or Pi-hole on your network.
                    You can then configure Prokits DNS as an upstream server, giving you the best of both worlds: our fast, reliable service combined with your preferred filtering options.

                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>For Windows</AccordionTrigger>

                            <AccordionContent>
                                <ul className="list-disc list-inside space-y-2 text-sm">
                                    <li>Open Network and Sharing Center</li>
                                    <li>Click on your active network connection</li>
                                    <li>Select Properties</li>
                                    <li>Choose Internet Protocol Version 4 (TCP/IPv4)</li>
                                    <li>Click Properties</li>
                                    <li>Select "Use the following DNS server addresses"</li>
                                    <li>Enter 20.244.105.117 as the Preferred DNS server</li>
                                    <li>Click OK to save changes</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>For macOS</AccordionTrigger>
                            <AccordionContent>
                                <ul className="list-disc list-inside space-y-2 text-sm">
                                    <li>Open System Preferences</li>
                                    <li>Click on the Network icon (usually on the top-right corner)</li>
                                    <li>Select your active network connection</li>
                                    <li>Click on the Advanced button</li>
                                    <li>Select the Interface tab</li>
                                    <li>Click on the + button to add a new DNS server</li>
                                    <li>Enter 20.244.105.117 as the Preferred DNS server</li>
                                    <li>Click OK to save changes</li>
                                </ul>
                            </AccordionContent>

                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>For Android</AccordionTrigger>
                            <AccordionContent>
                                <ul className="list-disc list-inside space-y-2 text-sm">
                                    <li>Open Settings</li>
                                    <li>Click on Wi-Fi</li>
                                    <li>Select your active network connection</li>
                                    <li>Click on the Advanced options</li>
                                    <li>Select Manual</li>
                                    <li>Enter 20.244.105.117 as the Preferred DNS server</li>
                                    <li>Click on Save</li>
                                </ul>
                            </AccordionContent>

                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger>For iOS</AccordionTrigger>
                            <AccordionContent>
                                <ul className="list-disc list-inside space-y-2 text-sm">
                                    <li>Open Settings</li>
                                    <li>Click on Wi-Fi</li>
                                    <li>Select your active network connection</li>
                                    <li>Click on the Advanced options</li>
                                    <li>Select Manual</li>

                                </ul>
                            </AccordionContent>


                        </AccordionItem>

                        <AccordionItem value="item-5">
                            <AccordionTrigger>For Linux</AccordionTrigger>
                            <AccordionContent>
                                <ul className="list-disc list-inside space-y-2 text-sm">
                                    <li>Open Network Settings</li>
                                    <li>Select your active network connection</li>
                                    <li>Click on the Advanced options</li>
                                    <li>Select Manual</li>
                                    <li>Enter 20.244.105.117 as the Preferred DNS server</li>
                                    <li>Click on Save</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>


                </Paragraph>

                <Paragraph>
                    By choosing dns.prokits, you're opting for a fast, private, and open DNS service tailored for Indian users.
                    We're committed to providing a transparent and accessible internet experience while respecting your privacy.
                </Paragraph>
            </PageContent>



        </Page>
    )
}