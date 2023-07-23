import React, { FC } from "react";

import * as Styles from "./InfoBlock.styles";

interface InfoBlockProps {
  title?: string;
}

const InfoBlock: FC<InfoBlockProps> = (props) => {
  const { title, children } = props;

  return (
    <Styles.Box>
      {title && <Styles.Title>{title}</Styles.Title>}

      {children}
    </Styles.Box>
  );
};

export default InfoBlock;
