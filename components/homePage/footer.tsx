"use client"

// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Button } from "../ui/button";

// Icon imports
import { Twitter, Facebook, Smartphone } from "lucide-react";

// Local component imports
import { Section, Container } from "../craft";

// Asset imports
import sideLogo from "@/public/SideLogo.png"


export default function Footer() {
    return (
        <footer>
            <Section>
                <Container className="grid gap-6">
                    <div className="not-prose flex flex-col gap-6">
                        <Link href="/">
                            <h3 className="sr-only">RECSolar</h3>
                            <Image
                                src={sideLogo}
                                alt="Logo"
                                width={120}
                                height={27.27}
                                className="transition-all hover:opacity-75 dark:invert"
                            ></Image>
                        </Link>
                        <p>
                            <Balancer>
                                RECSolar is a solar installation company with a focus in ensuring peak customer interaction and high quality of service
                            </Balancer>
                        </p>
                    </div>
                    {/* <div className="mb-4 flex flex-col gap-4 md:mb-0 md:flex-row">
                        <Link href="/privacy-policy">Privacy Policy</Link>
                            <Link href="/terms-of-service">Terms of Service</Link>
                            <Link href="/cookie-policy">Cookie Policy</Link>
                    </div>*/}
                </Container>
                <Container className="not-prose flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2">
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" onClick={() => window.open("https://wa.me/message/J4PIVD2VUWEIB1", "_blank")}>
                            <Smartphone/>
                        </Button>
                        <Button variant="outline" size="icon" onClick={() => window.open("https://x.com/RecsolarSA", "_blank" )}>
                            <Twitter />
                        </Button>
                        <Button variant="outline" size="icon" onClick={() => window.open("https://www.facebook.com/profile.php?id=100083352890553&mibextid=ZbWKwL", "_blank")}>
                            <Facebook />
                        </Button>
                    </div>
                    <p className="text-muted-foreground">
                        ©{" "}
                        <a href="/">RECSolar</a>.
                        All rights reserved. 2024-present.
                    </p>
                </Container>
            </Section>
        </footer>
    );
}
