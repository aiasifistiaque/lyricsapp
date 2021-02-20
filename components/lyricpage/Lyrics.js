import React from 'react';
import { View } from 'react-native';
import useLyric from '../../hooks/useLyric';
import Loading from '../Loading';
import { BlackText } from '..';
import { ScrollView } from 'react-native-gesture-handler';

export default function Lyrics({ id }) {
	const { lyric, loading } = useLyric(id);
	if (loading) return <Loading />;
	else
		return (
			<ScrollView
				style={{ paddingHorizontal: '10%', marginVertical: 10, flex: 1 }}>
				<BlackText>{lyric.lyrics_body}</BlackText>
			</ScrollView>
		);
}
