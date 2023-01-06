import { Section, Container, FlexContainer, Content,Bold, Right, First, ItemCont, Item, Icon, BoldText, LightText } from "./styles/Section3Styles";
import { Button } from '../components/styles/Button';
import { Light } from '../components/styles/Section2Styles';


const Section3 = () => {
  return (
    <>
      <Section>
        <Container>
          <FlexContainer>
            <Content>
              <div>
                <Bold>Build a powerful website for your startup.</Bold>
                <Light>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur aliquam.</Light>
              </div>
              <Button color='#fff' bg='#9D0AFF' borderColor="#9D0AFF">Read more</Button>
            </Content>

            <Right>
              <First>
                <ItemCont>
                  <Item>
                    <Icon src="./images/Icon1.svg" alt="" />
                    <BoldText>7.000 Happy users</BoldText>
                    <LightText>Bibendum feugiat mauris, malesuada nulla leo porta et. Nunc eleifend aliquet nullam nec sit gravida ac</LightText>
                  </Item>
                </ItemCont>

                <ItemCont>
                  <Item>
                      <Icon src="./images/Icon2.svg" alt="" />
                      <BoldText>24/7 Support</BoldText>
                      <LightText>Bibendum feugiat mauris, malesuada nulla leo porta et. Nunc eleifend aliquet nullam nec sit gravida ac</LightText>
                  </Item>
                </ItemCont>
              </First>

              <div>
                <ItemCont>
                    <Item>
                      <Icon src="./images/Icon3.svg" alt="" />
                      <BoldText>Global community</BoldText>
                      <LightText>Bibendum feugiat mauris, malesuada nulla leo porta et. Nunc eleifend aliquet nullam nec sit gravida ac</LightText>
                    </Item>
                </ItemCont>
              </div>
            </Right>
          </FlexContainer>
        </Container>
      </Section>
    </>
  )
}

export default Section3;