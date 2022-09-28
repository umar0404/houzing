import { Dropdown } from "antd";
import React, { useRef } from "react";
import { Button, Input } from "../Generic";
import { Container, Icons, MenuWrapper, Section } from "./style";

export const Filter = () => {
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();
  const sortRef = useRef();
  const sizeRef = useRef();

  const minPriseRef = useRef();
  const maxPriseRef = useRef();

  const menu = (
    <MenuWrapper>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input ref={countryRef} placeholder={"Country"} />
        <Input ref={regionRef} placeholder={"Region"} />
        <Input ref={cityRef} placeholder={"City"} />
        <Input ref={zipRef} placeholder={"Zip Code"} />
      </Section>
      <h1 className="subTitle">Apartment info</h1>
      <Section>
        <Input ref={roomsRef} placeholder={"Rooms"} />
        <Input ref={sizeRef} placeholder={"Size"} />
        <Input ref={sortRef} placeholder={"Sort"} />
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input ref={minPriseRef} placeholder={"Min prise"} />
        <Input ref={maxPriseRef} placeholder={"Max prise"} />
      </Section>
      <h1 className="subTitle">Footer</h1>
      <Section></Section>
    </MenuWrapper>
  );
  return (
    <Container>
      <Input
        icon={<Icons.Houses />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />
      <Dropdown overlay={menu} placement="bottomRight" arrow>
        <div>
          <Button type={"light"}>
            {" "}
            <Icons.Setting /> Advenced
          </Button>
        </div>
      </Dropdown>
      <Button width={"180"}>
        {" "}
        <Icons.Filter /> Search
      </Button>
    </Container>
  );
};

export default Filter;
