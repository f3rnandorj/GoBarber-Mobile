import React from 'react';

import Background from '~/components/Background';
import Input from '~/components/Input';
import Button from '~/components/Button';

import { Text } from 'react-native';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <Background>
      <Text>Sign in</Text>
      <Input
        style={{ marginTop: 30 }}
        icon="call"
        placeholder="Digite seu nome"
      />
      <Button>Entrar</Button>
    </Background>
  );
}
