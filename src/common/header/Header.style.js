import styled, { css } from 'styled-components';
import { Link as UnstyledLink } from 'react-router-dom';
import { HashLink as UnstyledHashLink } from 'react-router-hash-link';
import { ReactComponent as UnstyledLogo } from './logo.svg';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  margin: 0 auto;
  padding: 0 80px;
`;

export const Logo = styled(UnstyledLogo)`
  display: flex;
`;

const linkStyles = css`
  color: ${(props) => props.theme.color.gray700};
  margin-left: 26px;
  text-decoration: none;
`;

export const Link = styled(UnstyledLink)`
  ${linkStyles};
`;

export const HashLink = styled(UnstyledHashLink)`
  ${linkStyles};
`;
