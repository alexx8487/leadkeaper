import React, { Fragment, FC, ReactNode } from "react";

import * as Styles from "./VList.styles";

export interface VListProps {
  style?: Styles.VListStyleProp;
  children: ReactNode[] | ReactNode;
}

const VList: FC<VListProps> = (props) => {
  const { style, children } = props;

  return (
    <Styles.Layout style={style}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <Fragment key={index}>
              {index !== 0 && <Styles.Separator />}

              {child}
            </Fragment>
          ))
        : children}
    </Styles.Layout>
  );
};

export default VList;
