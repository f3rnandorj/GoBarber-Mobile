import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import SelectProvider from './pages/New/SelectProvider';
import SelectDateTime from './pages/New/SelectDateTime';
import Confirm from './pages/New/Confirm';

import { TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Routes() {
  const isSigned = useSelector(state => state.auth.signed);

  function Tabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#7159c1',
          },
          headerTintColor: '#FFF',
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: '#FFF',
          tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.6)',
          tabBarInactiveBackgroundColor: '#8D41A8',
          tabBarActiveBackgroundColor: '#8D41A8',
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: 'Agendamentos',
            tabBarLabel: 'Agendamentos',
            tabBarIcon: () => <Icon name="event" size={20} color="#fff" />,
          }}
        />

        <Tab.Screen
          name="New"
          component={SelectProvider}
          options={({ navigation }) => ({
            title: 'Selecione o prestador',
            tabBarLabel: 'Agendar',
            headerTransparent: true,
            headerTintColor: '#FFF',
            headerLeftContainerStyle: {
              marginLeft: 20,
            },
            tabBarStyle: { display: 'none' },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Dashboard');
                }}
              >
                <Icon name="chevron-left" size={20} color="#FFF" />
              </TouchableOpacity>
            ),

            tabBarIcon: () => (
              <Icon
                name="add-circle-outline"
                size={20}
                color="rgba(255,255,255,0.6)"
              />
            ),
          })}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Agendamentos',
            tabBarLabel: 'Meu perfil',
            tabBarIcon: () => <Icon name="person" size={20} color="#fff" />,
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {isSigned ? (
        <>
          <Stack.Navigator>
            <Stack.Screen
              name="Tabs"
              component={Tabs}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="SelectDateTime"
              component={SelectDateTime}
              options={({ navigation }) => ({
                title: 'Selecione o hor??rio',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: {
                  backgroundColor: '#7159c1',
                },
                headerTintColor: '#FFF',
                headerTransparent: true,
                headerLeftContainerStyle: {
                  marginLeft: 20,
                },
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.goBack();
                    }}
                  >
                    <Icon name="chevron-left" size={20} color="#FFF" />
                  </TouchableOpacity>
                ),
              })}
            />

            <Stack.Screen
              name="Confirm"
              component={Confirm}
              options={({ navigation }) => ({
                title: 'Confirmar agendamento',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: {
                  backgroundColor: '#7159c1',
                },
                headerTintColor: '#FFF',
                headerTransparent: true,
                headerLeftContainerStyle: {
                  marginLeft: 20,
                },
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.goBack();
                    }}
                  >
                    <Icon name="chevron-left" size={20} color="#FFF" />
                  </TouchableOpacity>
                ),
              })}
            />
          </Stack.Navigator>
        </>
      ) : (
        <>
          <Stack.Navigator>
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{
                title: 'Fa??a seu login',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: {
                  backgroundColor: '#7159c1',
                },
                headerTintColor: '#FFF',
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{
                title: 'SignUp Page',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: {
                  backgroundColor: '#7159c1',
                },
                headerTintColor: '#FFF',
              }}
            />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
}

export default Routes;
