import { Send } from "@mui/icons-material";
import styled from "styled-components";

const Newsletter = () => {
  return (
    <Container>
      <Title>NewsLetter </Title>
      <Description>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eius eos
        suscipit?{" "}
      </Description>
      <InfoContainer>
        <Input placeholder="Your Email" />
        <Button>
          <Send />
        </Button>
      </InfoContainer>
    </Container>
  );
};

export default Newsletter;

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-content: space-between;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InfoContainer = styled.div`
  display: flex;
  width: 50%;
  height: 40px;
  background-color: #fff;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;

`;
const Button = styled.button`
  border: none;
  background-color: teal;
  cursor: pointer;
  flex: 1;
  color: #fff;
`;
