import styled, { css } from 'styled-components';
import { Link as UnstyledLink } from 'react-router-dom';
import { ReactComponent as UnstyledIcon } from './redditTimerIcon.svg';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  height: 100px;
  margin: 0 auto;
  max-width: 980px;
  padding: 0 20px;
`;

const linkStyles = css`
  flex: 1;
  color: ${(props) => props.theme.color.gray700};
  font-size: ${(props) => props.theme.fontSize.small};
  text-decoration: none;
`;

export const Anchor = styled.a`
  ${linkStyles};
  text-align: left;
`;

export const Icon = styled(UnstyledIcon)`
  display: block;
  margin: 0 auto;
`;

export const Link = styled(UnstyledLink)`
  ${linkStyles};
  text-align: right;
`;
