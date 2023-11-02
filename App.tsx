import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@rneui/base';
import { Provider } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { store } from './src/store/store';
import UserList from './src/screens/UserList/UserList';
import { UserForm } from './src/screens/UserForm/UserForm';
import { ToastProvider } from 'react-native-toast-notifications'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ToastProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="UserList" component={UserList} options={{ title: 'User list' }} />
            <Tab.Screen name="UserForm" component={UserForm} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </ToastProvider>
  );
}
