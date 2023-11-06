import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { store } from './src/store/store';
import UserList from './src/screens/UserList/UserList';
import { UserForm } from './src/screens/UserForm/UserForm';
import { ToastProvider } from 'react-native-toast-notifications'
import { UserInfo } from './src/screens/UserInfo/UserInfo';

const UserListStack = createNativeStackNavigator()

const UserListStackScreen = () => {
  return (
    <UserListStack.Navigator>
      <UserListStack.Screen name="UserList" component={UserList} />
      <UserListStack.Screen name="UserInfo" component={UserInfo} />
    </UserListStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ToastProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="UserList" component={UserListStackScreen} />
            <Tab.Screen name="UserForm" component={UserForm} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </ToastProvider>
  );
}
