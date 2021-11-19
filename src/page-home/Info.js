import React from 'react';
import * as S from './Info.style';

const Info = () => (
  <S.Section>
    <S.Article>
      <S.Heading id="how-it-works">How it works</S.Heading>
      <S.UL>
        <S.LI>
          <S.Span>
            We find the 500 top posts from the past year for a subreddit.
          </S.Span>
        </S.LI>
        <S.LI>
          <S.Span>
            The data is visualized in a heatmap grouped by weekday and hour of
            the day.
          </S.Span>
        </S.LI>
        <S.LI>
          <S.Span>See immediately when to submit your reddit post.</S.Span>
        </S.LI>
      </S.UL>
    </S.Article>

    <S.Article>
      <S.Heading id="about">About</S.Heading>
      <S.P>
        This app was created during a course on{' '}
        <S.A href="https://profy.dev">profy.dev</S.A> with the goal to implement
        a <br /> pixel-perfect real-world application with professional
        workflows and tools like Kanban, ClickUp, Figma, GitHub, pull requests
        and code reviews.{' '}
        <S.A href="https://profy.dev/employers">
          Click here for more information
        </S.A>
        .
      </S.P>
    </S.Article>
  </S.Section>
);

export default Info;
