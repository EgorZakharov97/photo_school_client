import React, {useState, useEffect} from 'react'
import PortalChallengesView from '../../views/PortalChallengesView'
import auth from '../../Auth'
import {URL_GET_CHALLENGES} from '../../constants'

const axios = auth.getAPI();

export default function PortalChallengesController(props) {

	const [past, setPast] = useState([]);
	const [currentChallenge, setCurrentChallenge] = useState({});

	useEffect(() => {
		axios.get(URL_GET_CHALLENGES)
			.then(res => {
				const data = res.data;
				if(data.success){
					setPast(data.body.past || []);
					setCurrentChallenge(data.body.current || null)
				}
			})
			.catch(e => {
				console.log(e)
			})
	}, []);

	if(currentChallenge) return (
		<PortalChallengesView>
			<name>{currentChallenge.name}</name>
			<image style={{
				backgroundImage: `-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5))), url('${currentChallenge.image || ""}')`
			}} />
			<description><div dangerouslySetInnerHTML={{ __html: currentChallenge.description }} ></div></description>
			{/*<description>{currentChallenge.description}</description>*/}
		</PortalChallengesView>
	);
	else return <> </>
}