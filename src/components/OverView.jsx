import { Div, P, Section, LogoContainer, Div2, Flex, Item1, Item2, Container, Number, Div3, Title, Para, Para1, ColFlex, RowFlex, Item, Image, Image1, Image2 } from "./styles/OverViewStyle";

const OverView = () => {

  return (
    <>
      <Section>
        <Div>
          <div>
            <P>Trusted and loved by the world’s best teams</P>
            <LogoContainer>
              <img src="./images/1.svg" alt="" />
              <img src="./images/2.svg" alt="" />
              <img src="./images/3.svg" alt="" />
              <img src="./images/4.svg" alt="" />
              <img src="./images/5.svg" alt="" />
            </LogoContainer>
          </div>
        </Div>

        <Div2>
          <Flex>
            <Image1 src="./images/Photo3.png" alt="" />
            <Div3>
              <Item1>
                <Title>A nice and simple financial overview</Title>
                <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</Para>
              </Item1>

              <Item2>
                <Container>
                  <div>
                    <Number>120+</Number>
                    <Para1>Useful widgets</Para1>
                  </div>
                    
                  <div>
                    <Number>20+</Number>
                    <Para1>Integrations</Para1>
                  </div>

                  <div>
                    <Number>65+</Number>
                    <Para1>Features out</Para1>
                  </div>
                </Container>
              </Item2>
            </Div3>
            <Image2 src="./images/Photo4.png" alt="" />
          </Flex>
        </Div2>
      

        <ColFlex>
          <div>
            <RowFlex>
              <Item>
                <Image src="./images/purpleTick.svg" alt="" />
                <p>Public and private chat</p>
              </Item>
              <Item>
                <Image src="./images/purpleTick.svg" alt="" />
                <p>Event scheduler</p>
              </Item>
              <Item>
                <Image src="./images/purpleTick.svg" alt="" />
                <p>Appoitment scheduling</p>
              </Item>
              <Item>
                <Image src="./images/purpleTick.svg" alt="" />
                <p>No prior credit card required</p>
              </Item>
              <Item>
                <Image src="./images/purpleTick.svg" alt="" />
                <p>Group video calls</p>
              </Item>
            </RowFlex>
          </div>

          <div>
          <RowFlex>
              <Item >
                <Image src="./images/greenTick.svg" alt="" />
                <p>Appoitment scheduling</p>
              </Item>
              <Item >
                <Image src="./images/greenTick.svg" alt="" />
                <p>No prior credit card required</p>
              </Item>
              <Item >
                <Image src="./images/greenTick.svg" alt="" />
                <p>Public and private chat</p>
              </Item>
              <Item >
                <Image src="./images/greenTick.svg" alt="" />
                <p>Group video calls</p>
              </Item>
              <Item > 
                <Image src="./images/greenTick.svg" alt="" />
                <p>Event scheduler</p>
              </Item>
            </RowFlex>
          </div>
        </ColFlex>
      </Section>
    </>
  );
};

export default OverView;
