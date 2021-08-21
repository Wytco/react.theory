import React, {Component} from 'react';
import Radium from 'radium';
import classes from '../Car/Car.css';
import withClass from "../hoc/withClass";
import PropTypes from 'prop-types'

//Лушче избегать множества наследований Component
class Car extends Component {

    //Жизненный цикл изменения
    // componentWillReceiveProps(nextProps, nextContext) {
    //     console.log('App componentWillReceiveProps',nextProps,nextContext);
    // }
    //
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('App shouldComponentUpdate',nextProps,nextState,nextContext);
    //     return nextProps.name.trim() !== this.props.name.trim() ;
    // };
    //
    // componentWillUpdate(nextProps, nextState, nextContext) {
    //     console.log('App componentWillUpdate',nextProps,nextState,nextContext);
    // };
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log('App componentDidUpdate',prevProps,prevState,snapshot);
    // };
    //
    // //Жизненный цикл удаления
    // componentWillUnmount() {
    //     console.log('App componentWillUnmount');
    // };

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        if (this.props.index === 1) {
            // this.inputRef.focus()
            this.inputRef.current.focus()
        }
    }


    render() {
        console.log('App render');

        // if (Math.random() > 0.7) {
        //     throw new Error('Car random failed');
        // }

        const inputClasses = [classes.input];

        if (this.props.name !== '') {
            inputClasses.push(classes.green);
        } else {
            inputClasses.push(classes.red);
        }

        if (this.props.name.length > 4) {
            inputClasses.push(classes.bold);
        }

        const style = {
            border: '1px solid #ccc',
            boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 14)',
            ':hover': {
                border: '1px solid #aaa',
                boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
                cursor: 'pointer'
            }
        };


        return (
            <React.Fragment>
                {/*<div className={classes.Car} style={style}>*/}
                {/*Смотри в App.js*/}
                <p>Car name : {this.props.name}</p>
                <p>Year : {this.props.year}</p>
                {/*Динамические списки + классы*/}

                <input
                    // Референции
                    // ref={(inputRef)=>this.inputRef = inputRef}
                    ref={this.inputRef}
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />

                <button onClick={this.props.onDelete}>Delete</button>
                {/*end Динамические списки*/}

                {/*<button onClick={this.props.onChangetitle}>Click</button>*/}
                {/*</div>*/}
            </React.Fragment>
        )
    }
}
// Валидация параметров с PropTypes
Car.propTypes = {
    name: PropTypes.string,
    year:  PropTypes.number,
    index:  PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
};

// const Car = (props) => {
//
//     const  inputClasses = [classes.input];
//
//     if(props.name !=='') {
//         inputClasses.push(classes.green);
//     } else {
//         inputClasses.push(classes.red);
//     }
//
//     if(props.name.length > 4 ) {
//         inputClasses.push(classes.bold);
//     }
//
//     const style = {
//         border: '1px solid #ccc',
//         boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 14)',
//         ':hover' :{
//             border: '1px solid #aaa',
//             boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
//             cursor: 'pointer'
//         }
//     };
//
//
//     return (
//         <div className={classes.Car} style={style}>
//             {/*Смотри в App.js*/}
//             <p>Car name : {props.name}</p>
//             <p>Year : {props.year}</p>
//             {/*Динамические списки + классы*/}
//
//             <input
//                 type="text"
//                 onChange={props.onChangeName}
//                 value={props.name}
//                 className={inputClasses.join(' ')}
//             />
//
//             <button onClick={props.onDelete}>Delete</button>
//             {/*end Динамические списки*/}
//
//             {/*<button onClick={props.onChangetitle}>Click</button>*/}
//         </div>
//     )
// };

//Создание State

export default withClass(Radium(Car),classes.Car);

