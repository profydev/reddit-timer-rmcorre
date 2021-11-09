import styled, { css } from 'styled-components';
import { Link as UnstyledLink } from 'react-router-dom';
import { ReactComponent as UnstyledIcon } from './redditTimerIcon.svg';

export const Container = styled.footer`
  display: flex;
  width: 100%;
  max-width: 980px;
  height: 100px;
  margin: auto;
  padding: 0 20px;
  align-items: center;
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
  margin: auto;
`;

export const Link = styled(UnstyledLink)`
  ${linkStyles};
  text-align: right;
`;
