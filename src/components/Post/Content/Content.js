// @flow strict
import React from 'react';
import styles from './Content.module.scss';

type Props = {
  body: string,
  title: string,
  hero: string
};

const Content = ({ body, title, hero }: Props) => (
  <div className={styles['content']}>
    <img src={hero} />
    <h1 className={styles['content__title']}>{title}</h1>
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
