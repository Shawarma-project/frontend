import React from 'react';
import { useStyles } from '../styles';

export default function Logo(props) {
    const styles = useStyles();
    return (
      <img
        src="/imagens/shawarma.png"
        alt="shawarma"
        className={props.large ? styles.largeLogo : styles.logo}
      ></img>
    );
  }