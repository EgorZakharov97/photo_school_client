import React from 'react'
import auth from '../../Auth'
import 'react-quill/dist/quill.snow.css'

const axios = auth.getAPI();

export default class AdminFormController extends React.Component {

    constructor(props) {
        super(props);
        if(this.constructor.name === 'AdminFormController') throw new Error("This is an abstract class");
        this.URL_GET_LIST = "";
        this.URL_POST_OBJECT = "";
        this.URL_GET_OBJECT_DATA = "";
    }
    
    state = {
        busy: false,
        itemList: [],
        data: {},
        message: {},
        files: {}
    };

    render() {
        throw new Error("This is an abstract class!");
        return 
    }

    loadItems(){
        axios.get(this.URL_GET_LIST)
        .then(res => {
            const data = res.data;
            if(data.success){
                this.setState({itemList: data.body || []})
            } else {
                console.log(data.message)
            }
        })
        .catch(e => {
            console.log(e.message || e)
        })
    }

    onSelectorChange(e) {
        if(this.constructor.name === 'AdminFormController') return;
        if(e.target.value === 'new') {
            this.setState(state => {
                state.data = {};
                state.message = {};
                return state;
            })
        } else {
            const name = escape(e.target.value);
            return axios.get(this.URL_GET_OBJECT_DATA + name)
            .then(res => {
                const data = res.data;
                if(data.success){
                    return this.setObject(data.body)
                } else {
                    return this.setMessage(data.message, false)
                }
            })
            .catch(e => console.log(e.message || e))
        }
    }

    setObject(dataObject) {
        this.setState(state => {
            for(let key in dataObject){
                let value = dataObject[key];
                state.data[key] = value
            }
            return state
        })
    }

    componentDidMount() {
        this.loadItems();
        if(this.props.oldState) this.setObject(this.props.oldState)
    }

    changeHandler(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(state => {
            return state.data[name] = value;
        })
    }

    dateChangeHandler(e) {
        const name = e.target.name;
        const value = new Date(e.target.value);
        this.setState(state => {
            return state.data[name] = value;
        })
    }

    booleanChangeHandler(e) {
        const name = e.target.name;
        this.setState(state => {
            return state.data[name] = !state.data[name]
        })
    }

    integerChangeHandler(e) {
        const name = e.target.name;
        const value = parseInt(e.target.value);
        this.setState(state => {
            return state.data[name] = value;
        })
    }

    onFileSelect(e) {
        const file = e.target.files[0];
        const fieldName = e.target.name;
        this.setState(state => {
            return state.files[fieldName] = file
        })
    }

    setMessage(message, positive=true){
        this.setState(state => {
            return state.message = {
                positive: positive,
                body: message || "Unknown event occured"
            }
        })
    }

    formSubmitHandler(e) {
        e.preventDefault();
        this.setState({busy: true});
        let data = this.state.data;
        let files = this.state.files;
        if(this.state.files !== {}){
            const files = this.state.files;
            let formData = new FormData();

            for(let filename in files){
                let file = files[filename];
                formData.append('assets', file, filename)
            }
            
            for(let key in data){
                const value = data[key];
                formData.append(key, value)
            }

            this.submitForm(formData)
        }
        else this.submitForm(data)    
    }

    submitForm(data) {
        axios.post(this.URL_POST_OBJECT, data, {headers: {'Content-Type': 'application/json'}})
        .then(res => {
            const data = res.data;
            if(data.success){
                this.setMessage(data.message, true);
                this.loadItems();
                this.setObject(data.body)
            } else {
                console.log(data);
                this.setMessage(data.message, false)
            }
            this.setState(state => {
                state.busy = false;
                return state
            })
        })
        .catch(e => {
            console.log(e.data || e);
            this.setMessage(e.message || "500 Internal Server Error", false);
            this.setState({busy: false})
        })
    }
}