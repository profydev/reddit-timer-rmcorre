import styled from 'styled-components';
import { Link as UnstyledLink } from 'react-router-dom';
import { ReactComponent as UnstyledIcon } from './redditTimerIcon.svg';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  height: 100px;
  margin: auto;
  padding: 250px;
`;

export const Anchor = styled.a`
  color: ${(props) => props.theme.color.gray700};
  font-size: 0.875rem;
  text-decoration: none;
`;

export const Icon = styled(UnstyledIcon)`
  display: flex;
`;

export const Link = styled(UnstyledLink)`
  color: ${(props) => props.theme.color.gray700};
  font-size: 0.875rem;
  text-decoration: none;
`;
