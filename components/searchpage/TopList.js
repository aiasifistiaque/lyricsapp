import React from 'react';
import { View } from 'react-native';
import { BlackText } from '..';
import ChartListItem from './ChartListItem';
import useTopSongs from '../../hooks/useTopSongs';
import Loading from '../Loading';
import { ScrollView } from 'react-native-gesture-handler';

const TopList = () => {
	const { songList, loading } = useTopSongs() || [];
	return (
		<View style={{ alignItems: 'center', width: '100%' }}>
			<BlackText mv={5}>Top List</BlackText>
			<ScrollView>
				<View style={{ alignItems: 'center' }}>
					{!loading ? (
						songList.map((item, i) => (
							<ChartListItem item={item.track} key={i} />
						))
					) : (
						<Loading />
					)}
				</View>
			</ScrollView>
		</View>
	);
};

export default TopList;
