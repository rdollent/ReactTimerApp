var React = require('react');

class CountdownForm extends React.Component {
    constructor(props) {
        super(props);
        // bind this to functions
        // https://stackoverflow.com/questions/29577977/unable-to-access-react-instance-this-inside-event-handler
        // bind your methods or use arrow functions
        // this.onSubmit = this.onSubmit(this);

    }

    onSubmit = (e) => {
        e.preventDefault();
        var strSeconds = this.refs.seconds.value;

        if(strSeconds.match(/^[0-9]+$/)) {
            this.refs.seconds.value = '';
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} ref="form" className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        )
       
    }
}

module.exports = CountdownForm;