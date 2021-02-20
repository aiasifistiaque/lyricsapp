import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BlackText } from '..';
import { useNavigation } from '@react-navigation/native';

const ChartListItem = ({ item }) => {
	const navigation = useNavigation();
	return (
		<View
			style={{
				width: '95%',
				marginVertical: 5,
			}}>
			<TouchableOpacity
				onPress={() => navigation.navigate('Lyrics', { song: item })}
				style={{
					backgroundColor: 'rgba(200, 177, 225,.37)',
					paddingHorizontal: 20,
					paddingVertical: 10,
					borderRadius: 8,
				}}>
				<BlackText>
					{item.track_name} by {item.artist_name}
				</BlackText>
			</TouchableOpacity>
		</View>
	);
};

export default ChartListItem;
