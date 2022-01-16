import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Room,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ELFARIS.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          omnis velit debitis tenetur quia consequuntur nobis odit quibusdam
          doloremque quod perspiciatis quisquam? Nemo maxime, enim placeat fugit
          voluptas ex. Et?
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="e60023">
            <YouTube />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>UseFull Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}} /> Jl. Budi asih gg.srimanganti RT/RW 03/06 kec.sumedang selatan{" "}
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}} />
          +62 881 412 551
        </ContactItem>
        <ContactItem>
          <Mail style={{marginRight:"10px"}} /> elfaris@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
  max-width: 700px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: #${(props) => props.color};
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  transition: 250ms;
  &:hover {
    color: teal;
    transform: scale(1.1);
  }
`;

const Right = styled.div`
  flex: 1;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
const Payment = styled.img`
    width: 50%;
`;
