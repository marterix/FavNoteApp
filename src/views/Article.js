import React from 'react';
import CardSection from 'templates/CardSection';
import Card from 'components/molecules/Card/Card';

const articles = [
  {
    id: 1,
    title: 'React on my mind',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    articleUrl: 'https://youtube.com',
    created: '1 day',
  },
  {
    id: 2,
    title: 'Live React',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    articleUrl: 'https://youtube.com',
    created: '3 days',
  },
  {
    id: 3,
    title: 'You do not know JS',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    articleUrl: 'https://youtube.com',
    created: '12 days',
  },
  {
    id: 4,
    title: 'Cool vibes',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    articleUrl: 'https://youtube.com',
    created: '13 days',
  },
  {
    id: 5,
    title: 'Winter is coming',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    articleUrl: 'https://youtube.com',
    created: '15 days',
  },
];

const Article = () => (
  <CardSection type="article">
    {articles.map(({ articleUrl, content, created, id, title }) => (
      <Card
        id={id}
        type="article"
        title={title}
        content={content}
        articleUrl={articleUrl}
        created={created}
        key={id}
      />
    ))}
  </CardSection>
);
export default Article;
