import React, {Component} from 'react'
import './App.scss'
import About from './About/About'
import Cars from './Cars/Cars'
import {Route, Switch, NavLink, Redirect} from 'react-router-dom'
import CarDetail from "./CarDetail/CarDetail"
import {connect} from 'react-redux'
import NewCounterRedux from "./NewCounterRedux";
import {add, addNumber, sub, AsyncAdd} from "./Redux/ActionsRedux/Actions";

class App extends Component {
    state = {
        isLoggedIn: false
    };

    render() {
        return (
            <div>
                <nav className="nav">
                    <ul>
                        <li>
                            <NavLink
                                exact
                                to="/"
                                activeClassName={'wfm-active'}
                                activeStyle={{color: 'blue'}}
                            >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to={{
                                pathname: '/cars'
                                //Основные параметры
                                // pathname: '/cars',
                                // search: '?a=1&b=2',
                                // hash: 'wfm-hash'
                            }}>Cars</NavLink>
                        </li>
                    </ul>
                </nav>

                <hr/>

                <div className={'App'}>
                    <h1>Счетчик <strong>{this.props.counter}</strong></h1>

                    <hr/>
                    <div className="Actions">
                        <button onClick={this.props.onAdd}>Добавить 1</button>
                        <button onClick={this.props.onSub}>Вычесть 1</button>
                    </div>
                    <hr/>
                    <div className="Actions">
                        <button onClick={() => this.props.onAddNumber(15)}>Добавить 15</button>
                        <button onClick={() => this.props.onAddNumber(-17)}>Вычесть 17</button>
                    </div>
                    <hr/>
                    <NewCounterRedux/>
                    <hr/>
                    <div className="Actions">
                        <button onClick={() => this.props.onAsyncAdd(100)}>Асинхронно добавить 100</button>
                    </div>

                </div>

                <hr/>
                <div>
                    <h3>Is logged in {this.state.isLoggedIn ? 'true' : 'false'}</h3>
                    <button onClick={() => this.setState({isLoggedIn: true})}>login</button>
                </div>
                <hr/>
                {/*http://localhost:3000/*/}
                {/*<Redirect from={'/about'} to={'/cars'}/>*/}
                <Switch>
                    <Route path='/' exact render={() => <h1>home</h1>}/>

                    {this.state.isLoggedIn ? <Route path='/about' component={About}/> : null}
                    {/*<Route path='/about' component={About}/>*/}

                    <Route path='/cars/:name' exact component={CarDetail}/>
                    <Route path='/cars' component={Cars}/>
                    {/*<Route render={() => <h1>404</h1>}/>*/}
                    <Redirect to={'/'}/>

                    {/*<Route path='/about' render={() => <About />}/>*/}
                    {/*<Route path='/cars' render={() => <Cars />}/>*/}
                </Switch>

                {/*<About />*/}

                {/*<Cars />*/}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter1.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch(add()),
        onSub: () => dispatch(sub()),
        onAddNumber: (number) => dispatch(addNumber(number)),
        onAsyncAdd: (number) => dispatch(AsyncAdd(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
