import type { Metadata } from "next";
import { Page, PageContent, PageSubtitle, PageTitle, Paragraph } from "@/components/page/page";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Setting up AdGuard | Prokits",
    description: "Setting up AdGuard",
}

export default function SetupAdGuardPage() {
    return (
        <Page>
            <PageTitle>Setting up AdGuard</PageTitle>

            <PageContent>
                <Paragraph>
                    AdGuard Home is a powerful DNS server that can block ads, trackers, and other unwanted content at the network level.
                    Using a Raspberry Pi (or any other computer) to host AdGuard Home in your home network allows you to improve online privacy and streamline web browsing across all your devices. In this guide, we’ll walk through the steps to set up AdGuard Home on a Raspberry Pi and configure your router to use it as your DNS server.
                </Paragraph>
                <Paragraph>
                    To follow this step-by-step tutorial, You will need a device to run AdGuard, We will use Raspberry Pi Zero 2W for this tutorial but you could follow this on any device running Linux. You will also want access to your router’s admin settings.
                </Paragraph>
                <Paragraph>
                    <PageSubtitle>Prepping Raspberry Pi</PageSubtitle>
                    You will first need to install an OS on your Pi, we are going to use the Raspberry Pi OS.
                    <ul>
                        <li>
                            Download the Raspberry Pi Imager or this link from the official Raspberry Pi website.
                        </li>
                        <li>
                            Install Raspberry Pi OS (32-bit or Lite version is recommended for this project) onto your microSD card using the imager.
                        </li>
                        <li>
                            Insert the microSD card into the Raspberry Pi connect it to a display, a keyboard, and mouse, and then power it up.
                        </li>
                        <li>
                            Complete the initial setup, including setting up Wi-Fi or Ethernet, if necessary.
                        </li>
                    </ul>
                    After this is done and you can browse the internet on your Pi you can proceed to the next step.

                    Now update the system by running the following commands in the terminal
                    <pre className="mt-4 p-4 bg-gray-800 rounded-lg">
                        sudo apt update && sudo apt upgrade -y
                    </pre>
                </Paragraph>

                <Paragraph>
                    <PageSubtitle>Set a Static IP for Your Raspberry Pi</PageSubtitle>
                    To ensure your Raspberry Pi always has the same IP address (necessary for your router settings), assign it a static IP:
                    <ul>
                        <li></li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    <PageSubtitle>Installing AdGuard Home</PageSubtitle>
                    All you need to do is run the following command in the terminal:
                    <pre className="mt-4 p-4 bg-gray-800 rounded-lg">
                        wget --no-verbose -O - https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh | sh -s -- -v
                    </pre>
                    If you have trouble installing or encounter some errors you can follow AdGuard’s extensive Getting Started Guide.
                    After the installation is complete, you can proceed to the next step.
                    <Image src="/images/docs/setting-adguard/1.png" alt="Setting up AdGuard" width={1000} height={1000} className="my-8 mx-auto " />

                </Paragraph>
            </PageContent>
        </Page>
    )
}