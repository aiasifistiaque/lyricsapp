import React, { useEffect, useState } from 'react';
import { topSongChart } from '../constants';

export default function useTopSongs() {
	const [songList, setSongList] = useState([]);
	const [loading, setLoading] = useState();

	useEffect(() => {
		setLoading(true);
		fetch(topSongChart)
			.then(res => res.json())
			.then(res => {
				setSongList(() => res.message.body.track_list);
				setLoading(false);
			})
			.catch(e => console.log(e));
	}, []);

	return { songList, loading };
}
