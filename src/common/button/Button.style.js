import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button`
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.primary};
  border: none;
  border-radius: 4px;
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: 500;
  height: 36px;
  line-height: 36px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
`;
