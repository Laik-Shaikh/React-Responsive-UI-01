import { Section, Container, Flex, SFlex, Item1, Item2, Image, Content, ColFlex, RowFlex, Bold, Light, Logo, Left, Right } from "./styles/Section2Styles";

const Section2 = () => {
  return (
    <>
      <Section>
        <Container>
          <Flex>
            <Item1>
              <Image src="./images/Item1.jpg" alt="" />
            </Item1>

            <Item2>
              <Content>
                <div>
                  <Bold>Manage and Track Your Projects</Bold>
                </div>
                <div>
                  <Light>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</Light>
                </div>

                <ColFlex>
                  <RowFlex>
                    <Logo src="./images/purpleTick.svg" alt="" />
                    <Light>Create posts, reels and stories.</Light>
                  </RowFlex>

                  <RowFlex>
                    <Logo src="./images/purpleTick.svg" alt="" />
                    <Light>Publish your Facebook posts dynamically.</Light>
                  </RowFlex>

                  <RowFlex>
                    <Logo src="./images/purpleTick.svg" alt="" />
                    <Light>Schedule any Twitter posts.</Light>
                  </RowFlex>
                </ColFlex>
              </Content>
            </Item2>
          </Flex>


          <SFlex className="Reverse">
            <Item1 >
              <Image src="./images/Image2.png" alt="" />
            </Item1>

            <Item2>
              <Content>
                <div>
                  <Bold>Easily manage your team's tasks</Bold>
                </div>
                <div>
                  <Light>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</Light>
                </div>

                <ColFlex>
                  <RowFlex>
                    <Logo src="./images/greenTick.svg" alt="" />
                    <Light>Create posts, reels and stories.</Light>
                  </RowFlex>

                  <RowFlex>
                    <Logo src="./images/greenTick.svg" alt="" />
                    <Light>Publish your Facebook posts dynamically.</Light>
                  </RowFlex>

                  <RowFlex>
                    <Logo src="./images/greenTick.svg" alt="" />
                    <Light>Schedule any Twitter posts.</Light>
                  </RowFlex>
                </ColFlex>
              </Content>
            </Item2>
          </SFlex>


          <Flex>
            <Item1>
              <Image src="./images/Image3.png" alt="" />
            </Item1>

            <Item2>
              <Content>
                <div>
                  <Bold>Manage and Track Your Projects</Bold>
                </div>
                <div>
                  <Light>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</Light>
                </div>

                <ColFlex>
                  <RowFlex>
                    <Logo src="./images/purpleTick.svg" alt="" />
                    <Light>Create posts, reels and stories.</Light>
                  </RowFlex>

                  <RowFlex>
                    <Logo src="./images/purpleTick.svg" alt="" />
                    <Light>Publish your Facebook posts dynamically.</Light>
                  </RowFlex>

                  <RowFlex>
                    <Logo src="./images/purpleTick.svg" alt="" />
                    <Light>Schedule any Twitter posts.</Light>
                  </RowFlex>
                </ColFlex>
              </Content>
            </Item2>
          </Flex>
        </Container>
      </Section>
    </>
  );
};

export default Section2;
