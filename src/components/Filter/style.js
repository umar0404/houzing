import styled from "styled-components";
import { ReactComponent as houses } from "../../assets/icons/houses.svg";
import { ReactComponent as filter } from "../../assets/icons/filter.svg";
import { ReactComponent as setting } from "../../assets/icons/setting.svg";

const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
  max-width: 1440px;
  width: 100%;
  margin: auto;
  /* justify-content: center; */
  /* align-items: center; */
`;

const Icons = styled.div``;

Icons.Setting = styled(setting)`
  margin-right: 8px;
`;

Icons.Filter = styled(filter)`
  margin-right: 9.91px;
  color: white;
`;

Icons.Houses = styled(houses)`
  margin-right: 8px;
`;

const MenuWrapper = styled.div`
  padding: 30px;
  background: white;
  border: 1px solid #e6e9ec;
`;

const Section = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export { Container, Icons, MenuWrapper, Section };
