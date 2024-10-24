// React and Next.js
import React from "react";

// Layout Components
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Icons
import { HousePlug, Factory,Hospital } from "lucide-react";

type FeatureText = {
    icon: JSX.Element;
    title: string;
    description: string;
};

const featureText: FeatureText[] = [
    {
        icon: <HousePlug className="h-6 w-6" />,
        title: "Residential",
        description:
            "We would be able to provide your home with an efficient off-grid system to help keep you going through any power outages ",
    },
    {
        icon: <Hospital className="h-6 w-6" />,
        title: "Commercial",
        description:
            "RECSolar can provide talented technicians with the experience and skills needed to handle any level of commercial request",
    },
    {
        icon: <Factory className="h-6 w-6" />,
        title: "Industrial",
        description:
            "RECSolar has led and completed numerous large-scale industrial project with great success and are able to tackle any challenges that come our way ",
    },
];

const FeatureOne = () => {
    return (
        <Section id={"Features"} className="border-b border-t">
            <Container className="not-prose">
                <div className="flex flex-col gap-6">
                    <h3 className="text-4xl font-bold">
                        <Balancer>
                            As an elite installation company, we are committed to providing everyone with high-level service
                        </Balancer>
                    </h3>
                    <h4 className="text-2xl font-light opacity-70">
                        <Balancer>
                            We have experience in all types of projects, from residential to commercial to industrial.
                        </Balancer>
                    </h4>

                    <div className=" grid gap-6 md:mt-12 md:grid-cols-3">
                        {featureText.map(({ icon, title, description }, index) => (
                            <div className="flex flex-col gap-4" key={index}>
                                {icon}
                                <h4 className="text-xl text-primary">{title}</h4>
                                <p className="text-base opacity-75">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default FeatureOne;
