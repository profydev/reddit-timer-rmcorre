import styled from 'styled-components';
import { Link as UnstyledLink } from 'react-router-dom';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20.8px 0 0 0;
`;

export const SubTitle = styled.p`
  margin: 20px 0 0 0;
  text-align: center;
`;

export const Link = styled(UnstyledLink)`
  color: ${(props) => props.theme.color.white};
  background-color: #fdb755;
  border: none;
  border-radius: 4px;
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: 500;
  height: 36px;
  margin: 45px auto 0;
  padding: 8px 0 0 0;
  text-align: center;
  text-decoration: none;
  width: 217px;
`;
