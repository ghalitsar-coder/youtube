import styled from "styled-components";
import Navbar from "./Navbar";
import Announcement from "./Announcement";
import Products from "./Products";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          {" "}
          <FilterText>Filter Products : </FilterText>{" "}
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Pink</Option>
            <Option>Green</Option>
            <Option>Lilac</Option>
            <Option>Navy</Option>
            <Option>Cream</Option>
            <Option>Coffee</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XXL</Option>
            <Option>XL</Option>
            <Option>L</Option>
            <Option>M</Option>
            <Option>XM</Option>
            <Option>S</Option>
            <Option>XS</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products : </FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-weight: 600;
  font-size: 20px;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  border: none;
  border: 2px solid teal;
  border-radius: 4px;
`;
const Option = styled.option`
  border: none;
  border: 2px solid teal;
  padding: 10px;
`;
