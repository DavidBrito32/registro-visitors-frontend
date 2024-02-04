import styled from "styled-components";

interface StyledProps {
  $img?: string | undefined;
  $w?: string | undefined;
  type?: string | undefined;
  placeHolder?: string | undefined;
  value?: string | number | boolean | undefined;
  onChange?: () => void | undefined;
  alt?: string | undefined;
  src?: string | undefined;
  $color?: string | undefined;
}

export const Container = styled.div<StyledProps>`
  width: 100%;
  height: 100vh;
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
  font-size: 28px;
  width: 100%;
  color: ${(props) => props.$color || "white"};
  text-align: center;
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

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: none;
  background-color: white;
  padding-left: 20px;
  transition: all ease 200ms;
  border: 2px solid transparent;
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

    &.active{
      visibility: visible;
      opacity: 1;
    }
`;

export const Modal = styled.div`
  width: 400px;
  padding: 30px 20px; 
  background-color: white;
  border-radius: 12px;
  box-shadow: 1px 1px 100px 05px #FFFFFF99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 10px;
`;