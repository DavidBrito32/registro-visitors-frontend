import styled from "styled-components";

interface StyledProps {
  $img?: string | undefined;
  $w?: string | undefined;
  scope?: string | undefined;
  type?: string | undefined;
  placeHolder?: string | undefined;
  value?: string | number | boolean | undefined;
  onChange?: () => void | undefined;
  alt?: string | undefined;
  src?: string | undefined;
  $color?: string | undefined;
  $size?: string | undefined;
  $align?: string | undefined;
  $justify?: string | undefined;
  $dir?: string | undefined;
  $gap?: string | undefined;
  $h?: string | undefined;
  $bg?: string | undefined;
  $radius?: string | undefined;
  $p?: string | undefined;
  $m?: string | undefined;
  $mt?: string | undefined;
  $ml?: string | undefined;
  $mr?: string | undefined;
  $mb?: string | undefined;
  $display?: string | undefined;
  $weight?: string | undefined;
  $border?: string | undefined;
}

export const Container = styled.div<StyledProps>`
  width: 100%;
  min-height: 100vh;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  background-image: url(${(props) => props.$img || "#FFFFFF"});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    height: auto;
    gap: 50px;
    padding-bottom: 30px;
  }
`;

export const PublicHeader = styled.header`
  width: 100%;
  height: 109px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #00000080;
  padding: 0 50px 0 0;
  @media only screen and (max-width: 768px) {
    padding: 0 10px 0 0;
    height: 80px;
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 576px) {
    max-height: 100vh;
    align-items: baseline;
  }
  @media only screen and (max-width: 1440px) {
    min-height: 100vh;
    padding-top: 30px;
    align-items: baseline;
    overflow-y: scroll;
  }
`;

export const Form = styled.form`
  width: 500px;
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 18px;
  background-color: #607d9270;
  backdrop-filter: blur(3px);
  border-radius: 22px;

  @media only screen and (max-width: 576px) {
    width: 95%;
  }
  @media only screen and (max-width: 350px) {
    width: 100%;
  }
`;

export const Title = styled.h1<StyledProps>`
  font-size: ${(props) => props.$size || "28px"};
  width: 100%;
  padding: ${(props) => props.$p || "0"};
  margin: ${(props) => props.$m || "0"};
  color: ${(props) => props.$color || "white"};
  text-align: ${(props) => props.$align || "center"};
`;

export const Label = styled.label<StyledProps>`
  display: flex;
  width: ${(props) => props.$w || "auto"};
  flex-direction: column;
  gap: 5px;
`;

export const Text = styled.p`
  font-size: 16px;
  color: white;
  font-weight: bold;
`;

export const Input = styled.input<StyledProps>`
  width: ${(props) => props.$w || "100%"};
  height: ${(props) => props.$h || "50px"};
  border-radius: 8px;
  border: none;
  background-color: white;
  padding-left: 20px;
  transition: all ease 200ms;
  border: ${(props) => props.$border || "2px solid transparent"};
  font-size: 0.875rem;

  &:focus {
    border: 2px solid purple;
  }
`;

export const Select = styled.select<StyledProps>`
  width: ${(props) => props.$w || "auto"};
  border-radius: 8px;
  height: 50px;
  text-align: center;
  transition: all ease 200ms;
  border: 2px solid transparent;

  &:focus {
    border: 2px solid purple;
  }
`;

export const Logo = styled.img<StyledProps>`
  width: 10%;
  height: 100px;
  display: block;
  @media only screen and (max-width: 576px) {
    height: 100%;
    width: 20%;
  }
  @media only screen and (max-width: 768px) {
    height: 100%;
    width: 30%;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #00000085;
  backdrop-filter: blur(3px);
  visibility: hidden;
  opacity: 0;
  transition-duration: 400ms;

  &.active {
    visibility: visible;
    opacity: 1;
  }
`;

export const Modal = styled.div`
  width: 400px;
  padding: 30px 20px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 1px 1px 100px 05px #ffffff99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 10px;
`;

export const FlexContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
`;

export const Header = styled.header`
  width: 100%;
  height: 122px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export const NavBar = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: black;
  padding: 40px 17px;
`;

export const ListMenu = styled.ul<StyledProps>`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 65px;
`;

export const ListItem = styled.li`
  width: 100%;
  padding: 18px 72px;
  border-radius: 12px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition-duration: 0.2s;
  &:hover {
    background-color: #637186;
  }

  &.active {
    background-color: #637186;
  }
`;

export const AutoContainer = styled.div`
  flex: 1;
  height: auto;
  max-height: 100%;
  background-color: #aab7ba;
`;

export const WrapContainer = styled.div<StyledProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${(props) => props.$bg || ""};
  gap: 30px;
  padding: 130px;
`;

export const Grafic = styled.div<StyledProps>`
  width: 440px;
  height: 252px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.$align || "start"};
  justify-content: ${(props) => props.$justify || "start"};
  background-color: white;
`;

export const Beetween = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Box = styled.div<StyledProps>`
  width: ${(props) => props.$w || "auto"};
  display: flex;
  padding: ${(props) => props.$p || "0"};
  margin: ${(props) => props.$m || "0"};
  margin-top: ${(props) => props.$mt || "0"};
  margin-left: ${(props) => props.$ml || "0"};
  margin-right: ${(props) => props.$mr || "0"};
  margin-bottom: ${(props) => props.$mb || "0"};
  background-color: ${(props) => props.$bg || ""};
  border-radius: ${(props) => props.$radius || "0px"};
  height: ${(props) => props.$h || "auto"};
  width: ${(props) => props.$w || "auto"};
  margin-top: ${(props) => props.$mt || "0px"};
  flex-direction: ${(props) => props.$dir || "row"};
  align-items: ${(props) => props.$align || "center"};
  justify-content: ${(props) => props.$justify || "center"};
  gap: 10px;
`;

export const Circle = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #ad00ff30;
  border: 1px solid #ff00b8;
`;

export const Table = styled.table<StyledProps>`
  height: ${(props) => props.$h || "auto"};
  width: ${(props) => props.$w || "auto"};
  padding: ${(props) => props.$p || "0"};
  margin: ${(props) => props.$m || "0"};
  margin-top: ${(props) => props.$mt || "0"};
  margin-left: ${(props) => props.$ml || "0"};
  margin-right: ${(props) => props.$mr || "0"};
  margin-bottom: ${(props) => props.$mb || "0"};
`;

export const Thead = styled.thead<StyledProps>`
  height: ${(props) => props.$h || "auto"};
  width: ${(props) => props.$w || "auto"};
  padding: ${(props) => props.$p || "0"};
  margin: ${(props) => props.$m || "0"};
  margin-top: ${(props) => props.$mt || "0"};
  margin-left: ${(props) => props.$ml || "0"};
  margin-right: ${(props) => props.$mr || "0"};
  margin-bottom: ${(props) => props.$mb || "0"};
  background-color: ${(props) => props.$bg || ""};
`;
export const TBody = styled.tbody<StyledProps>`
  height: ${(props) => props.$h || "auto"};
  width: ${(props) => props.$w || "auto"};
  padding: ${(props) => props.$p || "0"};
  margin: ${(props) => props.$m || "0"};
  margin-top: ${(props) => props.$mt || "0"};
  margin-left: ${(props) => props.$ml || "0"};
  margin-right: ${(props) => props.$mr || "0"};
  margin-bottom: ${(props) => props.$mb || "0"};
  background-color: ${(props) => props.$bg || ""};
`;

export const Tr = styled.tr<StyledProps>`
  height: ${(props) => props.$h || "auto"};
  width: ${(props) => props.$w || "auto"};
  padding: ${(props) => props.$p || "0"};
  margin: ${(props) => props.$m || "0"};
  margin-top: ${(props) => props.$mt || "0"};
  margin-left: ${(props) => props.$ml || "0"};
  margin-right: ${(props) => props.$mr || "0"};
  margin-bottom: ${(props) => props.$mb || "0"};
  background-color: ${(props) => props.$bg || ""};
  font-size: ${(props) => props.$size || "16px"};
`;

export const Th = styled.th<StyledProps>`
  height: ${(props) => props.$h || "auto"};
  width: ${(props) => props.$w || "auto"};
  padding: ${(props) => props.$p || "0"};
  margin: ${(props) => props.$m || "0"};
  margin-top: ${(props) => props.$mt || "0"};
  margin-left: ${(props) => props.$ml || "0"};
  margin-right: ${(props) => props.$mr || "0"};
  margin-bottom: ${(props) => props.$mb || "0"};
  background-color: ${(props) => props.$bg || ""};
  font-size: ${(props) => props.$size || "16px"};
`;
export const Td = styled.td<StyledProps>`
  display: ${(props) => props.$display};
  height: ${(props) => props.$h || "auto"};
  width: ${(props) => props.$w || "auto"};
  padding: ${(props) => props.$p || "0"};
  margin: ${(props) => props.$m || "0"};
  margin-top: ${(props) => props.$mt || "0"};
  margin-left: ${(props) => props.$ml || "0"};
  margin-right: ${(props) => props.$mr || "0"};
  margin-bottom: ${(props) => props.$mb || "0"};
  background-color: ${(props) => props.$bg || ""};
  font-size: ${(props) => props.$size || "16px"};
  text-align: ${(props) => props.$align || "center"};
  font-weight: ${(props) => props.$weight || "normal"};
  align-items: ${(props) => props.$align || "center"};
  justify-content: ${(props) => props.$justify || "center"};
  gap: ${(props) => props.$gap || "0px"};
`;
