import React, { useRef } from 'react';
import EmailEditor from 'react-email-editor';

export default function EmailEditorController(props) {
	const emailEditorRef = useRef(null);

	const exportHtml = () => {
		emailEditorRef.current.editor.exportHtml((data) => {
			const { design, html } = data;
			console.log('exportHtml', html);
		});
	};

	const onLoad = () => {
		// you can load your template here;
		// const templateJson = {};
		// emailEditorRef.current.editor.loadDesign(templateJson);
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
				<button onClick={exportHtml}>Export HTML</button>
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