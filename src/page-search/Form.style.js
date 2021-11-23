import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin: 0 auto;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.color.gray500};
  font-size: ${(props) => props.theme.fontSize.med};
  padding: 4px 0 0 0;
  margin: 0 10px 0 0;
`;

export const Input = styled.input`
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  margin: 0 10px 0 0;
  width: 370px;
`;

export const Button = styled.button`
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.primary};
  border: none;
  border-radius: 4px;
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: 500;
  height: 36px;
  line-height: 36px;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  width: 92px;
`;
