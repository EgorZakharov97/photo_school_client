import React, {useEffect, useState} from 'react'
import auth from '../../Auth'
import PortalCoursesView from '../../views/PortalCoursesView'
import {URL_GET_MY_COURSES} from "../../constants"
import shortid from "shortid"
import PortalCourseController from "./PortalCourseController";

const axios = auth.getAPI();

export default function PortalCoursesController(props) {

	const [courses, setCourses] = useState([]);
	const [showCourse, setShowCourse] = useState(false);
	const [indexToShow, setIndexToShow] = useState(-1);

	useEffect(() => {
		axios.get(URL_GET_MY_COURSES)
			.then(res => {
				const data = res.data;
				if(data.success){
					setCourses(data.body || []);
				} else {
					console.log(data.message)
				}
			})
			.catch(e => {
				console.log(e)
			})
	}, []);

	return(
		<>
			<PortalCoursesView>
				<courses-container>
					{courses.map((course, i) => {
						return (
							<portal-course key={shortid.generate()}>
								<PortalCourseController
									i={i}
									key={shortid.generate()}
									setIndexToShow={setIndexToShow}
									setShowCourse={setShowCourse}
									{...course}
								/>
							</portal-course>
						)
					})}
				</courses-container>
			</PortalCoursesView>
		</>
	)
}