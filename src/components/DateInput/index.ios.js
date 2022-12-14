import React, { useState, useMemo } from 'react';
import DatePickerIOS from 'react-native';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, DateText, Picker } from './styles';

export function DateInput({ date }) {
  const [opened, setOpened] = useState(false);

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date],
  );

  return (
    <Container>
      <DateButton onPress={() => setOpened(!opened)}>
        <Icon name="event" color="#fff" size={20} />
        <DateText>{dateFormatted}</DateText>

        {opened && (
          <Picker>
            <DatePickerIOS
              date={date}
              onDataChange={onChange}
              dateFormat="dd 'de' MMMM 'de' yyyy"
              minimumDate={new Date()}
              minuteInterval={60}
              mode="data"
              locale="pt"
            />
          </Picker>
        )}
      </DateButton>
    </Container>
  );
}
