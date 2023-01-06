import { Section, Container, Item, Title, Para, Cont, GridContainer, Grid, Item1, Content, Flex, Bold, Light } from "./styles/Section1Styles";


const Section1 = () => {
  return (
    <>
      <Section>
        <Container>
          <Cont>
            <Item>
              <Title>Supercharge your workflow to get started</Title>
              <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</Para>
            </Item>
          </Cont>

          {/* Grid Contaier */}
          <GridContainer>
            <Grid>
              <Item1>
                <Content>
                  <img src="./images/email.svg" />
                  <Flex>
                    <Bold>Email Management</Bold>
                    <Light>Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. Id laoreet suscipit vel sagittis non commodo semper.</Light>
                  </Flex>
                </Content>
              </Item1>

              <Item1>
                <Content>
                  <img src="./images/Icon4.svg" />
                  <Flex>
                    <Bold>Campaign Calender</Bold>
                    <Light>Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. Id laoreet suscipit vel sagittis non commodo semper.</Light>
                  </Flex>
                </Content>
              </Item1>

              <Item1>
                <Content>
                  <img src="./images/Icon5.svg" />
                  <Flex>
                    <Bold>Personal assistance</Bold>
                    <Light>Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. Id laoreet suscipit vel sagittis non commodo semper.</Light>
                  </Flex>
                </Content>
              </Item1>

              <Item1>
                <Content>
                  <img src="./images/Icon6.svg" />
                  <Flex>
                    <Bold>Payment feature</Bold>
                    <Light>Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. Id laoreet suscipit vel sagittis non commodo semper.</Light>
                  </Flex>
                </Content>
              </Item1>

              <Item1>
                <Content>
                  <img src="./images/Icon7.svg" />
                  <Flex>
                    <Bold>Utility apps</Bold>
                    <Light>Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. Id laoreet suscipit vel sagittis non commodo semper.</Light>
                  </Flex>
                </Content>
              </Item1>

              <Item1>
                <Content>
                  <img src="./images/Icon8.svg" />
                  <Flex>
                    <Bold>Sale notification</Bold>
                    <Light>Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. Id laoreet suscipit vel sagittis non commodo semper.</Light>
                  </Flex>
                </Content>
              </Item1>
            </Grid>
          </GridContainer>
        </Container>
      </Section>
    </>
  )
};

export default Section1;
