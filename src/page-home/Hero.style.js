import styled from 'styled-components';
import { Link as UnstyledLink } from 'react-router-dom';
import UnstyledButton from '../common/button';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 0 129px 0;
`;

export const Title = styled.h1`
  margin: 0 0 20px 0;
  padding: 1px 3.5px 0 0;
`;

export const SubTitle = styled.p`
  margin: 0 0 45px 0;
  text-align: center;
`;

export const Button = styled(UnstyledButton)`
  margin: 0 auto 44px;
  width: 217px;
`;

export const SubReddit = styled.p`
  font-weight: 500;
  line-height: 19.5px;
  margin: 0 0 36px 0;
  padding: 0 2px 1px 0;
  text-align: center;
`;

export const Link = styled(UnstyledLink)`
  text-decoration: none;
`;

// display: block removes the space on the bottom of the image
export const Table = styled.img`
  display: block;
  height auto;
  max-width: 1114px;
  width: 100%;
`;
