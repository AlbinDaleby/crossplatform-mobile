import { View } from 'react-native'
import { Button, Text } from "@rneui/themed"
import { logIn } from '../../store/slices/authSlice'
import { useDispatch, useSelector } from 'react-redux'

export const UserInfo = ({ route }) => {
	const user = route?.params?.user
	
	const dispatch = useDispatch()
	const loggedInAs = useSelector((state: any) => state.auth.loggedInAs)

	return (
		<View>
			<Text>{`${user?.firstName} ${user?.lastName}`}</Text>
			<Button onPress={() => dispatch(logIn(user))}>Logga in</Button>
			<Text>Inloggad som: {loggedInAs?.firstName}</Text>	
		</View>	
	)
}