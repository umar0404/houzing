import React from "react";
import { Container, Content, Icon } from "./style";

export const Why = () => {
  return (
    <Container>
      <Content>
        <Content.Title>Contact Us</Content.Title>
        <Content.Item>
          <Icon.Location />
          Mirzo Ulug'bek ko'chasi, 60-dom, 11-xonadon
        </Content.Item>
        <Content.Item>
          <Icon.Phone />
          998 93 150 42 51
        </Content.Item>
        <Content.Item>
          <Icon.Email />
          azimovarjon@gmail.com
        </Content.Item>
        <Icon.Footer>
          <Icon.Fcebook />
          <Icon.Twitter />
          <Icon.Instagram />
          <Icon.Linkedin />
        </Icon.Footer>
      </Content>
      <Content>
        <Content.Title>Discover</Content.Title>
        <Content.Item>Uzbekistan</Content.Item>
        <Content.Item>Korea</Content.Item>
        <Content.Item>Canada</Content.Item>
        <Content.Item>America</Content.Item>
      </Content>
      <Content>
        <Content.Title>Lists by Category</Content.Title>
        <Content.Item>Apartments</Content.Item>
        <Content.Item>Condos</Content.Item>
        <Content.Item>Houses</Content.Item>
        <Content.Item>Offices</Content.Item>
        <Content.Item>Retail</Content.Item>
      </Content>
      <Content>
        <Content.Title>Lists by Category</Content.Title>
        <Content.Item>About Us</Content.Item>
        <Content.Item>Terms & Conditions</Content.Item>
        <Content.Item>Support Center</Content.Item>
        <Content.Item>Contact Us</Content.Item>
      </Content>
    </Container>
  );
};

export default Why;
