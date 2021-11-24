import styled from 'styled-components';
import UnstyledButton from '../common/button';

export const Form = styled.form`
  display: flex;
  margin: 0 auto;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.color.gray500};
  font-size: ${(props) => props.theme.fontSize.med};
  padding: 4px 0 0 0;
`;

export const Input = styled.input`
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  font-size: ${(props) => props.theme.fontSize.small};
  margin: 0 10px;
  padding: 0 0 0 16px;
  width: 370px;
`;

export const Button = styled(UnstyledButton)`
  margin: 0 auto;
  width: 92px;
`;
