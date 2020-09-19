import React, {useState} from 'react'
import auth from '../../Auth'

import DiscountCounterView from '../../views/DiscountCounterView'

export default function DiscountCountController(props) {

	const user = auth.getUser();

	if(!user || user === {}) return (<></>);

	const discount = user.discounts.workshopDiscountCount;

	let class1, class2, class3, class4, class5, heading;

	switch (discount) {
		case 0:
			class1 = class2 = class3 = class4 = class5 = "";
			heading = "Buy workshops to earn discount!";
			break;

		case 1:
			class1 = "af-class-active";
			class2 = "af-class-half-complete";
			class3 = class4 = class5 = "";
			heading = "You have 10% discount for your next workshop";
			break;

		case 2:
			class1 = "af-class-complete";
			class2 = "af-class-active";
			class3 = "af-class-half-complete";
			class4 = class5 = "";
			heading = "You have 15% discount for your next workshop";
			break;

		case 3:
			class1 = class2 = "af-class-complete";
			class3 = "af-class-active";
			class4 = "af-class-half-complete";
			class5 = "";
			heading = "You have 20% discount for your next workshop";
			break;

		case 4:
			class1 = class2 = class3 = "af-class-complete";
			class4 = "af-class-active";
			class5 = "af-class-half-complete";
			heading = "You have 25% discount for your next workshop";
			break;

		case 5:
			class1 = class2 = class3 = class4 = "complete";
			class5 = "af-class-active";
			heading = "Congratulations! Your next workshop is on us!";
			break;

		default:
			class1 = class2 = class3 = class4 = class5 = "";
			heading = "Buy workshops to earn discount!";
			break;
	}

	return (
		<DiscountCounterView>
			<heading>{heading}</heading>
			<one className={class1} />
			<two className={class2} />
			<three className={class3} />
			<four className={class4} />
			<five className={class5} />
		</DiscountCounterView>
	);
}