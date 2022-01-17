import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="Email" />
          <Input placeholder="Password" />

          <Button>getting started</Button>
          <Link>
            {" "}
            <span> Forgot password ? </span>
          </Link>
          <Link>
            {" "}
            <span> Create a new Account </span>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("/images/w1.jpg");
  background-position-y: -180px;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 25%;
  background-color: #fff;
  z-index: 2;
`;
const Title = styled.h1`
  font-weight: 400;
  font-size: 40px;
`;
const Form = styled.form`
  display: flex;
  z-index: 2;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  background-color: #fff;
  border: none;
  border: 2px solid teal;
  border-radius: 4px;
  min-width: 40%;
  margin: 20px 0px;
  padding: 10px;
  cursor: pointer;
`;
const Button = styled.button`
  padding: 10px 0px;
  border: none;
  border: 2px solid teal;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  font-weight: bold;
  transition: 250ms;
  text-transform: uppercase;
  letter-spacing: 1.1px;
  font-size: 17px;
  color: teal;

  &:hover {
    background-color: teal;
    color: #fff;
  }
  margin: 20px 0px;
  box-sizing: border-box;
`;
const Link = styled.a`
  cursor: pointer;
  margin: 5px 0px;
  transition: 250ms;
  position: relative;

  &:hover {
    color: teal;
   }
`;
