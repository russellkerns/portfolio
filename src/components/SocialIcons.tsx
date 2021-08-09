import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Button } from './SocialButtons';

const ButtonRow: any = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  children?: any;
}
export const SocialIcons: FunctionComponent<Props> = () => (
  <>
    <ButtonRow>
      <Button
        url="https://www.linkedin.com/in/russell-kerns/"
        style={{ marginBottom: '20px' }}
      />
      <Button url="https://github.com/russellkerns" />
    </ButtonRow>
  </>
);
