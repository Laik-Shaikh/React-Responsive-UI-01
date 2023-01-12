import React, { useState, useEffect } from "react";
import { Button } from "../components/styles/Button";
import { Section, Banner, Title, Image, ImageContainer } from "./styles/HeroSectionStyles";
import axios from "axios";

const HeroSection = () => {

  const [header, setHeader] = useState('');
  const [count, setCount] = useState(null);

  useEffect(() => {

    const unsubscribe = async () => {
      const result = await axios({
        method: "get",
        url: "https://pepper-api.onrender.com/admin/details",
        headers: {
          Accept: "application/json, form-data",
        },
      });
      console.log(result.data);
      setHeader(result.data.details.header);
    };
    unsubscribe();

  }, []);

  const updateCount = async () => {
    try {
      const result = await axios({
        method: "put",
        url: "https://pepper-api.onrender.com/admin/count",
        headers: {
        Accept: "application/json, form-data"
      }
      });
      alert("Updated Successfully");
    } catch (error) {
      alert(error.message);
    }
  }

  const HeaderText = header? header : "Save more and get your finances right";

  return (
    <>
      <Section>
        <Banner>
          <Title>
            <h1>{HeaderText}</h1>
            <p>
              Orci molestie nam vulputate nunc habitant gravida. Interdum vitae
              vivamus ipsum aliquet consectetur aliquam.
            </p>
          </Title>
          <Button onClick={() => updateCount()} color="#fff" bg="#9D0AFF" borderColor="#9D0AFF">
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
