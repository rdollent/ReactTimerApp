var React = require('react');

var Clock = require('Clock');

class Countdown extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Clock totalSeconds={129} />
            </div>
        )
    }
}

module.exports = Countdown;

