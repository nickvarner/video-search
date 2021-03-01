import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';
//google api key which is restricted to localhost
const KEY = 'AIzaSyCZ6PL2jtA1Me_Y-zbTzHk4zxZjXXiT910';

const useVideos = (defaultSearchTerm) => {
	const [
		videos,
		setVideos
	] = useState([]);
	useEffect(
		() => {
			search(defaultSearchTerm);
		},
		[
			defaultSearchTerm
		]
	);
	const search = async (query) => {
		const response = await youtube.get('/search', {
			params : {
				q          : query,
				part       : 'snippet',
				maxResults : 5,
				type       : 'video',
				key        : KEY
			}
		});
		setVideos(response.data.items); // videos
	};
	return [
		videos,
		search
	];
};

export default useVideos;
