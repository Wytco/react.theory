import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addNumber2} from "./Redux/ActionsRedux/Actions";

class NewCounterRedux extends Component {

    render() {


        return (
            <div style={{padding: 20, border: '1px solid #ccc'}}>
                <h1>Counter {this.props.counter}</h1>
                <hr/>
                <div>
                    <button onClick={()=>this.props.onAddNumber(15)}>Add</button>
                    <button onClick={()=>this.props.onAddNumber(-15)}>Sub</button>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        counter: state.counter2.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAddNumber: (number) => dispatch(addNumber2(number)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCounterRedux);
