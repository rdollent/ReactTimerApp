var React = require("react");
// remember to use {}
var {Link, IndexLink} = require("react-router");

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
    return(
        <div>
            <div className="top-bar">
                
            
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            <h3>React Time App</h3>
                        </li>
                        <li className="menu-text">
                            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
                        </li>
                        <li className="menu-text">
                            <Link to="/" activeClassName="active-link">Countdown</Link>
                        </li>
                        
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            Created by <a href="https://github.com/rdollent" target="_blank">rdollent</a>
                        </li>
                    </ul>
                </div>
            </div>
            
            
        </div>
    )
        
    }
}

module.exports = Nav;