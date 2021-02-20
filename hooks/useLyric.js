import React, { useEffect, useState } from 'react';
import { lyricUrl, key } from '../constants';

export default function useLyric(id) {
	const [lyric, setLyric] = useState([]);
	const [loading, setLoading] = useState();

	useEffect(() => {
		setLoading(true);
		fetch(lyricUrl + id + key)
			.then(res => res.json())
			.then(res => {
				setLyric(() => res.message.body.lyrics);
				setLoading(false);
			})
			.catch(e => console.log(e));
	}, []);

	return { lyric, loading };
}
