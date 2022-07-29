import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <FirstHeader>
        <Login>로그아웃</Login>
        <Login>로그인</Login>
      </FirstHeader>
      <SecondHeader>
      <MenuBox>
        <Home>IsKREAM</Home>
        </MenuBox>
        <MenuBox>
          <GoToShop>SHOP</GoToShop>
          <GoToAbout>ABOUT</GoToAbout>
        </MenuBox>
      </SecondHeader>
    </MainHeader>
  );
};

const MainHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`;
const FirstHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 65px;
  height: 30px;
  background-color: white;
`;

const SecondHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 50px;
  padding-left: 50px;
  height: 68px;
  background-color: white;
  border: 1.2px solid #C9CDD6;
`;

const Home = styled.div`
  text-decoration: none;
  font-size: 32px;
  font-weight: bold;
  font-style: italic;
`;

const Login = styled.div`
  margin-left: 10px;
  font-size: 11px;
  :hover {
    cursor: pointer;
  }
`;

const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoToShop = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  :hover {
    cursor: pointer;
  }
`;

const GoToAbout = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

export default Header;
