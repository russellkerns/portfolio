import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface TechProps {
  techName: string;
}

const TextBorder: any = styled.div`
  border: solid
    ${(props: any) => (props.color ? props.theme.colors.blue.light : null)};
  border-radius: 6px;
  width: auto;
  padding: 0 0.5rem 0 0.5rem;
  height: 2rem;
  text-align: center;
  margin: 0 0.5rem 0.2rem 0;
`;

const TechWidget: FunctionComponent<TechProps> = ({ techName }) => (
  <TextBorder color="true">
    <p>{techName}</p>
  </TextBorder>
);

export default TechWidget;
