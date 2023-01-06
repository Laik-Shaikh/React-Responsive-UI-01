import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
`;

export const Div = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  width: 100%;
  .NewDiv {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    justify-content: center;
    align-content: center;
  }

  @media screen and (max-width: 600px) {
    padding: 5rem 2rem;
  }
`;

export const P = styled.p`
  text-align: center;
`;

export const LogoContainer = styled.div`
  /* padding: 0.5rem 7rem; */
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    90deg,
    #fffaff 0%,
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 0) 90%,
    #fffaff 100%
  );
  flex-direction: row;
  margin-top: 0.7rem;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 700) {
    width: 100%;
  }
`;

export const Div2 = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 80px;
`;

export const Flex = styled.div`
  background-color: #151531;
  border-radius: 2rem;
  position: relative;
  flex-grow: 1;
  overflow: hidden;

  @media screen and (max-width: 1080px) {
    margin: 0rem 1.5rem;
  }
`;

export const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 7rem;
  max-width: 760px;

  @media screen and (max-width: 1080px) {
    padding: 2.5rem 1.5rem;
  }
`;

export const Item1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
`;
export const Title = styled.h1`
  color: #FFFAFF;
  font-family: Plus Jakarta Sans, sans-serif;
  font-weight: 700;
  font-size: clamp(2rem, 4vw, 3rem);
  text-align: center;
`;

export const Para = styled.p`
  padding: 10px 0.5rem;
  color: rgba(255, 250, 255, 0.8);
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: clamp(0.7rem, 4vw, 1rem);
  text-align: center;

  @media screen and (max-width: 1080px) {
    padding: 10px 0.1rem;
  }
`;

export const Para1 = styled.p`
  margin-top: 1rem;
  color: rgba(255, 250, 255, 0.8);
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: clamp(0.7rem, 4vw, 1rem);
  text-align: center;
`;

export const Item2 = styled.div`
  margin-top: 2rem;
  background: rgba(255, 250, 255, 0.1);
  width: 100%;
  border-radius: 2rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 3rem;

  @media screen and (max-width: 1080px) {
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    gap: 2rem;
  }
`;
export const Number = styled.p`
  font-weight: 700;
  font-family: Plus Jakarta Sans, sans-serif;
  font-size: 2.3rem;
  color: #fffaff;
  line-height: 2rem;
`;

export const ColFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  width: 100%;
`

export const Image = styled.img`
  width: 15%;
`

export const Image1 = styled.img`
    position: absolute;
    width: 15%;
    left: -4.16px;
    right: 925.11px;
    top: 20.35px;
    transform: rotate(-3.66deg);
    
`

export const Image2 = styled.img`
    position: absolute;
    width: 15%;
    /* left: 937.26px; */
    right: -.15px;
    bottom: -0.03px;
`

