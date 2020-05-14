import React, { Component } from 'react';
import { connect } from  'react-redux'
import './app.css'
import Scroll from '../components/Scroll' 
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import ErrorBoundary from '../components/ErrorBoundary'
import CreateCard from './Createcard'
import { setSearchField, requestRobots } from '../actions'


const mapStateToProps = state =>{
    return {
        searchField:state.SearchRobots.searchField,
        robots:filterUsers(state.requestRobots.robots),
        isPending:state.requestRobots.isPending,
        error:state.requestRobots.error
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        onSearch:(event)=> dispatch(setSearchField(event.target.value)),
        onRequestRobots:()=>dispatch(requestRobots())
    }
}


const filterUsers=(users)=>{ 
    users.forEach(element => {
       
         if(element.name.length>20){
            element.name=element.name.substring(0,element.name.indexOf(' '))
        }
        
    });
    
    return users
}

class App extends Component{
    
    componentDidMount(){
         
        this.props.onRequestRobots();
    } 

    render(){ 
        const {searchField,onSearch,robots,isPending} =this.props
       
        const filturedRobots=robots.filter(robots=>{ 
            return robots.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
        }
            )
    if(isPending){
        return(
            <h1 className="loading">Loading</h1>
        )
    }
    else{      
        return(
            <div className="tc pa2 app">
                <h1>Demo Media</h1>
                <SearchBox SearchChange={onSearch}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filturedRobots}/>
                    </ErrorBoundary>
                </Scroll>
              <CreateCard/>
            </div>
        )
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (App);