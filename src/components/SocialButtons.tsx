import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

const ButtonRow: any = styled.div`
  display: flex;
  margin-left: 1rem;
  justify-content: space-between;
  width: 7rem;
`;

export const Button = styled(SocialIcon)`
  &:hover {
    transform: scale(1.1);
  }
`;

interface Props {
  children?: any;
  gitHub?: string;
  youtube?: string;
}

export const SocialButtons: FunctionComponent<Props> = ({
  gitHub,
  youtube,
}) => (
  <>
    <ButtonRow>
      {gitHub ? <Button url={gitHub} /> : null}
      {youtube ? <Button url={youtube} /> : null}
    </ButtonRow>
  </>
);

export default SocialButtons;
