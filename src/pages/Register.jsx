import styled from "styled-components";

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an Account</Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Last name" />
          <Input placeholder="Email" />
          <Input placeholder="Phone number" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea iusto
            natus mollitia sint deserunt vitae!
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("/images/w3.jpg");
  background-position-y: -180px;
  background-size: cover;
  background-repeat: no-repeat;
  display: grid;
  place-items: center;
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0)
    );
  }
  /* height: 1700px; */
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: #fff;
  z-index: 2;
`;
const Form = styled.form`
  display: flex;
  z-index: 2;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  background-color: #fff;
  border: none;
  border: 1px solid teal;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  cursor: pointer;
`;
const Agreement = styled.span`
  margin: 20px 0px;
  font-size: 12px;
`;
const Button = styled.button`
  width: 40%;
  background-color: transparent;
  border: none;
  border: 1px solid teal;
  padding: 15px 20px;
  transition: 250ms;
  &:hover {
    background-color: teal;
    color: #fff;
  }
  cursor: pointer;
`;
