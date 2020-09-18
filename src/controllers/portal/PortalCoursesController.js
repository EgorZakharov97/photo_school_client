import React, {useEffect, useState} from 'react'
import auth from '../../Auth'
import PortalCoursesView from '../../views/PortalCoursesView'
import {URL_GET_MY_COURSES} from "../../constants"
import shortid from "shortid"
import PortalCourseController from "./PortalCourseController";

const axios = auth.getAPI();

export default function PortalCoursesController(props) {

	const [courses, setCourses] = useState([]);

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
					{courses.map(course => {
						return (
							<portal-course key={shortid.generate()}>
								<PortalCourseController key={shortid.generate()} {...course} />
							</portal-course>
						)
					})}
				</courses-container>
			</PortalCoursesView>
		</>
	)
}