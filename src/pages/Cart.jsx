import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Detail>
                  <ProductName>
                    {" "}
                    <b>Product : </b> Nike Air Jordan{" "}
                  </ProductName>
                  <ProductId>
                    {" "}
                    <b>ID : </b> Nike Air Jordan{" "}
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    {" "}
                    <b>Size : </b> 43{" "}
                  </ProductSize>
                </Detail>
              </ProductDetail>
              <PriceDetail>
                  <ProductAmountContainer>
                      <Add />
                      <ProductAmount>2</ProductAmount>
                      <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr></Hr>
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Detail>
                  <ProductName>
                    {" "}
                    <b>Product : </b> Nike Air Jordan{" "}
                  </ProductName>
                  <ProductId>
                    {" "}
                    <b>ID : </b> Nike Air Jordan{" "}
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    {" "}
                    <b>Size : </b> 43{" "}
                  </ProductSize>
                </Detail>
              </ProductDetail>
              <PriceDetail>
                  <ProductAmountContainer>
                      <Add />
                      <ProductAmount>2</ProductAmount>
                      <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText type="total" >Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  border: 2px solid ${(props) => props.type !== "filled" && "teal"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "#fff"};
  text-transform: uppercase;
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;


const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
`;
const ProductName = styled.span``;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color} ;
`;
const ProductSize = styled.span``;
const ProductId = styled.span``;
const Image = styled.img`
    width: 200px;
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;

`

const Summary = styled.div`
  flex: 1;
  border:.5px solid lightgray;
  border-radius: 10px;
  padding: 20px; 
  height: 50vh;
`;
const SummaryTitle  = styled.h1`
  font-weight: 200;
`
const SummaryItem  = styled.div`
  margin: 30px 0px;
`
const SummaryItemText  = styled.span``
const SummaryItemPrice  = styled.span``
const Button  = styled(TopButton)`
  margin: 10px 0 ;
`