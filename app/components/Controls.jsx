var React = require('react');

class Controls extends React.Component{
    constructor(props) {
        super(props);
    }

    onStatusChange = (newStatus) => {
        // return a function, currying
        return () => {
            this.props.onStatusChange(newStatus);
        }
    }

    // // note willReceiveProps is unsafe and will be deprecated
    // componentWillReceiveProps = (nextProps) => {
    //     console.log('component will receive props', nextProps.countdownStatus);
    // }

    render = () => {
        var {countdownStatus} = this.props;

        // conditionally render pause or start button
        // cannot do it inside JSX return
        var renderStartStopButton = () => {
            if(countdownStatus === 'started') {
                return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
            } else if(countdownStatus === 'paused') {
                return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
            }
        }
        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        )
    }
}


Controls.propTypes = {
    countdownStatus: React.PropTypes.string.isRequred,
    onStatusChange: React.PropTypes.func.isRequred
}

module.exports = Controls;