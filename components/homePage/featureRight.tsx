// React and Next.js imports
import Image from "next/image";

// UI component imports
import { Section, Container } from "@/components/craft";


// Asset imports
import Service from "@/public/ServicesDone.jpeg";

const FeatureRight = () => {
    return (
        <Section>
            <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
                <div className="flex flex-col gap-6 py-8">
                    <h3 className="!my-0">World Class Installations</h3>
                    <p className="font-light leading-[1.4] opacity-70">
                        When you install your solar system with RECSolar, we can ensure you the highest quality of installation where all our technicians are board-certified, follow all best practices and that we will leave your premises in the best condition post installation
                    </p>
                    <div className="not-prose flex items-center gap-2">
                        {/* <Button className="w-fit" asChild>
                            <Link href="#">Get Started</Link>
                        </Button>
                         <Button className="w-fit" variant="link" asChild>
                            <Link href="#">Learn More {"->"}</Link>
                        </Button> */}
                    </div>
                </div>
                <div className="not-prose relative flex h-196 overflow-hidden rounded-lg">
                    <Image
                        src={Service}
                        alt="placeholder"
                        className="fill object-cover"
                    />
                </div>
            </Container>
        </Section>
    );
};

export default FeatureRight;
