import React from 'react';
import { View } from 'react-native';
import { BlackText } from '..';
import ChartListItem from './ChartListItem';
import Loading from '../Loading';
import { ScrollView } from 'react-native-gesture-handler';
import useSearchSong from '../../hooks/useSearchSong';

const SearchList = ({ search }) => {
	const { songList, loading } = useSearchSong(search) || [];
	return (
		<View style={{ alignItems: 'center', width: '100%', flex: 1 }}>
			<BlackText mv={5}>Search Reasult</BlackText>
			<ScrollView>
				<View style={{ alignItems: 'center' }}>
					{!loading ? (
						songList.length > 0 ? (
							songList.map((item, i) => (
								<ChartListItem item={item.track} key={i} />
							))
						) : (
							<BlackText>no results found</BlackText>
						)
					) : (
						<Loading />
					)}
				</View>
			</ScrollView>
		</View>
	);
};

export default SearchList;
