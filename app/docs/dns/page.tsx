import { Page, PageContent, PageSubtitle, PageTitle, Paragraph } from "@/components/page/page";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from "next/image";


export default function DNSDocsPage() {

    const dnsServers = [
        {
            provider: "Prokits",
            description: "Our own DNS server",
            addresses: ["20.10.21.1"]
        },
        {
            provider: "Google",
            description: "Google's public DNS server",
            addresses: ["8.8.8.8", "8.8.4.4"]
        },
        {
            provider: "Cloudflare",
            description: "Cloudflare's public DNS server",
            addresses: ["1.1.1.1", "1.0.0.1"]
        },
        {
            provider: "Quad9",
            description: "Quad9's public DNS server",
            addresses: ["9.9.9.9", "149.112.112.112"]
        },
        {
            provider: "OpenDNS",
            description: "OpenDNS's public DNS server",
            addresses: ["208.67.222.222", "208.67.220.220"]
        }
    ]

    return (

        <Page>

            <PageTitle>DNS</PageTitle>

            <PageContent>
                <Paragraph>
                    When you enter a domain name in your browser's address bar, a complex process starts behind the scenes before the website loads.
                    While we interact with user-friendly domain names, computers, and network devices communicate using numerical addresses.
                    This disparity between human-readable domain names and machine-readable IP addresses is bridged by the Domain Name System (DNS).
                    The domain names serve as human-friendly aliases for these IP addresses, making it easier for users to access websites without memorizing long strings of numbers.
                </Paragraph>
                <Paragraph>
                    Every time you navigate to a website, your device initiates a series of communications between your router and various servers called DNS queries.
                    This process is necessary because computers and networking equipment operate using numerical IP addresses, not the alphabetical domain names we're accustomed to using.
                    Your computer asks a DNS server what is the IP address for a particular website and the DNS server replies with the correct IP address.
                    This system, known as the Domain Name System (DNS), acts as the internet's address book.
                </Paragraph>

                <Paragraph>
                    <PageSubtitle>What is DNS?</PageSubtitle>
                    <Image src="/images/docs/dns_explainer_1.svg" alt="DNS" width={1000} height={1000} className="my-8 mx-auto" />
                    DNS maintains extensive databases that map every domain name to its corresponding IP address.
                    For instance, when you query a DNS server for the IP address of www.prokits.digital, it might respond with 20.10.21.1, allowing your computer to load the website.
                </Paragraph>

                <Paragraph>
                    <PageSubtitle>Your ISP and DNS Queries</PageSubtitle>
                    If you're like most internet users, you're likely using the default settings on your router.
                    Typically, your router doesn't run its own DNS server. Instead, it forwards DNS queries from your devices to a remote server, often operated by your Internet Service Provider (ISP).
                    This means that your ISP can potentially see every DNS request made by your devices.


                    <Paragraph>
                        This setup raises significant privacy concerns:
                        <ul className="list-disc ml-4 mt-2">
                            <li>
                                <span className="font-bold">Tracking:</span> Your ISP may be able to track your online activities effectively.

                            </li>
                            <li>
                                <span className="font-bold">Data Collection:</span> Information about your browsing habits is valuable to companies like Google and Facebook.
                            </li>
                            <li>
                                <span className="font-bold">Targeted Advertising:</span> With knowledge of your internet usage, companies can target you with specific advertisements.
                            </li>
                            <li>
                                <span className="font-bold">Surveillance:</span> There's potential for mass surveillance of internet users' activities.
                            </li>
                        </ul>
                    </Paragraph>
                    Your DNS queries form a substantial part of your digital footprint, which you may prefer to keep private.
                </Paragraph>

                <Paragraph>
                    <PageSubtitle>The Solution</PageSubtitle>
                    The primary solution is to modify your router's settings to direct DNS queries to a server of your choice, rather than your ISP's default server.
                    Several public DNS servers are available as alternatives to your ISP's service:

                    <Table className="mt-4 w-fit">
                        <TableCaption>A list of free public DNS servers.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Provider</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>DNS Server Addresses</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {
                                dnsServers.map((server) => (
                                    <TableRow key={server.provider}>
                                        <TableCell>{server.provider}</TableCell>
                                        <TableCell>{server.description}</TableCell>
                                        <TableCell>{server.addresses.join(", ")}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </Paragraph>

                <Paragraph className="mt-4">
                    Understanding and managing your DNS settings is a crucial step in protecting your online privacy.
                    By choosing a trusted DNS provider or even hosting your own DNS server, you can significantly reduce the amount of browsing data available to your ISP and potential third parties.
                </Paragraph>
            </PageContent>







        </Page>
    )
}