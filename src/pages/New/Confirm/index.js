import React, { useMemo } from 'react';
import { formatRelative, parseISO } from 'date-fns';

import pt from 'date-fns/locale/pt-BR';
import api from '../../../services/api';

import Background from '~/components/Background';
import { Container, Avatar, Name, Time, SubmitButton } from './styles';

export default function Confirm({ route, navigation }) {
  const { provider } = route.params;
  const { time } = route.params;

  const dateFormatted = useMemo(
    () => formatRelative(parseISO(time), new Date(), { locale: pt }),
    [time],
  );

  async function handleCreateAppointment() {
    await api.post('appointments', {
      provider_id: provider.id,
      date: time,
    });

    navigation.navigate('Dashboard');
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url.replace('localhost', 'coloque seu ip')
              : `https://http2.mlstatic.com/D_NQ_NP_734195-MLB45786548402_052021-O/${provider.name}.jpg`,
          }}
        />
        <Name>{provider.name}</Name>
        <Time>{dateFormatted}</Time>
        <SubmitButton onPress={handleCreateAppointment}>Confirmar</SubmitButton>
      </Container>
    </Background>
  );
}
