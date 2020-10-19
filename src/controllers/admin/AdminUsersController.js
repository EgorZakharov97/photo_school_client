import React, {useState, useEffect} from 'react'
import shortid from 'shortid'
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
	const [allWasSelected, setAllWasSelected] = useState(false);

	useEffect(() => {
		axios.get(URL_GET_ALL_USERS)
			.then(res => {
				const data = res.data;
				if(data.success){
					setUsers(data.body || [])
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
			<user-count>{users.length}</user-count>
			<select-all checked={allWasSelected} onChange={onSelectAll} />
			<all-users className={userType === 'all' && 'af-class-selected'} onClick={e => {onSetUserType('all')}} />
			<subscribers className={userType === 'subscribers' && 'af-class-selected'} onClick={e => {onSetUserType('subscribers')}} />
			<not-users className={userType === 'not-users' && 'af-class-selected'} onClick={e => {onSetUserType('not-users')}} />
			<users-container>
				{renderUsersTable(userType)}
			</users-container>
			<to-emails onClick={e => {toEmails()}} />
		</AdminUsersView>
	);

	function toEmails() {
		props.history.push('/emails', {from: props.location, users: {users}})
	}

	function onSetUserType(type){
		if(userType === 'all'){
			users.map(user => {user.selected = false})
		} else if (userType === 'subscribers'){
			subscribers.map(user => {user.selected = false})
		} else if(userType === 'not-users'){
			notUsers.map(user => {user.selected = false})
		} else {
			alert('Unknown user type')
		}
		setUserType(type);
		setAllWasSelected(false);
	}

	function onSelectOne(e, email){
		const checked = e.target.checked;
		if(userType === 'all'){
			users.map(user => {if(user.email === email) user.selected = checked})
		} else if (userType === 'subscribers'){
			subscribers.map(user => {if(user.email === email) user.selected = checked})
		} else if(userType === 'not-users'){
			notUsers.map(user => {if(user.email === email) user.selected = checked})
		} else {
			alert('Unknown user type')
		}
		if(!checked) setAllWasSelected(false);
	}

	function onSelectAll(e) {
		if(userType === 'all'){
			users.map(user => user.selected = e.target.checked)
		} else if (userType === 'subscribers'){
			subscribers.map(user => user.selected = e.target.checked)
		} else if(userType === 'not-users'){
			notUsers.map(user => user.selected = e.target.checked)
		} else {
			alert('Unknown user type')
		}
		setAllWasSelected(e.target.checked)
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
				<user-inline key={shortid.generate()}>
					<UserInlineController key={shortid.generate()} subscribeUser={subscribeUser} selectUser={onSelectOne} user={user} />
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