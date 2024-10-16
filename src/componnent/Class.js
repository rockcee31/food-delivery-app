import React from "react";


class Class extends React.Component {
    constructor(props) {
        
        super(props);
        // console.log(props);
        console.log(this.props.name+ "contructor");
        
    
    }
    componentDidMount(){
        console.log(this.props.name +"mounted")
        
    }
        render(){
            console.log(this.props.name +"render")
        return (
            
            
          <div className="card user" >

          <h1>name:{this.props.name}</h1>
          <h1>location :{this.props.location}</h1>

          </div>
        )
    }
}
export default Class;