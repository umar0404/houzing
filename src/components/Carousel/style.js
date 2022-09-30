import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
  position: relative;
  height: 571px;
  /* border: 1px solid red; */
`;

const Arrow = styled(arrow)`
  position: absolute;
  top: 50%;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  padding: 18px;
  background: rgba(255, 255, 255, 0.2);
  transform: ${({ left }) => (!left ? "rotate(90deg)" : "rotate(-90deg)")};
  left: ${({ left }) => !left && "20px"};
  right: ${({ left }) => left && "20px"};
  cursor: pointer;
  :hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 571px;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export { Container, Arrow, Img, Blur };
