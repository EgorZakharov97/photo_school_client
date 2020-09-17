import React, {useState, useEffect} from 'react'
import auth from '../../Auth'
import {URL_GET_MY_PRESETS} from "../../constants";
import PresetsPortalView from '../../views/PresetsPortalView'
import shortid from "shortid";
import PortalMaterialController from "./PortalMaterialController";
import PresetPortalController from './PresetPortalController'
const axios = auth.getAPI();

export default function PortalPresetsController(props) {

	const [presets, setPresets] = useState([]);
	const [previews, setPreviews] = useState([]);

	useEffect(() => {
		axios.get(URL_GET_MY_PRESETS)
			.then(res => {
				const data = res.data;
				if(data.success){
					setPresets(data.body.fullAccess || []);
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
		<PresetsPortalView>
			<presets-container>
				{presets.map(preset => {
					return (
						<preset-portal key={shortid.generate()}>
							<PresetPortalController key={shortid.generate()} {...preset} />
						</preset-portal>
					)
				})}
				{previews.map(preset => {
					return (
						<preset-portal key={shortid.generate()}>
							<PresetPortalController key={shortid.generate()} {...preset} />
						</preset-portal>
					)
				})}
			</presets-container>
		</PresetsPortalView>
	)
}