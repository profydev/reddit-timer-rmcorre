import styled from 'styled-components';
import { Link as UnstyledLink } from 'react-router-dom';

export const Section = styled.section`
  margin: 20.8px 0 0 0;
`;

export const SubTitle = styled.p`
  width: 100%;
  margin: 20px 0 0 0;
  text-align: center;
`;

export const Link = styled(UnstyledLink)`
  display: block;
  background-color: #fdb755;
  border: none;
  border-radius: 4px;
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: 500;
  height: 36px;
  margin: 45px auto 0;
  padding: 8px 0 0 0;
  text-align: center;
  text-decoration: none;
  width: 217px;
`;
