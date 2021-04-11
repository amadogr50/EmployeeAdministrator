import React, {useRef, useState} from 'react';
import ListItem from './list-item';
import styled, {useTheme} from 'styled-components/native';
import Input from './input';
import ConfirmationDialog from './confirmation-dialog';
import DatePicker from 'react-native-date-picker';

const Content = styled.TouchableOpacity`
  padding: ${({theme}) => theme.spacing.s};
`;

const DateInput = ({
  date: initialDate,
  style,
  label,
  onChangeDate,
  onPress,
  error,
}) => {
  const theme = useTheme();
  const [value, setValue] = useState();
  const [date, setDate] = useState(initialDate || new Date());
  const dialog = useRef();

  const onCancel = () => {};

  const onConfirm = () => {
    setValue(`${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`);
    if (onChangeDate) {
      onChangeDate(date);
    }
  };

  const _onPress = () => {
    if (onPress) {
      onPress();
    }
    dialog.current.showDialog();
  };

  return (
    <>
      <ListItem style={style} color={theme.colors.error}>
        <Content onPress={_onPress}>
          <Input
            iconName="calendar"
            label={label}
            labelColor={theme.colors.error}
            placeholder="Ingrese Fecha"
            value={value}
            isTextInput={false}
            error={error}
          />
        </Content>
      </ListItem>
      <ConfirmationDialog
        ref={dialog}
        onCancel={onCancel}
        onConfirm={onConfirm}
        title="Escoge una fecha">
        <DatePicker date={date} onDateChange={setDate} mode="date" />
      </ConfirmationDialog>
    </>
  );
};

export default DateInput;
