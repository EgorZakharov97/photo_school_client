import React, {useState} from 'react'
import auth from '../../Auth'

import DiscountCounterView from '../../views/DiscountCounterView'

export default function DiscountCountController(props) {



	return (
		<DiscountCounterView>
			<heading></heading>
			<one/>
			<two/>
			<three/>
			<four/>
			<five/>
		</DiscountCounterView>
	)
}