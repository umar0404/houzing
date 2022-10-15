import styled from "styled-components";
import { ReactComponent as facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as email } from "../../assets/icons/email.svg";
import { ReactComponent as phone } from "../../assets/icons/phone.svg";
import { ReactComponent as location } from "../../assets/icons/location.svg";
import { ReactComponent as instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as twitter } from "../../assets/icons/twitter.svg";

const Container = styled.div`
  height: 417px;
  background: #0d263b;
  display: flex;
  margin: auto;
  position: relative;
  width: 100%;
  justify-content: space-around;
  margin-top: 96px;
  padding: 48px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 235px;
  width: 100%;
`;

Content.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 32px;
`;

Content.Item = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`;

const Icon = styled.div``;

Icon.Email = styled(email)`
  /* width: 24px; */
  margin-right: 21px;
`;

Icon.Phone = styled(phone)`
  margin-right: 21px;
  & path {
    fill: white;
  }
`;

const Divider = styled.div`
  background: #e6e9ec;
  height: 1px;
  width: 100%;
`;

Icon.Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

Icon.Location = styled(location)`
  margin-right: 21px;
  width: 18px !important;
  height: 18px !important;
  & path {
    fill: white;
  }
`;

Icon.Fcebook = styled(facebook)``;

Icon.Instagram = styled(instagram)``;

Icon.Linkedin = styled(linkedin)``;

Icon.Twitter = styled(twitter)``;

export { Container, Content, Icon, Divider };
