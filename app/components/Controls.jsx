var React = require('react');

class Controls extends React.Component{
    constructor(props) {
        super(props);
    }

    render = () => {
        var {countdownStatus} = this.props;

        // conditionally render pause or start button
        // cannot do it inside JSX return
        var renderStartStopButton = () => {
            if(countdownStatus === 'started') {
                return <button className="button secondary">Pause</button>
            } else if(countdownStatus === 'paused') {
                return <button className="button primary">Start</button>
            }
        }
        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow">Clear</button>
            </div>
        )
    }
}


Controls.propTypes = {
    countdownStatus: React.PropTypes.string.isRequred
}

module.exports = Controls;