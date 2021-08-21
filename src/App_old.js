import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car'

class App_old extends Component {

    //Создание State
    state = {
        cars: [
            {name: 'Ford', year: 2018},
            {name: 'Audi', year: 2016},
            {name: 'Mazda', year: 2010}
        ],
        pageTitle: 'This is Cars',
        showCars : false

    };

    changeTitleHandler = (newTitle) => {
        // const oldTitle = this.state.pageTitle;
        // const newTitle = oldTitle + ' Updated';

        this.setState({
            pageTitle: newTitle
        });
    };

    // handleInput = (event) => {
    //     this.setState({
    //         pageTitle: event.target.value
    //     });
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
        cars.splice(index,1);
        this.setState({
            cars: cars
        });
    };

    render() {
        const divStyle = {
            'textAlign': 'center'
        };

        const cars = this.state.cars;

        let carsShow  = null;

        if(this.state.showCars) {
            carsShow =  this.state.cars.map((car,index)=>{
                return (
                    <Car
                        key={index}
                        name={car.name}
                        year={car.year}
                        // onChangetitle={() => this.changeTitleHandler(car.name + ' Changed')}
                        onChangeName={(event) => this.onChangeName(event.target.value,index)}
                        onDelete={this.deleteHandler.bind(this,index)}
                    />
                )
            })
        }

        return (

            <div style={divStyle} className="App">
                <h1 style={{color: 'red', fontSize: '30px'}}>{this.state.pageTitle}</h1>

                <button
                    onClick={this.toogleCarsHandler}
                >Change Title</button>

                {/*Динамические списки*/}


                { carsShow }

                {/*{*/}
                {/*    this.state.showCars ?*/}
                {/*        this.state.cars.map((car,index)=>{*/}
                {/*            return (*/}
                {/*                <Car*/}
                {/*                    key={index}*/}
                {/*                    name={car.name}*/}
                {/*                    year={car.year}*/}
                {/*                    onChangetitle={() => this.changeTitleHandler(car.name + ' Changed')}*/}
                {/*                />*/}
                {/*            )*/}
                {/*        })*/}
                {/*        : null*/}
                {/*}*/}

                {/*{*/}
                {/*    this.state.cars.map((car,index)=>{*/}
                {/*        return (*/}
                {/*            <Car*/}
                {/*                key={index}*/}
                {/*                name={car.name}*/}
                {/*                year={car.year}*/}
                {/*                onChangetitle={() => this.changeTitleHandler(car.name + ' Changed')}*/}
                {/*            />*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}

                {/*<input type="text" onChange={this.handleInput}/>*/}

                {/*События*/}
                {/*<button*/}
                {/*    onClick={this.changeTitleHandler.bind(this, ' Changed')}*/}
                {/*>Change Title</button>*/}


                {/*<Car*/}
                {/*    name={cars[0].name}*/}
                {/*    year={cars[0].year}*/}
                {/*    // onChangetitle={this.changeTitleHandler}*/}
                {/*    onChangetitle={this.changeTitleHandler.bind(this, cars[0].name + ' Changed')}*/}
                {/*/>*/}
                {/*<Car*/}
                {/*    name={cars[1].name}*/}
                {/*    year={cars[1].year}*/}
                {/*    onChangetitle={() => this.changeTitleHandler(cars[1].name + ' Changed')}*/}
                {/*/>*/}
                {/*<Car*/}
                {/*    name={cars[2].name}*/}
                {/*    year={cars[2].year}*/}
                {/*/>*/}
            </div>
        );


        //Диманический компонент
        // const divStyle = {
        //     'textAlign': 'center'
        // };
        // return (
        //     <div style={divStyle} className="App">
        //         <h1 style={{color: 'red', fontSize : '30px'}}>Hello world</h1>
        //
        //         <Car name={'Ford'} year={2018}>
        //             <p style={{color : 'red'}}>Color</p>
        //         </Car>
        //         <Car name={'Audi'} year={2010}/>
        //         <Car name={'Mazda'} year={2012}/>
        //
        //     </div>
        // );

        // return React.createElement(
        //     'div',
        //     { className : 'App'},
        //     React.createElement(
        //         'h1',
        //         null,
        //         'Hello world'
        //     )
        // )
    }
}

export default App;
