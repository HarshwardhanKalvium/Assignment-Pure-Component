import { Component } from "react";


// export default class SimpleComponent extends Component{
//     constructor(){
//         super()

//         this.state={
//             count:0,
//             toggle:true
//         }
//     }

//     handleCounter=()=>{
//         if(this.state.toggle==true){
//             this.setState({
//                 ...this.state,
//                 count:this.state.count+1
//             })
//         }else{
//             this.setState({
//                 ...this.state,
//                 count:this.state.count
//             })
//         }
//     }
// }


export default class SimpleComponent extends Component{
    constructor(){
        super()

        this.state={
            count: 0,
            toggle: false
        }

        
    }


    handleCounter=()=>{
        if(this.state.toggle==true){
            this.setState({
                ...this.state,count: this.state.count+1
            })
        }else{
            this.setState({
                ...this.state,count: this.state.count
            }) 
        }
    }

    // condition?logic if it's true:logic if it's false
//     handleCounter=()=>{
//         this.state.toggle==true ? this.setState({...this.state,count: this.state.count+1}) : this.setState({...this.state,count: this.state.count
// }) 
//     }


    handleToggle=()=>{
        // if(this.state.toggle==true){
        //     this.setState({
        //         ...this.state,toggle: this.state.toggle=false
        //     })
        // }else{
        //     this.setState({
        //         ...this.state,toggle: this.state.toggle=true
        //     })
        // }

        this.setState({
            ...this.state, toggle: !this.state.toggle
        })
    }

    render(){
        console.log(`This is Simple Component`);
        return(
            <>
            <h1>Simple Component</h1>
            <h3>{this.state.count}</h3>
            <button onClick={this.handleToggle}>Set Toggle</button>
            <button onClick={this.handleCounter}>Counter</button>
            </>
        )
    }
}