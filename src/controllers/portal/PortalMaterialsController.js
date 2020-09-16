import React, {useState, useEffect} from 'react'
import auth from '../../Auth'
import {URL_GET_MY_MATERIALS} from "../../constants";
import MaterialsPortalView from '../../views/MaterialsPortalView'
import MaterialController from "./MaterialController";
import shortid from 'shortid'
import MaterialView from '../../views/MaterialView'
const axios = auth.getAPI();



export default function PortalMaterialsController() {

	const [materials, setMaterials] = useState([]);
	const [previews, setPreviews] = useState([]);

	useEffect(() => {
		axios.get(URL_GET_MY_MATERIALS)
			.then(res => {
				const data = res.data;
				if(data.success){
					// setMaterials(data.body.fullAccess);
					// setPreviews(data.body.preview);
				} else {
					console.log(data.message)
				}
			})
			.catch(e => {
				console.log(e)
			})
	}, []);

	return (
		<MaterialsPortalView>
			<meterials-container>
				{/*{materials.map(material => {*/}
				{/*	return (*/}
				{/*		<material key={shortid.generate()}>*/}
				{/*			<MaterialController key={shortid.generate()} {...material} />*/}
				{/*		</material>*/}
				{/*	)*/}
				{/*})}*/}
				{/*{previews.map(material => {*/}
				{/*	return (*/}
				{/*		<material key={shortid.generate()}>*/}
				{/*			<MaterialController key={shortid.generate()} {...material} />*/}
				{/*		</material>*/}
				{/*	)*/}
				{/*})}*/}
				<material key={shortid.generate()}>
					<MaterialView/>
				</material>
			</meterials-container>
		</MaterialsPortalView>
	)
}