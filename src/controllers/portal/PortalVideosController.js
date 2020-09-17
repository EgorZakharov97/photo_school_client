import React, {useState, useEffect} from 'react'
import {URL_GET_MY_VIDEOS} from "../../constants"
import shortid from 'shortid'
import auth from "../../Auth";

import PortalVideosView from '../../views/PortalVideosView'
import PortalVideoController from './PortalVideoController'
import PlayVideoWindowController from './PlayVideoWindowController'
import GetSubscriptionController from "./GetSubscriptionController";

const axios = auth.getAPI();

export default function PortalVideosController(props) {

	const [videos, setVideos] = useState([]);
	const [previews, setPreviews] = useState([]);

	const [showPlay, setShowPlay] = useState(false);
	const [playWindowData, setPlayWindowData] = useState({});

	const [showSubscribe, setShowSubscribe] = useState(false);

	useEffect(() => {
		axios.get(URL_GET_MY_VIDEOS)
			.then(res => {
				const data = res.data;
				if(data.success){
					setVideos(data.body.fullAccess || []);
					setPreviews(data.body.preview || []);
				} else {
					console.log(data.message)
				}
			})
			.catch(e => {
				console.log(e)
			})
	}, []);


	return (
		<>
			<PortalVideosView>
				<videos-container>
					<video-portal key={shortid.generate()}>
						<PortalVideoController key={shortid.generate()} i={113} setShowSubscribe={setShowSubscribe} setPlayWindowData={setPlayWindowData} setShowPlay={setShowPlay}  {...{name: 'sample', description: 'descriptoip'}} />
					</video-portal>
					{videos.map((video, i) => {
						return (
							<video-portal key={shortid.generate()}>
								<PortalVideoController key={shortid.generate()} i={i} setShowSubscribe={setShowSubscribe} setPlayWindowData={setPlayWindowData} setShowPlay={setShowPlay}  {...video} />
							</video-portal>
						)
					})}
					{previews.map(video => {
						return (
							<video-portal key={shortid.generate()}>
								<PortalVideoController key={shortid.generate()} setShowSubscribe={setShowSubscribe}  {...video} />
							</video-portal>
						)
					})}
				</videos-container>
			</PortalVideosView>
			{showPlay && <PlayVideoWindowController setNextVideo={setNextVideo} setShowPlay={setShowPlay} {...playWindowData} />}
			<GetSubscriptionController setShowSubscribe={setShowSubscribe} {...playWindowData} />
		</>
	);

	function setNextVideo() {
		let i = playWindowData.i;
		if(videos.length > i){
			i++;
			setPlayWindowData({
				name: videos[i].name,
				link: videos[i].link,
				i: i
			})
		}
	}
}