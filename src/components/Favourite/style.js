import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 20px;

  padding: var(--padding);
  max-width: 1440px;
  margin: auto;
  margin-top: 50px;
  width: 100%;
`;

export { Container };