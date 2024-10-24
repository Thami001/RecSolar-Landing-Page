// React and Next.js imports
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";


// Local component imports
import { Section, Container } from "@/components/craft";

import {TypewriterEffectSmoothDemo} from "@/components/ui/typewriter";

// Asset imports
import LogoWoBG from "@/public/Logo-removebg-preview.png"

const Hero = () => {
    return (
        <Section id={"Hero"}>
            <Container className="flex flex-col items-center text-center">
                <Image
                    src={LogoWoBG}
                    width={172}
                    height={72}
                    alt="Company Logo"
                    className="not-prose mb-6 dark:invert md:mb-8"
                />
                <h1 className="!mb-0">
                    <Balancer>
                        {/* use a span to change the color of the RECsolar */}
                        Welcome to <span className={"text-white"}>RecSolar</span>, SA&apos; leading renewable energy company.
                    </Balancer>
                </h1>
                <h3 className="text-muted-foreground">
                    <Balancer>
                        <TypewriterEffectSmoothDemo/>
                    </Balancer>
                </h3>
                <div className="not-prose mt-6 flex gap-2 md:mt-12">
                    {/* <Button asChild>
                        <Link href="/">
                            <Camera className="mr-2" />
                            Lorem Ipsum
                        </Link>
                    </Button>
                    <Button variant={"ghost"} asChild>
                        <Link href="/posts">Dolor Sit Amet -{">"}</Link>
                    </Button> */}
                </div>
            </Container>
        </Section>
    );
};

export default Hero;
