import styled from 'styled-components';
import { Link as UnstyledLink } from 'react-router-dom';
import { ReactComponent as UnstyledIcon } from './redditTimerIcon.svg';

export const Container = styled.footer`
  display: flex;
  width: 100%;
  height: 100px;
  margin: auto;
  padding: 0 250px;
  justify-content: space-between;
  align-items: center;
`;

export const Anchor = styled.a`
  color: ${(props) => props.theme.color.gray700};
  font-size: 14px;
  text-decoration: none;
`;

export const Icon = styled(UnstyledIcon)`
  display: flex;
  margin-left: 45px;
`;

export const Link = styled(UnstyledLink)`
  color: ${(props) => props.theme.color.gray700};
  font-size: 14px;
  text-decoration: none;
`;
