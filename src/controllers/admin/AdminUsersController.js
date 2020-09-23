import React, {useState, useEffect} from 'react'
import auth from '../../Auth'
import {URL_GET_ALL_USERS, URL_GET_ALL_SUBSCRIBERS} from "../../constants";
import AdminUsersView from '../../views/AdminUsersView'
import UserInlineController from "./UserInlineController"

const axios = auth.getAPI();

export default function AdminUsersController(props) {

	const [users, setUsers] = useState([]);
	const [subscribers, setSubscribers] = useState([]);
	const [notUsers, setNotUsers] = useState([]);
	const [userType, setUserType] = useState('all');

	useEffect(() => {
		axios.get(URL_GET_ALL_USERS)
			.then(res => {
				const data = res.data;
				if(data.success){
					setUsers(data.body || [])
					console.log('all users')
					console.log(data.body)
				} else {
					console.log(data.message)
				}
			})
			.catch(e => {
				console.log(e)
			});

		axios.get(URL_GET_ALL_SUBSCRIBERS)
			.then(res => {
				const data = res.data;
				if(data.success){
					setNotUsers(data.body || [])
				} else {
					console.log(data.message)
				}
			})
			.catch(e => {
				console.log(e)
			});
	}, []);

	return (
		<AdminUsersView>
			<user-count>123</user-count>
			<select-all onChange={onSelectAll} />
			<all-users className={userType === 'all' && 'af-class-selected'} onCLick={e => {setUserType('all')}} />
			<subscribers className={userType === 'subscribers' && 'af-class-selected'} onClick={e => {setUserType('subscribers')}} />
			<not-users className={userType === 'not-users' && 'af-class-selected'} onClick={e => {setUserType('not-users')}} />
			<users-container>
				{renderUsersTable(userType)}
			</users-container>
			<to-emails/>
		</AdminUsersView>
	);

	function onSelectOne(email){
		if(userType === 'all'){
			users.map(user => {if(user.email === email) user.selected = true})
		} else if (userType === 'subscribers'){
			subscribers.map(user => {if(user.email === email) user.selected = true})
		} else if(userType === 'not-users'){
			notUsers.map(user => {if(user.email === email) user.selected = true})
		} else {
			alert('Unknown user type')
		}
	}

	function onSelectAll() {
		if(userType === 'all'){
			users.map(user => user.selected = true)
		} else if (userType === 'subscribers'){
			subscribers.map(user => user.selected = true)
		} else if(userType === 'not-users'){
			notUsers.map(user => user.selected = true)
		} else {
			alert('Unknown user type')
		}
		console.log(users)
	}

	function renderUsersTable(type){
		if(type === 'all'){
			return users.map(user => {
				return returnUser(user)
			})
		} else if(type === 'subscribers') {
			return <> </>
		} else if(type === 'not-users') {
			return notUsers.map(user => {
				return returnUser(user)
			})
		}

		function returnUser(user){
			return (
				<user-inline>
					<UserInlineController subscribeUser={subscribeUser} selectUser={selectUser} {...user} />
				</user-inline>
			)
		}
	}

	function distributeUsersToGroups(){
		if(users === []) return;
		// Needs to be implemented
	}

	function selectUser(){

	}

	function subscribeUser(){

	}
}