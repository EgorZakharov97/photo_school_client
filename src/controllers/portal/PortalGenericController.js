import React from 'react'
import auth from '../../Auth'

export default class PortalGenericController extends React.Component {
	constructor(props){
		super(props);
		if(this.constructor.name === 'AdminFormController') throw new Error("This is an abstract class");
		this.URL_GET_LIST = "";
		this.URL_GET_OBJECT_DATA = "";
	}
}