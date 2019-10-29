import React from 'react';
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
export default class SocialButtons extends React.PureComponent<Props> {
  public render() {
    return (
      <>
        <ButtonRow>
          {this.props.gitHub ? <Button url={this.props.gitHub} /> : null}
          {this.props.youtube ? <Button url={this.props.youtube} /> : null}
        </ButtonRow>
      </>
    );
  }
}
