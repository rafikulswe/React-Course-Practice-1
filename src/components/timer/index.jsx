import React, { Component } from 'react';
import TimerCss from '../../assets/sass/timer.module.scss';

class Timer extends Component {
    state = { 
        counter: 0
    }
    intervalId = null;

    increament = () => {
        this.setState({counter: this.state.counter + 1});
    }
    decreament = () => {
        if (this.state.counter > 0) {
            this.setState({counter: this.state.counter - 1});
        }
    }
    startCount = () => {
        if (this.state.counter > 0 && !this.intervalId) {
            this.intervalId = setInterval(() => {
                this.setState({ counter: this.state.counter - 1 }, () => {
                    if (this.state.counter === 0) {
                        alert('Timer Finished');
                        clearInterval(this.intervalId);
                        this.intervalId = null;
                    }
                })
            }, 1000)
        }
    }
    stopCount = () => {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
    resetCount = () => {
        this.setState({ counter: 0 });
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    render() { 
        return ( 
            <div className={TimerCss.container}>
                <button className={TimerCss.btnTimer }onClick={this.decreament}> - </button>
                <span> {this.state.counter} </span>
                <button className={TimerCss.btnTimer} onClick={this.increament}> + </button>
                <div className="timer-function">
                    <button className={TimerCss.btnTimer} onClick={this.startCount}>Start</button>
                    <button className={TimerCss.btnTimer} onClick={this.stopCount}>Pause</button>
                    <button className={TimerCss.btnTimer} onClick={this.resetCount}>Reset</button>
                </div>
            </div>
        );
    }
}
 
export default Timer;