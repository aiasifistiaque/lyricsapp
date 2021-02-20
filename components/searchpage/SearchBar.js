import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({ search, setSearch }) => {
	return (
		<View
			style={{
				backgroundColor: '#EBE7E7',
				width: '90%',
				marginVertical: 10,
				borderRadius: 100,
				paddingHorizontal: 20,
				height: 40,
			}}>
			<TextInput
				placeholder='Search'
				style={{ flex: 1 }}
				value={search}
				onChangeText={text => setSearch(text)}
			/>
		</View>
	);
};

export default SearchBar;
