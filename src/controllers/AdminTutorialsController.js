import React from 'react'
import axios from 'axios'
import constants from '../constants'
import { URL_GET_TUTORIAL_NAMES, URL_GET_TUTORIAL_DATA, URL_POST_TUTORIAL, URL_GET_CATEGORY_NAMES} from '../constants';
import AdminFormController from './AdminFormController'
import AdminTutorialView from '../views/AdminTutorialView'

export default class AdminTutorialsWorkshop extends AdminFormController {

    constructor(props){
        super(props)
        this.state.categories = [];
        this.state.data.subscription = true;
        this.state.showNewCategory = true;
        this.URL_GET_LIST = URL_GET_TUTORIAL_NAMES;
        this.URL_POST_OBJECT = URL_POST_TUTORIAL;
        this.URL_GET_OBJECT_DATA = URL_GET_TUTORIAL_DATA;
    }

    componentDidMount(){
        super.componentDidMount();
        axios.get(URL_GET_CATEGORY_NAMES)
        .then(res => {
            const data = res.data;
            if(data.success){
                this.setState({categories: data.body || []})
            } else {
                console.log(data.message)
            }
        })
        .catch(e => {
            console.log(e)
        })
    }

    render(){
        console.log(this.state)
        return(
            <AdminTutorialView>
                <selector onChange={e => this.onSelectorChange(e)}>
                    <option value="new">New</option>
                    { this.state.itemList.map((tutorial, i) => {
                        return <option key={i} value={tutorial.name}>{tutorial.name}</option>
                    }) }
                </selector>
                <title value={this.state.data.name || ""} onChange={e => this.changeHandler(e)}/>
                <description value={this.state.data.description || ""} onChange={e => this.changeHandler(e)}/>
                <category onChange={e => this.onCategorySelect(e)}>
                <option value="new">New</option>
                { this.state.categories.map((category, i) => {
                        return <option key={i} value={category.name}>{category.name}</option>
                    }) }
                </category>
                {this.state.showNewCategory && <category-name onChange={e => this.changeHandler(e)}/>}
                <link value={this.state.data.link || ""} onChange={e => this.changeHandler(e)} />
                <subscription checked={this.state.data.subscription} checked={this.state.data.subscription} onChange={e => this.booleanChangeHandler(e)} />
                <file value={this.state.files[0]  || ""} onChange={e => this.onFileSelect(e)} />
                {!this.state.busy && <submit value={this.state.data._id ? "Update" : "Create"} onClick={e => this.formSubmitHandler(e)}/>}
                {this.state.message.body && <message style={this.state.message.positive ? {color: "green"} : {color: "red"}}>{this.state.message.body}</message>}
            </AdminTutorialView>
        )
    }

    onCategorySelect(e, selector=true){
        const value = e.target.value
        this.setState(state => {
            state.data.category = value
            if (selector) state.showNewCategory = value === 'new'
            return state
        })
    }
}