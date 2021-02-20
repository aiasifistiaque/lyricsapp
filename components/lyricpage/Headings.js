import React from 'react';
import { View } from 'react-native';
import { PinkText, BlackText } from '..';

export default function Headings({ song }) {
	return (
		<View
			style={{
				paddingVertical: 10,
				alignItems: 'center',
				paddingHorizontal: 20,
			}}>
			<BlackText size={22}>{song.track_name}</BlackText>
			<BlackText mv={2} size={14}>
				{song.album_name}
			</BlackText>
			<PinkText>{song.artist_name}</PinkText>
		</View>
	);
}
