import React, {useState, useEffect} from 'react'
import auth from '../../Auth'
import {URL_GET_MY_WORKSHOPS} from "../../constants";
import shortid from 'shortid'

import WorkshopsPortalView from '../../views/WorkshopsPortalView'
import WorkshopDropdownController from "../portal/WorkshopDropdownController";
import DiscountCounterController from '../portal/DiscountCounterController'
const axios = auth.getAPI();

export default function PortalWorkshopsController(props) {

	const [workshops, setWorkshops] = useState([]);

	useEffect(() => {
		axios.get(URL_GET_MY_WORKSHOPS)
			.then(res => {
				const data = res.data;
				if(data.success){
					setWorkshops(data.body)
				}
			})
			.catch(e => {
				console.log(e)
			})
	}, []);
	return(
		<WorkshopsPortalView>
			<discount-counter>
				<DiscountCounterController/>
			</discount-counter>
			<workshops-container>
				{workshops.map((workshop) =>
					<workshop-drowdown key={getKey()} >
						<WorkshopDropdownController key={getKey()} {...workshop} />
					</workshop-drowdown>
				)}
			</workshops-container>

		</WorkshopsPortalView>
	);

	function getKey() {
		return shortid.generate()
	}
}