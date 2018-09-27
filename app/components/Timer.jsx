var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');
var CountdownForm = require('CountdownForm');

class Timer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            countdownStatus: 'stopped'
        };
        // bind or use arrow functions
        // this.handleSetCountdown = this.handleSetCountdown.bind(this);
    }

    handleSetCountdown = (seconds) => {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    }

    // status passed down from/to Controls
    handleStatusChange = (newStatus) => {
        this.setState({
            countdownStatus: newStatus
        });
    }

    startTimer = () => {
        this.timer = setInterval(() => {
            var newCount = this.state.count + 1;
            this.setState({
                count: newCount
            });
        }, 1000);
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                    // no break will fire off case for both stopped and paused
                case 'paused':
                    // since no break, following code will run for BOTH stopped and paused
                    // but it will not fire off setState count to 0
                    // cancel setInterval
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    }

    componentWillUnmount = () => {
        console.log('component will unmount');
        clearInterval(this.timer)
        this.timer = undefined;
    }
    

    render = () => {
        var {count, countdownStatus} = this.state;
        // we want to render CountdownForm only when stopped
        var renderControlArea = () => {
            if(countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
            }
        }
        return(
            <div>
                <h1 className="page-title">Timer App</h1>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>
        )
    }
}

module.exports = Timer;

