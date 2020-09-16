import React, {useState, useEffect} from 'react'
import auth from '../../Auth'
import {URL_GET_MY_MATERIALS} from "../../constants";
import MaterialsPortalView from '../../views/MaterialsPortalView'
import PortalMaterialController from "./PortalMaterialController";
import shortid from 'shortid'
import PortalMaterialView from '../../views/PortalMaterialView'
const axios = auth.getAPI();



export default function MaterialsPortalController() {

	const [materials, setMaterials] = useState([]);
	const [previews, setPreviews] = useState([]);

	useEffect(() => {
		axios.get(URL_GET_MY_MATERIALS)
			.then(res => {
				const data = res.data;
				if(data.success){
					setMaterials(data.body.fullAccess || []);
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
		<MaterialsPortalView>
			<meterials-container>
				{materials.map(material => {
					return (
						<portal-material key={shortid.generate()}>
							<PortalMaterialController key={shortid.generate()} {...material} />
						</portal-material>
					)
				})}
				{previews.map(material => {
					return (
						<portal-material key={shortid.generate()}>
							<PortalMaterialController key={shortid.generate()} {...material} />
						</portal-material>
					)
				})}
			</meterials-container>
		</MaterialsPortalView>
	)
}