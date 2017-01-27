/**
 * Created by User on 1/27/2017.
 */
import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {term: ''};
    }
    render(){
        return (
            <div>
                <input type="text" onChange = {event => this.setState({term: event.target.value})} />
                This is the state : {this.state.term}
            </div>
        );
        // return <input type="text" onChange={this.onInputChange}/>
    }
    // onInputChange(e){
    //     console.log(e.target.value);
    // }
}
export default SearchBar;