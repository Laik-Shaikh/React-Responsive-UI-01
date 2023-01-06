import { Button } from "../components/styles/Button";
import { Section, Banner, Title, Image, ImageContainer } from "./styles/HeroSectionStyles";

const HeroSection = () => {
  return (
    <>
      <Section>
        <Banner>
          <Title>
            <h1>Save more and get your finances right</h1>
            <p>
              Orci molestie nam vulputate nunc habitant gravida. Interdum vitae
              vivamus ipsum aliquet consectetur aliquam.
            </p>
          </Title>
          <Button color="#fff" bg="#9D0AFF" borderColor="#9D0AFF">
            Request a demo
          </Button>
        </Banner>
      
        <ImageContainer>
          <Image src="./images/Image1.jpg" alt="Hero Image" />
        </ImageContainer>  
      </Section>
      
    </>
  );
};

export default HeroSection;
