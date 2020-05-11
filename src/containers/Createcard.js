import React,{Component} from 'react'
import './createcard.css'
/* import {robots} from '../components/robots' */
import demoDatabase from '../components/demoDatabase.json'
import { finished } from 'stream'
const fs =require("browserify-fs")



class Createcard extends Component{
    constructor(){
        super()
        this.state={
            /* robots :robots, demo data for testing */
            name :"",
            email:"",
            username:"",
            id:""
        }
    }
    setValue=(event)=>{
        let input = document.querySelectorAll("input");
        this.setState({name:input[1].value})
        this.setState({username:input[1].value})
        this.setState({email:input[2].value})
        
    }
    create=()=>{
        
        var newRobot={ 
        "id":demoDatabase.length-1,
        "name":this.state.name,
        "username":this.state.name, 
        "email":this.state.email
        }
        var  input=JSON.stringify(newRobot,null,2);
        fs.writeFile('../components/demoDatabase.json',input )
        
        /* demoDatabase.push(newRobot) */

        console.log(demoDatabase)
        
    }
    render(){ 
        return (
            <div className="cardBody">
            <img alt='profile' src={`https://robohash.org/22?200x200`}/>
            <div>
                <input  onChange={this.setValue} type="text" placeholder="Name"/>
                <hr/>
                <input onChange={this.setValue} type="email" placeholder="email"/>
                <button onClick={this.create} >Add card</button>
            </div>
        </div>
    );
}

};


export default Createcard

/*  key={index} 
                id={robots[index].id}
                name={robots[index].name}
                email={robots[index].email} */