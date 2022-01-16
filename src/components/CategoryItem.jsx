import styled from "styled-components";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Tittle>{item.title}</Tittle>
        <Button> SHOP NOW </Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;

const Container = styled.div`
  flex: 1;
  margin: 3px;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Tittle = styled.h1`
  color: #fff;
  margin: 20px;

`;
const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  border: 2px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #fff;
`;
