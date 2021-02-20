//

export const apiKey = '4481fbdd2cbeb544778c7fb9b38337bc';
export const key = '&apikey=4481fbdd2cbeb544778c7fb9b38337bc';
export const url = 'https://api.musixmatch.com/ws/1.1/';
export const charts =
	'chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=4481fbdd2cbeb544778c7fb9b38337bc';

export const topSongChart = url + charts;
export const lyricUrl = url + 'track.lyrics.get?track_id=';

export const searchUrl =
	'http://api.musixmatch.com/ws/1.1/track.search?q_track_artist=';

export const searchKey =
	'&page_size=10&page=1&s_track_rating=desc%20Response&apikey=' + apiKey;
