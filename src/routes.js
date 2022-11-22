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
          </Stack.Navigator>
        </>
      ) : (
        <>
          <Stack.Navigator>
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{
                title: 'Faça seu login',
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
