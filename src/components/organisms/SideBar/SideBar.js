import React from 'react';
import PropTypes from 'prop-types';
import ButtonLinkIcon from 'components/atoms/ButtonLinkIcon/ButtonLinkIcon';
import ArticleIcon from 'assets/icons/article.svg';
import NoteIcon from 'assets/icons/note.svg';
import TwitterIcon from 'assets/icons/twitter.svg';
import LogoutIcon from 'assets/icons/logout.svg';
import Logo from 'components/atoms/Logo/Logo';
import styles from './SideBar.module.scss';

const SideBar = ({ type }) => {
  const activeType = styles[type];

  return (
    <div className={`${styles.wrapper} ${activeType}`}>
      <Logo exact to="/" />
      <div className={styles.icons}>
        <ButtonLinkIcon exact to="/" icon={NoteIcon} />
        <ButtonLinkIcon to="/twitters" icon={TwitterIcon} />
        <ButtonLinkIcon to="/articles" icon={ArticleIcon} />
      </div>
      <ButtonLinkIcon logout to="/" icon={LogoutIcon} />
    </div>
  );
};

SideBar.propTypes = {
  type: PropTypes.string,
};

SideBar.defaultProps = {
  type: 'twitter',
};

export default SideBar;
