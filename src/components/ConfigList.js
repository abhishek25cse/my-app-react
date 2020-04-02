import React,{Component} from 'react'

class ConfigList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            configs :[] 
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/config/all')
        .then(response => response.json())
        .then(json =>{
            console.log(json);
            this.setState({configs : json});
        });          
       
    }
    render() {
        const {configs} = this.state;
        return (
            <div>This is the saved Configs                {
                configs.length ?    
                configs.map(config => 
                <ul key={config.id} > {config.field} | {config.desc} | {config.code}</ul>               
                ) : null
                }
                </div>
        )
    }
}
export default ConfigList;