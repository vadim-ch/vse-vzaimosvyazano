import * as React from 'react';
import { Link } from 'react-router';
let styles = require('./style.css');

type Props = {
  children?: any;
  src: string;
  link?: string;
}

type ButtonListProps = {
  children?: any;
  align?: 'center' | 'justify' | 'left' | 'right' | 'start' | 'end';
}

export let Logo = (props: Props) => {
  let link = props.link ? props.link : '/';
  return (
    <div className={styles.logo}>
      <div className={styles.logoText}>
        <Link to={link}>
          <div className={styles.logoUp}>Всё взаимо</div>
          <div className={styles.logoDown}>Связано</div>
        </Link>
      </div>
    </div>
  );
};
