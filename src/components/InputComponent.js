import React,{Component} from 'react';

class InputComponent extends Component {
constructor(props) {
    super(props);
    this.state = {
        name:'',
        desc:'',
        status:''
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
 }

 handleChangeName(event) {
    this.setState({name: event.target.value});
  }
handleChangeDesc(event) {
    this.setState({desc: event.target.value});
  }
  handleChangeStatus(event) {
    this.setState({status: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
  }


  componentDidMount() {
    fetch('http://localhost:8080/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }
    render() { return (
    <form onSubmit={this.handleSubmit}>
         <label>
            Name:<input type="text" name="name" />
         </label>
        <label>
            Description :<input type="text" name="name" />
        </label>
       <select>
            <option value="A">Active</option>
            <option value="I">Inactive</option>
        </select>

        <input type="submit" value="Submit" />
    </form>)
    }
}

export default InputComponent