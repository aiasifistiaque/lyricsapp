import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export default function Loading() {
	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				marginVertical: 10,
			}}>
			<ActivityIndicator size={30} color='black' />
		</View>
	);
}
