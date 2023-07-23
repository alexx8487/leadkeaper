import React, { FC } from "react";
import { Subscription } from "@xxx-shuffle/domain";

import { ReadonlyField } from "../ReadonlyField";
import { getSubscriptionViewData } from "./utils";
import * as Styles from "./ReadonlySubscriptionData.styles";

export interface ReadonlySubscriptionDataProps {
  style?: Styles.ReadonlySubscriptionDataStyleProp;
  subscription: Subscription;
}

const ReadonlySubscriptionData: FC<ReadonlySubscriptionDataProps> = (props) => {
  const { style, subscription } = props;

  const { expired, text } = getSubscriptionViewData(subscription);

  return (
    <Styles.Layout style={style}>
      <ReadonlyField label="Subscription" error={expired} value={text} />
    </Styles.Layout>
  );
};

export default ReadonlySubscriptionData;
