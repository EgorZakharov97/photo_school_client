import React from 'react'
import axios from 'axios'
import constants from '../constants'
import { URL_GET_TUTORIAL_NAMES, URL_GET_TUTORIAL_DATA, URL_POST_TUTORIAL} from '../constants';
import AdminFormController from './AdminFormController'
import AdminTutorialView from '../views/AdminTutorialView'

export default class AdminTutorialsWorkshop extends AdminFormController {

    constructor(props){
        super(props)
        this.URL_GET_LIST = URL_GET_TUTORIAL_NAMES;
        this.URL_POST_OBJECT = URL_POST_TUTORIAL;
        this.URL_GET_OBJECT_DATA = URL_GET_TUTORIAL_DATA;
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
                    <title/>
                    <description/>
                    
                </selector>
            </AdminTutorialView>
        )
    }
}