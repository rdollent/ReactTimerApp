var React = require("react");
var ReactDOM = require("react-dom");

// object destructuring
var {Route, Router, IndexRoute, hashHistory} = require("react-router");

var Main = require("Main");
var Timer = require("Timer");
var Countdown = require("Countdown");



// load foundation
// old css versionW--- require("style!css!foundation-sites/dist/foundation.min.css");

// require does not know how to load css. use css! loader
$(document).foundation();


// app css
// comment this out for webpack to work
require("style!css!sass!applicationStyles");
// require('applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Timer}></IndexRoute>
            <Route path="countdown" component={Countdown}></Route>
        </Route>
        
    </Router>,
    document.querySelector("#app")
);



