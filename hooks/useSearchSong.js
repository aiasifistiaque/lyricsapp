import React, { useEffect, useState } from 'react';
import { searchUrl, searchKey } from '../constants';

export default function useSearchSong(query) {
	const [songList, setSongList] = useState([]);
	const [loading, setLoading] = useState();

	useEffect(() => {
		setLoading(true);
		fetch(searchUrl + query + searchKey)
			.then(res => res.json())
			.then(res => {
				setSongList(() => res.message.body.track_list);
				setLoading(false);
			})
			.catch(e => console.log(e));
	}, [query]);

	return { songList, loading };
}
