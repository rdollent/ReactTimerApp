var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

class Countdown extends React.Component{
    constructor(props) {
        super(props);
        this.state = {count: 0};
        // bind or use arrow functions
        // this.handleSetCountdown = this.handleSetCountdown.bind(this);
    }

    handleSetCountdown = (seconds) => {
        this.setState({
            count: seconds
        });
    }
    render() {
        var {count} = this.state;
        return(
            <div>
                <Clock totalSeconds={count} />
                <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            </div>
        )
    }
}

module.exports = Countdown;

