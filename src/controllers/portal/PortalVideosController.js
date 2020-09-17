import React, {useState, useEffect} from 'react'
import PortalVideosView from '../../views/PortalVideosView'
import PortalVideoController from './PortalVideoController'
import {URL_GET_MY_VIDEOS} from "../../constants"
import shortid from 'shortid'
import auth from "../../Auth";
const axios = auth.getAPI();

export default function PortalVideosController(props) {

	const [videos, setVideos] = useState([]);
	const [previews, setPreviews] = useState([]);

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
		<PortalVideosView>
			<videos-container>
				{videos.map(video => {
					return (
						<diveo-portal key={shortid.generate()}>
							<PortalVideoController key={shortid.generate()} {...video} />
						</diveo-portal>
					)
				})}
				{previews.map(video => {
					return (
						<diveo-portal key={shortid.generate()}>
							<PortalVideoController key={shortid.generate()} {...video} />
						</diveo-portal>
					)
				})}
			</videos-container>
		</PortalVideosView>
	);
}