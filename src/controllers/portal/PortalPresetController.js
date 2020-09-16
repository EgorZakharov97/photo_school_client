import React, {useState, useEffect} from 'react'
import auth from '../../Auth'
import {URL_GET_MY_MATERIALS, URL_GET_MY_PRESETS} from "../../constants";
import shortid from 'shortid'
import PresetsPortalView from '../../views/PresetsPortalView'
import PresetController from "./PresetController";
const axios = auth.getAPI();

export default function PortalPresetsController(props) {

	const [presets, setpresets] = useState([]);
	const [previews, setPreviews] = useState([]);

	useEffect(() => {
		axios.get(URL_GET_MY_PRESETS)
			.then(res => {
				const data = res.data;
				if(data.success){
					// setMaterials(data.body.fullAccess);
					// setPreviews(data.body.preview);
					console.log(data.body.preview || [])

				} else {
					console.log(data.message)
				}
			})
			.catch(e => {
				console.log(e)
			})
	}, []);

	return (
		<PresetsPortalView>
			<presets-container>
				<PresetController {...{name: 'abc', image: "wer"}} />
			</presets-container>
		</PresetsPortalView>
	)
}