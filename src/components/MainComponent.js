import React,{Component} from 'react';
import ConfigList from './ConfigList';
import InputComponent from './InputComponent';

class MainComponent extends Component {
    render() { return (
        <div>
            <InputComponent/>
            <ConfigList/>
        </div>
        
    )}
}

export default  MainComponent