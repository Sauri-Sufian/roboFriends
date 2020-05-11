import React, { Component } from 'react';
import './app.css'
import Scroll from '../components/Scroll' 
import Cardlist from '../components/Cardlist'
/* import {robots} from '../components/robots' */
import Searchbox from '../components/Searchbox'
import ErrorBoundary from '../components/ErrorBoundary'
import Createcard from './Createcard'
import robot from '../components/demoDatabase.json'

const filterUsers=(users)=>{ 
    users.forEach(element => {
       
         if(element.name.length>20){
            element.name=element.name.substring(0,element.name.indexOf(' '))
           /*  console.log(element.name) */
        }
        
    });
    
    return users
}

class App extends Component{
    constructor(){
        super()
        this.state={
            robots :filterUsers(robot),
            searchfield:'',
            totalUsers:""
        }
    }

    
    /* for requesting data from a server  */ 
    
     /* componentDidMount(){
        fetch('http://localhost:3000/components/demoDatabase.json')
        .then(response =>{
           
          return   response.json();
        })
        .then(users=>{
            this.setState({totalUsers:users.length})
            this.setState({robots:filterUsers(users)})
        })
    }  */
 
    onSearch=(event)=>{
        this.setState({searchfield:event.target.value})

    }

    render(){ 
       
        const filturedRobots=this.state.robots.filter(robots=>{ 
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        }
            )
            /*  */
    if(this.state.robots.length===0){
        return(
            <h1 className="loading">Loading</h1>
        )
    }
    else{      
        return(
            <div className="tc pa2 app">
                <h1>Demo Media</h1>
                <Searchbox onSearch={this.onSearch}/>
                <Scroll>
                    <ErrorBoundary>
                        <Cardlist robots={filturedRobots}/>
                    </ErrorBoundary>
                </Scroll>
                <Createcard  onClick={this.onClick}/>
            </div>
        )
        }
    }
}


export default App;