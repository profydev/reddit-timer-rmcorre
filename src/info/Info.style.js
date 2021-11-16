import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 129px auto 106px;
  max-width: 738px;
`;

export const Article = styled.article``;

export const Heading = styled.h2`
  padding: 0 0 0 1px;
  text-align: left;
`;

export const UL = styled.ul`
  line-height: 1.6875;
  margin: 8.9px 0 109px 13px;
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
  padding: 0 0 0 2px;
`;

export const A = styled.a`
  text-decoration: none;
`;
