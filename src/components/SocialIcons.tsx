import React from 'react';
import styled from 'styled-components';
import { Button } from './SocialButtons';

const ButtonRow: any = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  children?: any;
}
export class SocialIcons extends React.PureComponent<Props> {
  public render() {
    return (
      <>
        <ButtonRow>
          <Button url="https://www.linkedin.com/in/russell-kerns/" style={{ marginBottom: '20px' }} />
          <Button url="https://github.com/russellkerns" />
        </ButtonRow>
      </>
    );
  }
}
