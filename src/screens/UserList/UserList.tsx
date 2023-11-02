import { View, Text } from 'react-native'
import { useGetUsersQuery } from '../../store/api/usersApi'
import { ListItem } from '@rneui/themed'

const UserList = () => {
	const { data, isLoading } = useGetUsersQuery({})
	console.log('data: ', data)	
	return (
		<View>
			{isLoading ? <Text>Loading...</Text> : (
				<View>
					{data.map((user) => (
						<ListItem>
							<ListItem.Content>
								<ListItem.Title>{`${user.firstName} ${user.lastName}`}</ListItem.Title>
							</ListItem.Content>
						</ListItem>
					))}
				</View>
			)}
		</View>
	)
}

export default UserList
