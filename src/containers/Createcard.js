import React,{Component} from 'react'
import './createcard.css'


class CreateCard extends Component{
    constructor(){
        super()
        this.state={
            name :"",
            email:"",
            username:"",
            id:""
        }
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


export default CreateCard

/*  key={index} 
                id={robots[index].id}
                name={robots[index].name}
                email={robots[index].email} */