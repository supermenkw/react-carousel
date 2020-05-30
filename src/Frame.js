import React from 'react';
import css from './Frame.css';

export default function Frame({ children }) {
  return <div className={css.root}>{children}</div>;
}
