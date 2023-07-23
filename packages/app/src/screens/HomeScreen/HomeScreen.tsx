import React, { FC } from 'react';

import * as Styles from './HomeScreen.styles'

const HomeScreen: FC = () => {
  return (
    <Styles.Container>
      <Styles.Title />

      <Styles.Icon />

      <Styles.Subtitle />
    </Styles.Container>
  );
}

export default HomeScreen;
