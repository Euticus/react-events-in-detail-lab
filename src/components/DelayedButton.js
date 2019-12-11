// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component {
    delay = (e) => {
        e.persist();
        setTimeout(() =>  {
            this.props.onDelayedClick(e);
        },
            this.props.delay)
    };
    render(){
        return (
            <button onClick= {this.delay}>DELAY</button>
        // <button onClick={() => setTimeout(this.props.onDelayedClick, this.props.delay)></button>
        )
    }

}