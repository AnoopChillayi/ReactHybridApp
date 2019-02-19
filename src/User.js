import React, { Component } from 'react';
const User = (props) => {
    return (
        <div>{props.name}</div>
    )
}

export const Users = (props) => {
    return (     
            props.names.map((item,index)=>{
              return <User key ={index} name={item.name}/>
            })
          
    )
}

export const Age = () => {
    return (
        <div>My age 30</div>
    )
}
export class Address extends Component {
    render() {
        return (
            <React.Fragment>
                <div>{this.props.place}</div>
                <Age></Age>
                <User name ={"rosa"}></User>
            </React.Fragment>
        )
    }

}
export default User;
