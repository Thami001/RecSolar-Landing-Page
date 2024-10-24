import { Section, Container } from "@/components/craft";
import { ArrowUpRight } from "lucide-react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
    question: string;
    answer: string;
    link?: string;
};

const content: FAQItem[] = [
    {
        question: "Want to communicate with us?",
        answer:
            "This is a whatsapp link that will take you directly to our customer support line where we will be happy to assist you with any questions you may have",
        link: "https://wa.me/message/J4PIVD2VUWEIB1",
    },
    {
        question: "What would my house need to get a system installed?",
        answer:
            "A site inspection will be done at the place where the system will be installed where we will determine what system will be the most cost-effective and power-efficient",
    },
    {
        question: "Is a site inspection the only way for me to get a system installed?",
        answer:
            "Not at all! You can ask to have us quote you on a system you would like to be installed and we would give you the best pricing possible",
    },
];

const FAQ = () => {
    return (
        <Section id={"FAQ"} className={"border-t"}>
            <Container>
                <h3 className="!mt-0">Frequently Asked Questions</h3>
                <h4 className="text-muted-foreground">
                    Can&apos;t find the answer you&apos;re looking for? Here is how we can help
                </h4>
                <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
                    {content.map((item, index) => (
                        <Accordion key={index} type="single" collapsible>
                            <AccordionItem value={item.question}>
                                <AccordionTrigger className="text-left">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-base md:w-3/4">
                                    {item.answer}
                                    {item.link && (
                                        <a
                                            href={item.link}
                                            className="mt-2 flex w-full items-center opacity-60 transition-all hover:opacity-100 underline"
                                        >
                                            RECSolar Customer Support Line <ArrowUpRight className="ml-1" size="16" />
                                        </a>
                                    )}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default FAQ;
