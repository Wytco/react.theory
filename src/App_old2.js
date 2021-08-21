import React, {Component} from 'react';
import './App.scss';
import Car from './Car/Car'
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter";

// Context API
export const ClickContext = React.createContext(false);

class App extends Component {

    //Создание State
    //Вариант 2
    constructor(props) {
        //console.log('App constructor');
        super(props);
        this.state = {
            click : false,
            cars: [
                {name: 'Ford', year: 2018},
                {name: 'Audi', year: 2016},
                {name: 'Mazda', year: 2010}
            ],
            pageTitle: 'This is Cars',
            showCars: false

        };
    }

    //Вариант 1
    // state = {
    //     cars: [
    //         {name: 'Ford', year: 2018},
    //         {name: 'Audi', year: 2016},
    //         {name: 'Mazda', year: 2010}
    //     ],
    //     pageTitle: 'This is Cars',
    //     showCars : true
    //
    // };

    //Меняем по инверсии (будет тру на фолс и на оборот)
    toogleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        });
    };

    onChangeName = (name, index) => {
        const car = this.state.cars[index];
        car.name = name;
        const cars = [...this.state.cars.concat()];
        cars[index] = car;
        this.setState({
            cars: cars
        });
    };

    // Если использовать как фукцию, то надо bind использовать в выводе
    deleteHandler(index) {
        const cars = this.state.cars.concat();
        cars.splice(index, 1);
        this.setState({
            cars: cars
        });
    };

    //Базовый жизненный цикл
    // componentWillMount() {
    //    // console.log('App componentWillMount')
    // }
    //
    // componentDidMount() {
    //    // console.log('App componentDidMount в php тоже что render ')
    // }

    render() {
        // console.log('App render ');
        const divStyle = {
            'textAlign': 'center'
        };


        let carsShow = null;

        if (this.state.showCars) {
            carsShow = this.state.cars.map((car, index) => {
                return (
                    <ErrorBoundary key={index}>
                        <Car
                            key={index}
                            name={car.name}
                            year={car.year}
                            // Референции
                            index = {index}
                            // onChangetitle={() => this.changeTitleHandler(car.name + ' Changed')}
                            onChangeName={(event) => this.onChangeName(event.target.value, index)}
                            onDelete={this.deleteHandler.bind(this, index)}
                        />
                    </ErrorBoundary>
                )
            })
        }

        return (

            <div style={divStyle} className="App">
                <h1 style={{color: 'red', fontSize: '30px'}}>{this.state.pageTitle}</h1>
                <h1>{this.props.title}</h1>

                <ClickContext.Provider value={this.state.click}>
                    <Counter />
                </ClickContext.Provider>
                <br/>
                <button
                    className={'AppButton'}
                    onClick={this.toogleCarsHandler}
                >Change Title
                </button>

                <button onClick={()=> this.setState({click:true})} >Click</button>
                <div style={{
                    width: 400,
                    margin: 'auto',
                    paddingTop: '20px'
                }}>
                    {carsShow}
                </div>
            </div>
        );
    }
}

export default App;
