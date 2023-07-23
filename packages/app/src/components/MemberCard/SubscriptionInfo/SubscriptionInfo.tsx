import React, { FC } from "react";
import { Subscription } from "@xxx-shuffle/domain";
import DateTimePicker from "@react-native-community/datetimepicker";

import { InfoBlock, InfoBlockField } from "../InfoBlock";
import * as Styles from "./SubscriptionInfo.styles";
import { FormInput } from "../../FormInput";

interface SubscriptionInfoProps {
  subscription: Subscription;
  onChange: (data: Subscription.Update) => void;
}

const SubscriptionInfo: FC<SubscriptionInfoProps> = (props) => {
  const { subscription, onChange } = props;

  const handleLessonCountChange = (value: string) => {
    let lessonCount = parseInt(value);

    if (isNaN(lessonCount)) {
      lessonCount = 0;
    }

    onChange({ lessonCount });
  };

  const handleStartDateChange = (date: Date | undefined) => {
    if (date !== undefined) {
      onChange({ startDate: date.valueOf() });
    }
  };

  const handleEndDateChange = (date: Date | undefined) => {
    if (date !== undefined) {
      onChange({ endDate: date.valueOf() });
    }
  };

  return (
    <InfoBlock title="Subscription">
      <InfoBlockField label="Lessons">
        <FormInput
          value={String(subscription.lessonCount)}
          onChangeText={handleLessonCountChange}
          keyboardType="number-pad"
        />
      </InfoBlockField>

      <InfoBlockField label="Start date">
        <DateTimePicker
          value={new Date(subscription.startDate)}
          onChange={(_: any, date?: Date) => handleStartDateChange(date)}
        />
      </InfoBlockField>

      <InfoBlockField label="Expiration date">
        <DateTimePicker
          value={new Date(subscription.endDate)}
          onChange={(_: any, date?: Date) => handleEndDateChange(date)}
        />
      </InfoBlockField>

      {Subscription.isExpired(subscription) && (
        <InfoBlockField>
          <Styles.SubscriptionExpiredText>
            Subscription expired
          </Styles.SubscriptionExpiredText>
        </InfoBlockField>
      )}
    </InfoBlock>
  );
};

export default SubscriptionInfo;
