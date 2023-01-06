import { FooterContainer, FooterCont, Item1, RowFlex, Light, Twitter, Mail, LinkedIn, Item2, Bold, ColFlex, BottonContent, P, Span, Second } from '../components/styles/FooterStyle';
import { Button } from '../components/styles/Button';




const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterCont>
          <Item1>
            <RowFlex>
              <img src="./images/Icon9.svg" alt="" />
            </RowFlex>
            <Light Weight='500'>Pepper is one of the most reliable delievery patlform magement service to automate your network.</Light>
            <Button color='#fff' bg='#9D0AFF' borderColor="#9D0AFF">Get Started</Button>
            <RowFlex>
              <LinkedIn />
              <Twitter />
              <Mail />
            </RowFlex>
          </Item1>


          <Second>
            <Item2>
              <Bold>Pages Main</Bold>
              <ColFlex>
                <Light Weight='400' >Home</Light>
                <Light Weight='400' >Blog</Light>
                <Light Weight='400' >Blog Template</Light>
                <Light Weight='400' >Pricing</Light>
                <Light Weight='400' >Pricing Ecommerce</Light>
                <Light Weight='400' >About</Light>
                <Light Weight='400' >Careers</Light>
                <Light Weight='400' >Careers Template</Light>
                <Light Weight='400' >Contact</Light>
              </ColFlex>
            </Item2>


            <Item2>
              <Bold>Template Pages</Bold>
              <ColFlex>
                <Light Weight='400' >Style guide</Light>
                <Light Weight='400' >Licenses</Light>
                <Light Weight='400' >Changelog</Light>
              </ColFlex>
            </Item2>
          </Second>
        </FooterCont>

        <BottonContent>
          <P>
            © All rights reserved. <Span Color='#50C878'>Flowset</Span>. Powered by <Span Color='#9932CC'>Wf</Span>.
          </P>
        </BottonContent>
      </FooterContainer>
    </>
  );
};

export default Footer;