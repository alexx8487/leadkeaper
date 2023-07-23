import React, { FC } from "react";
import { PartialSubscription } from "@xxx-shuffle/domain";

import * as Styles from "./EditableSubscriptionData.styles";

export interface EditableSubscriptionFieldsProps {
  subscription: PartialSubscription;
  onSubscriptionChange: (subscription: PartialSubscription) => void;
}

const CURRENT_DATE = new Date(Date.now());

const MIN_DATE = new Date(
  CURRENT_DATE.getFullYear() - 1,
  CURRENT_DATE.getMonth(),
  CURRENT_DATE.getDate()
).valueOf();

const MAX_DATE = new Date(
  CURRENT_DATE.getFullYear() + 1,
  CURRENT_DATE.getMonth(),
  CURRENT_DATE.getDate()
).valueOf();

const EditableSubscriptionFields: FC<EditableSubscriptionFieldsProps> = (
  props
) => {
  const { subscription, onSubscriptionChange } = props;

  const handleLessonCountChange = (value: string) => {
    const number = parseInt(value, 10);

    onSubscriptionChange(
      PartialSubscription.set(
        "lessonCount",
        isNaN(number) ? undefined : number
      )(subscription)
    );
  };

  const handleStartDateChange = (value: number | undefined): void => {
    onSubscriptionChange(
      PartialSubscription.set("startDate", value)(subscription)
    );
  };

  const handleEndDateChange = (value: number | undefined): void => {
    onSubscriptionChange(
      PartialSubscription.set("endDate", value)(subscription)
    );
  };

  return (
    <>
      <Styles.DateField
        label="Start date"
        value={subscription.startDate}
        onValueChange={handleStartDateChange}
        minDate={MIN_DATE}
        maxDate={MAX_DATE}
      />

      <Styles.DateField
        label="End date"
        value={subscription.endDate}
        onValueChange={handleEndDateChange}
      />

      <Styles.TextField
        label="Lessons"
        keyboardType="number-pad"
        value={subscription.lessonCount?.toString()}
        onValueChange={handleLessonCountChange}
      />
    </>
  );
};

export default EditableSubscriptionFields;
