import { View, Text, FlatList } from 'react-native'
import { useGetUsersQuery } from '../../store/api/usersApi'
import { ListItem } from '@rneui/themed'

const UserList = ({ navigation }) => {
	const { data, isLoading } = useGetUsersQuery({})
	return (
		<View>
			{isLoading ? <Text>Loading...</Text> : (
				<FlatList data={data} renderItem={({ item }) => (
					<ListItem
						key={item.id}
						onPress={() => { navigation.navigate('UserInfo', { user: item }) }}
					>
						<ListItem.Content>
							<ListItem.Title>{`${item.firstName} ${item.lastName}`}</ListItem.Title>
						</ListItem.Content>
					</ListItem>
				)}>
				</FlatList>
			)}
		</View>
	)
}

export default UserList
