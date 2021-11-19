import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 738px;
  margin: 0 auto;
`;

export const Article = styled.article`
  &:first-child {
    margin: 0 0 109px 0;
  }
`;

export const Heading = styled.h2`
  text-align: left;
`;

export const UL = styled.ul`
  line-height: 1.6875;
  margin: 8.9px 0 0 13px;
  padding: 0;
`;

export const LI = styled.li`
  font-size: 7.8px;
`;

export const Span = styled.span`
  position: relative;
  font-size: ${(props) => props.theme.fontSize.default};
  left: -4px;
  vertical-align: middle;
`;

export const P = styled.p`
  margin: 10px 0 0 0;
`;

export const A = styled.a`
  text-decoration: none;
`;
