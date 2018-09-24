var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

class Countdown extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            countdownStatus: 'stopped'
        };
        // bind or use arrow functions
        // this.handleSetCountdown = this.handleSetCountdown.bind(this);
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
    // // willUpdate is unsafe/will be deprecated
    // componentWillUpdate = (nextProps, nextState) => {
        
    // }

    // // note willmount is unsafe/will be deprecated
    // componentWillMount = () => {
    //     console.log('component will mount');
        
    // }

    // componentDidMount =() => {
    //     console.log('component did mount');
    // }

    componentWillUnmount = () => {
        console.log('component will unmount');
        clearInterval(this.timer)
        this.timer = undefined;
    }

    startTimer = () => {
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });

            if(newCount === 0) {
                this.setState({
                    countdownStatus: 'stopped'
                });
            }
        }, 1000);
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
                <Clock totalSeconds={count} />
                {renderControlArea()}
            </div>
        )
    }
}

module.exports = Countdown;

