import React from 'react';
import { View, ImageBackground } from 'react-native';
import { gStyles } from '../styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../components/searchpage/Logo';
import Headings from '../components/lyricpage/Headings';
import Lyrics from '../components/lyricpage/Lyrics';
import { BlackText } from '../components';

export default function LyricPage({ route }) {
	const { song } = route.params;
	return (
		<View style={gStyles.container}>
			<ImageBackground
				source={require('../assets/searchbackground.jpg')}
				style={gStyles.bgImage}>
				<SafeAreaView style={{ alignItems: 'center', flex: 1 }}>
					<Logo />
					<Headings song={song} />
					{song.has_lyrics == 0 ? (
						<BlackText>lyrics not available for this song</BlackText>
					) : (
						<Lyrics id={song.track_id} />
					)}
				</SafeAreaView>
			</ImageBackground>
		</View>
	);
}
