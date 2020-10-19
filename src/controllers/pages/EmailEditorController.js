import React, {useEffect, useRef, useState} from 'react';
import {URL_GET_TEMPLATE_NAMES, URL_POST_TEMPLATE} from '../../constants'
import auth from '../../Auth'
import EmailEditor from 'react-email-editor';

const axios = auth.getAPI();

export default function EmailEditorController(props) {

	let template = {};
	const [tName, setTemplateName] = useState("");
	const emailEditorRef = useRef(null);

	const exportHtml = () => {
		emailEditorRef.current.editor.exportHtml((data) => {
			data.name = tName;
			axios.post(URL_POST_TEMPLATE, data)
				.then(res => {
					if(!res.data.success) return alert(res.data.message);
					props.history.push('/emails', {from: props.location, users: props.location.state.users})
				})
				.catch(e => {
					alert(e)
				})
		});
	};

	const onLoad = () => {
		// you can load your template here;
		// const templateJson = {};
		const tName = props.location.state.template;
		if(tName !== ""){
			setTemplateName(tName);
			axios.get(URL_GET_TEMPLATE_NAMES + '/' + tName + '/json')
				.then(res => {
					const data = res.data;
					if(data.success){
						const template = JSON.parse(data.body.json);
						if(template !== {}) emailEditorRef.current.editor.loadDesign(template);
					} else {
						console.log(data.message)
					}
				})
				.catch(e => {
					console.log(e)
				})
		}
	};

	const styles = {
		height: '100vh',
		width: '100vw'
	};

	const options = {
		mergeTags: {
			first_name: {
				name: "Username",
				value: "<%= user.username %>"
			},
			last_name: {
				name: "email",
				value: "<%= user.email %>"
			},
			body: {
				name: "body",
				value: "<%= body %>"
			}
		}
	};

	return (
		<div style={styles}>
			<div style={{position: 'absolute'}}>
				<button onClick={e => {props.history.push('/email')}}>Dismiss</button>
				<button onClick={exportHtml}>Save and return</button>
				<input placeholder="Enter name" type="text" name="name" value={tName} onChange={e => {setTemplateName(e.target.value)}}/>
			</div>

			<EmailEditor
				ref={emailEditorRef}
				onLoad={onLoad}
				style={styles}
				options={options}
			/>
		</div>
	);
};