import styled from 'styled-components';
import { Link as UnstyledLink } from 'react-router-dom';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20.8px 0 0 0;
  text-align: center;
`;

export const SubTitle = styled.p`
  margin: 20px 0 0 0;
  text-align: center;
`;

export const Button = styled(UnstyledLink)`
  color: ${(props) => props.theme.color.white};
  background-color: #fdb755;
  border: none;
  border-radius: 4px;
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: 500;
  height: 36px;
  line-height: 36px;
  margin: 45px auto 0;
  text-align: center;
  text-decoration: none;
  width: 217px;
`;

export const SubReddit = styled.p`
  font-weight: 500;
  line-height: 19.5px;
  margin: 0;
  padding: 0 2px 1px 0;
  text-align: center;
`;

export const Link = styled(UnstyledLink)`
  margin: 36px 0 0 0;
  text-decoration: none;
`;

// display: block removes the space on the bottom of the image
export const Table = styled.img`
  height auto;
  max-width: 1114px;
  width: 100%;
`;
