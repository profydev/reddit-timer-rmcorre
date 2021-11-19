import styled, { css } from 'styled-components';
import { Link as UnstyledLink } from 'react-router-dom';
import { HashLink as UnstyledHashLink } from 'react-router-hash-link';
import { ReactComponent as UnstyledLogo } from './logo.svg';
import breakpoint from '../breakpoints';

const linkStyles = css`
  color: ${(props) => props.theme.color.gray700};
  margin: 0 0 0 26px;
  text-decoration: none;
`;

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  margin: 0 auto 20.8px;
  max-width: 1280px;

  @media ${breakpoint.device.sm} {
    flex-direction: column;
    padding: 20px 0 0 0;
  } ;
`;

export const Logo = styled(UnstyledLogo)`
  display: flex;
`;

export const Nav = styled.nav`
  padding: 6px 0 0 0;
`;

export const Link = styled(UnstyledLink)`
  ${linkStyles};
  @media ${breakpoint.device.sm} {
    margin-left: 0;
  }
`;

export const HashLink = styled(UnstyledHashLink)`
  ${linkStyles};
`;
