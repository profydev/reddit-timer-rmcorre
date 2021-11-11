import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Title = styled.div`
  width: 100%;
  color: ${(props) => props.theme.color.black};
  font-family: ${(props) => props.theme.fontFamily.headline};
  font-size: ${(props) => props.theme.fontSize.title};
  font-weight: 400;
  line-height: ${(props) => props.theme.lineHeight.headline};
  padding: 0 4px 0 0;
  text-align: center;
`;
