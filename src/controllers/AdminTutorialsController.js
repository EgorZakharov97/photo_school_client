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
        return(
            <AdminTutorialView>
                <selector value={this.state.data.name || 'new'} onChange={e => this.onSelectorChange(e)}>
                    <option value="new">New</option>
                    { this.state.itemList.map((tutorial, i) => {
                        return <option key={i} value={tutorial.name}>{tutorial.name}</option>
                    }) }
                </selector>
                <title value={this.state.data.name || ""} onChange={e => this.changeHandler(e)}/>
                <description value={this.state.data.description || ""} onChange={e => this.changeHandler(e)}/>
                <category value={this.state.data.category || 'new'} onChange={e => this.onCategorySelect(e)}>
                    <option value="new">New</option>
                    { this.state.categories.map((category, i) => {
                            return <option key={i} value={category.name}>{category.name}</option>
                        }) }
                </category>
                {this.state.showNewCategory && <category-name onChange={e => this.changeHandler(e)}/>}
                <link value={this.state.data.link || ""} onChange={e => this.changeHandler(e)} />
                <subscription value={this.state.data.subscription} checked={this.state.data.subscription} onChange={e => this.booleanChangeHandler(e)} />
                <file value={this.state.files.image  || ""} onChange={e => this.onFileSelect(e)} />
                {!this.state.busy && <submit value={this.state.data._id ? "Update" : "Create"} onClick={e => this.formSubmitHandler(e)}/>}
                {this.state.message.body && <message style={this.state.message.positive ? {color: "green"} : {color: "red"}}>{this.state.message.body}</message>}
            </AdminTutorialView>
        )
    }

    onCategorySelect(e){
        const category = e.target.value
        this.setState(state => {
            state.data.category = category
            state.showNewCategory = category === 'new' ? true : false;
            return state
        })
    }

    // onSelectorChange(e) {
    //     super.onSelectorChange(e);
    //     this.setState(state => {
    //         return state.data.subscription = true
    //     })
    // }

    setObject(data) {
        super.setObject(data)
        this.setState(state => {
            state.data === {} ? state.showNewCategory = true : state.showNewCategory = false;
            state.data.subscription = data.accessBySubscription
            state.data.category = data.category.name
            return state
        })
    }
}