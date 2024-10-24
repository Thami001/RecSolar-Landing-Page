import {Container} from "@/components/craft";
import {LayoutGridDemo} from "@/components/ui/imageLayout";


const WorkDone = () => {
    return (
        <section className={"border-b"}>
            <Container >
                <h3 className={"text-center"}>
                    Work Done
                </h3>
                <p className={"text-center font-light "}>
                    Here is some of the amazing work that RECSolar has been involved in
                </p>
              <LayoutGridDemo/>
            </Container>
        </section>
    );
};

export default WorkDone;