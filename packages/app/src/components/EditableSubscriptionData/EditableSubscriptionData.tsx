import React, { FC } from "react";
import { PartialSubscription } from "@xxx-shuffle/domain";

import { QRCodeSelect } from "../QRCodeSelect";
import { QRCodeData } from "../../domain";
import EditableSubscriptionFields from "./EditableSubscriptionFields";
import * as Styles from "./EditableSubscriptionData.styles";

export interface EditableSubscriptionDataProps {
  style?: Styles.EditableSubscriptionDataStyleProp;
  subscription: PartialSubscription | undefined;
  onSubscriptionChange: (subscription: PartialSubscription) => void;
}

const EditableSubscriptionData: FC<EditableSubscriptionDataProps> = (props) => {
  const { style, subscription, onSubscriptionChange } = props;

  const handleQRCodeChange = (code: QRCodeData) =>
    onSubscriptionChange(
      subscription
        ? PartialSubscription.set("code", code)(subscription)
        : PartialSubscription.create(code)
    );

  return (
    <Styles.Layout style={style}>
      <QRCodeSelect
        code={subscription?.code}
        onCodeSelect={handleQRCodeChange}
      />

      {subscription && (
        <EditableSubscriptionFields
          subscription={subscription}
          onSubscriptionChange={onSubscriptionChange}
        />
      )}
    </Styles.Layout>
  );
};

export default EditableSubscriptionData;
