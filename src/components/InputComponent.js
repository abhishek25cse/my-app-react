import React,{Component} from 'react';

class InputComponent extends Component {
constructor(props) {
    super(props);
    this.state = {
        field:'',
        desc:'',
        code:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
 }

 handleChange(event) {
   const target = event.target;
   const name = target.name;
   const value = target.value;
   this.setState ({
     [name]: value,
   });
  }

  handleSubmit(event) {  
    console.log( this.state);
    event.preventDefault();
    fetch('http://localhost:8080/api/config/save', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        field: this.state.field,
        desc: this.state.desc,
        code:this.state.code,
      })
    })
  }

    render() { return (
    <form onSubmit={this.handleSubmit}>
         <label>
            Field:<input type="text" name="field" value ={this.state.field} onChange={this.handleChange}/>
         </label>
        <label>
            Description :<input type="text" name="desc" value ={this.state.desc} onChange={this.handleChange} />
        </label>
       <select value ={this.state.code} name="code" onChange={this.handleChange}>
            <option value="A">Active</option>
            <option value="I">Inactive</option>
        </select>

        <input type="submit" value="Submit" />
    </form>)
    }
}

export default InputComponent