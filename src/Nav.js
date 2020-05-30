import PropTypes from 'prop-types';
import React from 'react';
import css from './Nav.css'

function Nav(props) {
  return (
    <div className={css.root}>
      <button className={css.prev} onClick={props.onPrevious}>&#10094;</button>
      <button className={css.next} onClick={props.onNext}>&#10095;</button>
    </div>
  );
}

Nav.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool,
  hasNext: PropTypes.bool
};

export default Nav;
