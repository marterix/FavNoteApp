import React from 'react';
import CardSection from 'templates/CardSection';
import Card from 'components/molecules/Card/Card';

const twitters = [
  {
    id: 1,
    title: 'React on my mind',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    twitterName: 'dan_abramov',
    created: '1 day',
  },
  {
    id: 2,
    title: 'Live React',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    twitterName: 'kentcdodds',
    created: '3 days',
  },
  {
    id: 3,
    title: 'You do not know JS',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    twitterName: 'ryanflorence',
    created: '12 days',
  },
  {
    id: 4,
    title: 'Cool vibes',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    twitterName: 'mjackson',
    created: '13 days',
  },
  {
    id: 5,
    title: 'Winter is coming',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    twitterName: 'cassidoo',
    created: '15 days',
  },
];

const Twitter = () => (
  <CardSection type="twitter">
    {twitters.map(({ content, created, id, title, twitterName }) => (
      <Card
        id={id}
        type="twitter"
        title={title}
        twitterName={twitterName}
        created={created}
        content={content}
        key={id}
      />
    ))}
  </CardSection>
);

export default Twitter;
