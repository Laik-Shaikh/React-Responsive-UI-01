import { Section } from "./styles/Section3Styles";
import { Button } from '../components/styles/Button';
import { Container, ItemCont, Bold, Light, ButtonContainer, Image1 , Image2, Cont} from "./styles/Section4Styles";


const Section4 = () => {
  return (
    <>
      <Section>
        <Container>
          <Image1 src="./images/Photo1.png" alt="" />
            <Cont>
              <ItemCont>
              <div>
                <Bold>Focus on the analytics that matter.</Bold>
                <Light>Grow faster with a website that helps you convert more customers.</Light>
              </div>

              <ButtonContainer>
                <Button color='#fff' bg='#9D0AFF' borderColor="#9D0AFF">Get started now</Button>
                <Button color='#fff' bg='transparent' borderColor="#fff">Compare plans</Button>
              </ButtonContainer>
            </ItemCont>
            </Cont>
          <Image2 src="./images/Photo2.png" alt="" />
        </Container>
      </Section>
    </>
  );
}

export default Section4;