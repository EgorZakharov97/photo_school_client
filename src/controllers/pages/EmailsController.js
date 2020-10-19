import React, {useState, useEffect} from 'react'
import shortid from 'shortid'
import {URL_GET_TEMPLATE_NAMES} from "../../constants"
import EmailsView from '../../views/EmailsView'
import EmailController from "../EmailController";
import auth from '../../Auth'

const axios = auth.getAPI();

export default function EmailsController(props){

	const [users, setUsers] = useState([]);
	const [templateNames, setTemplateNames] = useState([]);
	const [currentTemplateName, setCurrentTemplateName] = useState("");

	useEffect(() => {
		if(!props.location.state) {
			const users = window.localStorage.getItem("latest-email");
			if(users) setUsers(JSON.parse(users));
		} else {
			setUsers(props.location.state.users);
		}

		axios.get(URL_GET_TEMPLATE_NAMES)
			.then(res => {
				const data = res.data;
				console.log(data)
				if(data.success){
					setTemplateNames(data.body || []);
				} else {
					console.log(data.message)
				}
			})
			.catch(e => {
				console.log(e)
			})

		return function cleanup(){
			window.localStorage.setItem("latest-email", JSON.stringify(users))
		}
	}, []);

	return (
		<EmailsView>
			<template-selector value={currentTemplateName || "New"} onChange={e => {setCurrentTemplateName(e.target.value)}}>
				<option key={shortid.generate()} value={"New"}>New</option>
				{templateNames.map(name => {
					return (
						<option key={shortid.generate()} value={name}>{name}</option>
					)
				})}
			</template-selector>
			<create-new-template onClick={toEditor} />
			<add-email-input/>
			<emails-container>
				<email>
					<EmailController/>
				</email>
			</emails-container>
			<editor/>
			<preview/>
			<send-test/>
			<send/>
		</EmailsView>
	);

	function toEditor() {
		props.history.push('/emails/editor', {from: props.location, users: users, template: currentTemplateName})
	}
}