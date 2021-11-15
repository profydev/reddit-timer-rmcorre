import React from 'react';
import * as S from './Info.style';

const Info = () => (
  <S.Container>
    <S.Heading id="how-it-works">How it works</S.Heading>
    <S.List>
      <S.ListItem>
        <S.Span>
          We find the 500 top posts from the past year for a subreddit.
        </S.Span>
      </S.ListItem>
      <S.ListItem>
        <S.Span>
          The data is visualized in a heatmap grouped by weekday and hour of the
          day.
        </S.Span>
      </S.ListItem>
      <S.ListItem>
        <S.Span>See immediately when to submit your reddit post.</S.Span>
      </S.ListItem>
    </S.List>
    <S.Heading id="about">About</S.Heading>
    <S.Paragraph>
      This app was created during a course on{' '}
      <S.Anchor href="https://profy.dev">profy.dev</S.Anchor> with the goal to
      implement a <br /> pixel-perfect real-world application with professional
      workflows and tools like Kanban, ClickUp, Figma, GitHub, pull requests and
      code reviews.{' '}
      <S.Anchor href="https://profy.dev/employers">
        Click here for more information
      </S.Anchor>
      .
    </S.Paragraph>
  </S.Container>
);

export default Info;
