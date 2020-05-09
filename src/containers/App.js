import React, { Component } from 'react';
import './app.css'
import Scroll from '../components/Scroll' 
import Cardlist from '../components/Cardlist'
import Searchbox from '../components/Searchbox'
import ErrorBoundary from '../components/ErrorBoundary'

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
            /* robots :robots, demo data for testing */
            robots :[],
            searchfield:''
        }
    }

    
    /* for requesting data from a server  */ 
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
          return   response.json();
        })
        .then(users=>{
            this.setState({robots:filterUsers(users)})
        })
    } 

    onSearch=(event)=>{
        /* console.log(event.target.value) */
        /* console.log("Inside search") */
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
            </div>
        )
        }
    }
}


export default App;