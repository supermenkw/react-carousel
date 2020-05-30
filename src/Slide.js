import PropTypes from 'prop-types';
import React from 'react';
import css from './Slide.css';

function Slide(props) {
  return (
    <article className={css.root} style={props.style}>
      <img src={props.image} alt={props.title} />
      <footer className={css.footer}>
        <h2 className={css.title}>{props.title}</h2>
        <div>{props.children}</div>
      </footer>
    </article>
  );
}

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  style: PropTypes.object,
  title: PropTypes.string
};

export default Slide;
