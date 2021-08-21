import React from 'react';
import {ClickContext} from '../App'

export default props => {
    return (
        <div>
            <h3>Counter 2</h3>
            <ClickContext.Consumer>
                {click => click ? <p>Click</p> : null}
            </ClickContext.Consumer>
        </div>
    )
}