// React and Next.js imports
import Image from "next/image";


// UI component imports
import * as Craft from "@/components/craft";

// Asset imports
import CustomerService from "@/public/CustomerService.webp";

const FeatureLeft = () => {
    return (
        <section id={"feature"}>
        <Craft.Section>
            <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12">
                <div className="not-prose relative flex h-96 overflow-hidden rounded-lg">
                    <Image
                        src={CustomerService}
                        alt="placeholder"
                        className="fill object-cover"
                    />
                </div>
                <div className="flex flex-col gap-6 py-8">
                    <h3 className="!my-0">A Major Focus on Customer Service</h3>
                    <p className="font-light leading-[1.4] opacity-70">
                        With our constantly active WhatsApp line and a direct number to technical support, we will always be there to offer world-class support and aftercare for all your needs that you will not be able find with other installers
                    </p>
                    <div className="not-prose flex items-center gap-2">
                        {/*<Button className="w-fit" asChild>
                            <Link href="#">Get Started</Link>
                        </Button>
                        <Button className="w-fit" variant="link" asChild>
                            <Link href="#">Learn More {"->"}</Link>
                        </Button> */}
                    </div>
                </div>
            </Craft.Container>
        </Craft.Section>
        </section>
    );
};

export default FeatureLeft;
