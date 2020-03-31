import React,{Component} from 'react'
import axios from 'axios'

class ConfigList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            configs :[] 
        }
    }

    componentDidMount() {
        axios.get("localhost:8080/api/config/all")
        .then(response => {
            console.log(response);
            this.setState({configs : response.data});
        }).catch(error => {
            console.log("Caought error ",error);
        })
    }
    render() {
        const {configs} = this.state;
        return (
            <div>This is list
                {
                configs.length ?    
                configs.map(config => <div key={config.id}>{config.field}</div>) : null
                }
                </div>
        )
    }
}
export default ConfigList;