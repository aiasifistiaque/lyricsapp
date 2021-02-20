import React, { useState } from 'react';
import { View, ImageBackground } from 'react-native';
import { gStyles } from '../styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../components/searchpage/Logo';
import SearchBar from '../components/searchpage/SearchBar';
import TopList from '../components/searchpage/TopList';
import SearchList from '../components/searchpage/SearchList';

export default function SearchPage() {
	const [search, setSearch] = useState('');
	return (
		<View style={gStyles.container}>
			<ImageBackground
				source={require('../assets/searchbackground.jpg')}
				style={gStyles.bgImage}>
				<SafeAreaView style={{ alignItems: 'center', flex: 1 }}>
					<Logo />
					<SearchBar search={search} setSearch={text => setSearch(text)} />
					{search.length < 1 ? <TopList /> : <SearchList search={search} />}
				</SafeAreaView>
			</ImageBackground>
		</View>
	);
}
