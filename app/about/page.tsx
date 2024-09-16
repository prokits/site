import { Page, PageContent, PageSubtitle, PageTitle, Paragraph } from "@/components/page/page";
import Callout from "@/components/ui/callout";
import { LinkPreview } from "@/components/ui/link-preview";

export default function AboutPage() {
    return (
        <Page>
            <PageTitle>About</PageTitle>
            <PageContent>
                <Paragraph>
                    <PageSubtitle>The Story</PageSubtitle>
                    Prokits is a <span className="italic">soon-to-be</span> incorporated software company, while we have our other goals and aspirations, making privacy accessible to everyone was one of them.
                    If you were to compare India’s current scenario, you would see that the government heavily censors the internet.
                    We strongly believe that this is against the
                    fundamental right to freedom of speech and expression. We are here to provide a solution to this problem.
                </Paragraph>

                <Paragraph>
                    <LinkPreview url="https://opennet.net/" className="underline">OpenNet Initiative</LinkPreview> which is a project whose goal was to monitor and report on internet censorship and surveillance describes India as:
                    <Callout>
                        A stable democracy with a strong tradition of press freedom, that nevertheless continues its regime of Internet filtering.
                        However, India's selective censorship of blogs and other content, often under the guise of security, has also been met with significant opposition.
                        Indian ISPs continue to selectively filter Web sites identified by authorities.
                        However, government attempts at filtering have not been entirely effective because blocked content has quickly migrated to other Web sites and users have found ways to circumvent filtering.
                        The government has also been criticised for a poor understanding of the technical feasibility of censorship and for haphazardly choosing which Web sites to block.
                    </Callout>
                </Paragraph>

                <Paragraph>
                    We want to educate people about this matter.
                    Our goal is to make software that protects privacy and organise awareness programs about the very thing we use every day, the Internet.
                </Paragraph>

                <Paragraph>
                    <PageSubtitle>Our Mission</PageSubtitle>
                    Our mission is to provide privacy to everyone.
                    We believe that privacy is a fundamental right and should be accessible to everyone.
                    We are here to provide a solution to the problem of internet censorship and surveillance.
                </Paragraph>

                <Paragraph>
                    <PageSubtitle>The Team</PageSubtitle>
                    While I refer to Prokits as "we," currently there's just one person involved—me, Tushar Gaurav.
                    Talking in the third person feels odd, so let me speak directly:
                    I'm a software developer at <LinkPreview url="https://orangewood.co" className="underline">Orangewood Labs</LinkPreview> specializing in web technologies.
                    In my free time, I enjoy tinkering with my home lab, exploring new technologies, and working with servers.
                    I also write blogs occasionally. If you'd like to know more about me, visit my <LinkPreview url="https://tushgaurav.in" className="font-bold underline">
                        homepage.
                    </LinkPreview>
                </Paragraph>
            </PageContent>
        </Page>
    )
}