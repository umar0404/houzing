import styled, { useTheme } from "styled-components";
import { ReactComponent as share } from "../../assets/icons/share.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";

import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";

import { ReactComponent as airConditioner } from "../../assets/icons/airConditioner.svg";
import { ReactComponent as barbecue } from "../../assets/icons/barbecue.svg";
import { ReactComponent as dryer } from "../../assets/icons/dryer.svg";
import { ReactComponent as dumbbell } from "../../assets/icons/dumbbell.svg";
import { ReactComponent as grass } from "../../assets/icons/grass.svg";
import { ReactComponent as laundry } from "../../assets/icons/laundry.svg";
import { ReactComponent as microwave } from "../../assets/icons/microwave.svg";
import { ReactComponent as outdoorshower } from "../../assets/icons/outdoorshower.svg";
import { ReactComponent as refrigerator } from "../../assets/icons/refrigerator.svg";
import { ReactComponent as sauna } from "../../assets/icons/sauna.svg";
import { ReactComponent as swimmer } from "../../assets/icons/swimmer.svg";
import { ReactComponent as coaxial } from "../../assets/icons/coaxial.svg";
import { ReactComponent as liquidSoap } from "../../assets/icons/liquidSoap.svg";
import { ReactComponent as wifi } from "../../assets/icons/wifi.svg";
import { ReactComponent as blinds } from "../../assets/icons/blinds.svg";
import { ReactComponent as chair } from "../../assets/icons/chair.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ flex }) => flex};
  gap: ${({ gap }) => `${gap}px`};
  ~ .user {
    gap: 24px;
    background: #ffffff;
    border: 1px solid #e6e9ec;
    border-radius: 3px;
    margin-left: 20px;
    padding: 24px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: var(--width);
  padding: var(--padding);
  margin: auto;
  display: flex;
  padding-bottom: 48px;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Content = styled.div`
  display: flex;

  align-items: ${({ flex }) => flex && "center"};
  justify-content: ${({ flex }) => !flex && "center"};
  flex-direction: ${({ flex }) => !flex && "column"};
`;

Content.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: ${({ large }) => (large ? "24px" : "18px")};
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #0d263b;
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0;
`;
Details.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin: 0 24px 0 8px;
`;

const Icons = styled.div``;

Icons.Share = styled(share)`
  display: flex;
  padding: 2px;
  background: #f6f8f9;
  border-radius: 13px;
  width: 35px;
  height: 35px;
  margin: 0 10px 0 26px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

Icons.Love = styled(love)`
  display: flex;
  padding: 2px;
  background: #f6f8f9;
  border-radius: 10px;
  width: 35px;
  height: 35px;
  margin: 0 10px 0 26px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

Icons.AirConditioner = styled(airConditioner)`
  padding: 7px;
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

Icons.Barbecue = styled(barbecue)`
  padding: 7px;
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

Icons.Dryer = styled(dryer)`
  padding: 7px;
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

Icons.Dumbbell = styled(dumbbell)`
  padding: 7px;
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

Icons.Grass = styled(grass)`
  padding: 7px;
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

Icons.Laundry = styled(laundry)`
  padding: 7px;
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

Icons.Microwave = styled(microwave)`
  padding: 7px;
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

Icons.Outdoorshower = styled(outdoorshower)`
  padding: 7px;
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

Icons.Refrigerator = styled(refrigerator)`
  padding: 7px;
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

Icons.Sauna = styled(sauna)`
  padding: 7px;
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

Icons.Swimmer = styled(swimmer)`
  padding: 7px;
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

Icons.Coaxial = styled(coaxial)`
  padding: 7px;
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

Icons.LiquidSoap = styled(liquidSoap)`
  padding: 7px;
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

Icons.Wifi = styled(wifi)`
  padding: 7px;
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

Icons.Blinds = styled(blinds)`
  padding: 7px;
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

Icons.Chair = styled(chair)`
  padding: 7px;
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

Icons.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  display: flex;
`;

Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(car)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)``;

const Description = styled.div`
  margin-top: 16px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
  margin-bottom: 48px;
`;

const User = styled.div``;

User.Img = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  margin-right: 10px;
`;

export {
  Container,
  Content,
  Section,
  Icons,
  Details,
  Description,
  Wrapper,
  User,
};
