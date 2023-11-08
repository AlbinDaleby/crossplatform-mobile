import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useSelector } from 'react-redux'
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

const NavigationWrapper = () => {
  const loggedInAs = useSelector((state: any) => state.auth.loggedInAs) 

  return (
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="UserListStack" component={UserListStackScreen} options={{ headerShown: false }} />
          <Tab.Screen name="UserForm" component={UserForm} />
          {loggedInAs && (
            <Tab.Screen name="UserInfo" component={UserInfo} options={{ title: `${loggedInAs.firstName} ${loggedInAs.lastName}`}} />
          )}
        </Tab.Navigator>
      </NavigationContainer>
  )
}

export default function App() {
  return (
    <ToastProvider>
      <Provider store={store}>
        <NavigationWrapper />
      </Provider>
    </ToastProvider>
  );
}
