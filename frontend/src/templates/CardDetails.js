import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import withContext from 'hoc/withContext';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import styles from './CardDetails.module.scss';

const CardDetails = ({ content, created, title, twitterName, pageContext }) => {
  const history = useHistory();
  const handleGoBack = () =>
    history.replace(history.location.pathname.split('/').slice(0, -1).join('/'));

  return (
    <div className={styles.wrapper}>
      <Heading big>{title}</Heading>
      <Paragraph content={created} date />
      {pageContext === 'twitters' && (
        <img alt="twitter avatar" src={`https://twitter-avatar.now.sh/${twitterName}`} />
      )}
      <Paragraph content={content} padRight/>
      {pageContext !== 'notes' && (
        <Button asPlainText upperCase>
          open this {pageContext.slice(0, -1)}
        </Button>
      )}
      <div className={styles.closeButton}>
        <Button activeType={pageContext} onClick={handleGoBack} primary upperCase>
          close / save
        </Button>
      </div>
      <Button asPlainText>remove note</Button>
    </div>
  );
};

CardDetails.propTypes = {
  content: PropTypes.string,
  created: PropTypes.string,
  title: PropTypes.string,
  twitterName: PropTypes.string,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
};

CardDetails.defaultProps = {
  content: 'Content',
  created: 'DD-MM-YYYY',
  title: 'Title',
  twitterName: null,
};

const mapStateToProps = (state, props) => {
  const { pageContext, location } = props;
  const cardItem = state[pageContext].filter((item) => item._id === location.state.id);
  const [ item ] = cardItem;
  return { ...item }
};

export default withContext(connect(mapStateToProps)(CardDetails));
