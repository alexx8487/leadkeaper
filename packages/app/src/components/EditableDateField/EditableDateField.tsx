import React, { FC, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

import * as Styles from "./EditableDateField.styles";
import { formatDate } from "../../utils";

export interface EditableDateFieldProps {
  style?: Styles.EditableDateFieldStyleProp;
  label: string;
  value: number | undefined;
  onValueChange: (value: number | undefined) => void;
  minDate?: number;
  maxDate?: number;
}

const EditableDateField: FC<EditableDateFieldProps> = (props) => {
  const { style, label, value, onValueChange, minDate, maxDate } = props;

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const toggleDatePicker = () => setIsDatePickerOpen((isOpen) => !isOpen);

  const handleDateChange = (_: any, date?: Date): void => {
    onValueChange(date?.valueOf());
  };

  return (
    <Styles.Layout style={style}>
      <Styles.Box onPress={toggleDatePicker}>
        <Styles.Label>{label}</Styles.Label>

        <Styles.Value filled={value !== undefined}>
          {value !== undefined ? formatDate(value) : "DD.MM.YYYY"}
        </Styles.Value>
      </Styles.Box>

      {isDatePickerOpen && (
        <Styles.Input
          display="spinner"
          value={new Date(value ?? Date.now())}
          onChange={handleDateChange}
          minimumDate={minDate !== undefined ? new Date(minDate) : undefined}
          maximumDate={maxDate !== undefined ? new Date(maxDate) : undefined}
          // @ts-ignore
          themeVariant="light"
        />
      )}
    </Styles.Layout>
  );
};

export default EditableDateField;
