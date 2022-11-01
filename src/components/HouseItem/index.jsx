import { Checkbox } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Input, Button } from "../Generic";
import Recent from "../Recent";
import nouser from "../../assets/img/noimg.jpeg";

import {
  Container,
  Content,
  Section,
  Icons,
  Details,
  Description,
  Wrapper,
  User,
} from "./style";
import Yandex from "../Generic/YandexMap";

export const HouseItem = () => {
  const [data, setDate] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://houzing-app.herokuapp.com/api/v1/houses/id/${params?.id}`)
      .then((res) => res.json())
      .then((res) => {
        setDate(res?.data);
        window.scrollTo(0, 0);
      });
  }, [params?.id]);

  console.log(data, "data");

  return (
    <React.Fragment>
      <Wrapper>
        <Container flex={3}>
          <Section>
            <div>
              <Content.Title large>{data?.name}</Content.Title>
              <div className="info">
                {data?.city}, {data?.addrerss}, {data?.country}
              </div>
            </div>
            <Content flex>
              <Icons.Share />
              <Icons.Title>Share</Icons.Title>
              <Icons.Love />
              <Icons.Title>Save</Icons.Title>
            </Content>
          </Section>
          <Section>
            <Details>
              <Icons.Bed />
              <Details.Title>Bed {data?.houseDetails?.beds || 0}</Details.Title>
              <Icons.Bath />
              <Details.Title>
                Bath {data?.houseDetails?.bath || 0}
              </Details.Title>
              <Icons.Garage />
              <Details.Title>
                Garage {data?.houseDetails?.garage || 0}
              </Details.Title>
              <Icons.Ruler />
              <Details.Title>
                Ruler {data?.houseDetails?.area || 0}kv
              </Details.Title>
            </Details>
            <Content>
              <Content flex>
                <del>
                  <Details.Title> ${data?.price || 0}/mo</Details.Title>
                </del>
                <h2 className="title">${data?.salePrice || 0}/mo</h2>
              </Content>
              <div style={{ textAlign: "end" }} className="info">
                {data?.user?.firstname}
              </div>
            </Content>
          </Section>
          <Content.Title>Description</Content.Title>
          <Description>{data?.description}</Description>
          <Content.Title>Feature</Content.Title>
          <Section>
            <Container gap={25}>
              <Content flex>
                <Icons.AirConditioner />
                <Details.Title>
                  Air Conditioning {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Barbecue />
                <Details.Title>
                  Barbeque {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Dryer />
                <Details.Title>
                  Dryer {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Dumbbell />
                <Details.Title>
                  Gym {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
            </Container>
            <Section>
              <Container gap={25}>
                <Content flex>
                  <Icons.Grass />
                  <Details.Title>
                    Lawn {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Laundry />
                  <Details.Title>
                    Laundry {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Microwave />
                  <Details.Title>
                    Microwave {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Outdoorshower />
                  <Details.Title>
                    Outdoor Shower {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
              </Container>
            </Section>
            <Section>
              <Container gap={25}>
                <Content flex>
                  <Icons.Refrigerator />
                  <Details.Title>
                    Refrigerator {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Sauna />
                  <Details.Title>
                    Sauna {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Swimmer />
                  <Details.Title>
                    Swimming Pool {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Coaxial />
                  <Details.Title>
                    TV Cable {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
              </Container>
            </Section>
            <Section>
              <Container gap={25}>
                <Content flex>
                  <Icons.LiquidSoap />
                  <Details.Title>
                    Washer {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Wifi />
                  <Details.Title>
                    Wifi {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Blinds />
                  <Details.Title>
                    Window Coverings {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Chair />
                  <Details.Title>
                    Dining room {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
              </Container>
            </Section>
          </Section>
        </Container>
        <Container className="user" flex={0.8}>
          <Section style={{ justifyContent: "flex-start" }}>
            <User.Img src={nouser} />
            <Content>
              <div className="subTitle">Umar Azimov</div>
              <div className="info">998 93 150 42 51</div>
            </Content>
          </Section>
          <Input placeholder="Name" />
          <Input placeholder="Phone" />
          <Input placeholder="Email" />
          <Input placeholder="Message" />
          <Checkbox className="info">
            By submitting this form I agree to Terms of Use
          </Checkbox>
          <Button width={"%"}>Send request</Button>
        </Container>
      </Wrapper>
      <Yandex />
      <Recent />
    </React.Fragment>
  );
};

export default HouseItem;
