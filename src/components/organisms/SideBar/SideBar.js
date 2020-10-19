import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
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
      <Logo />
      <div className={styles.icons}>
        <ButtonIcon as={NavLink} to="/" icon={NoteIcon} />
        <ButtonIcon as={NavLink} to="/twitters" icon={TwitterIcon} />
        <ButtonIcon as={NavLink} to="/articles" icon={ArticleIcon} />
      </div>
      <ButtonIcon as={NavLink} to="/" icon={LogoutIcon} />
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