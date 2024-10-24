import { Main, Section, Container } from "@/components/craft";
import Hero from "@/components/homePage/hero";
import FeatureOne from "@/components/homePage/featureOne";
import FeatureLeft from "@/components/homePage/featureLeft";
import FeatureRight from "@/components/homePage/featureRight";
import FAQ from "@/components/homePage/faq";
import Footer from "@/components/homePage/footer";


export default function Home() {
  return (
      <Main>
        <Section >
          <Container>
            <Hero/>
              <FeatureOne/>
              <FeatureLeft/>
              <FeatureRight/>
              <FAQ/>
              <Footer/>
          </Container>
        </Section>
      </Main>
  );
}
